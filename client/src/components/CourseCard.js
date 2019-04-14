import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  mediaDisabled: {
    opacity: 0.7
  },
  pos: {
    marginBottom: 12
  },
  posHighlight: {
    color: theme.palette.primary.main
  }
});

const transformCourseToViewModel = ({
  classes,
  id,
  status,
  image,
  name,
  summary,
  progress,
  price
}) => {
  const actions = [];
  const isDisabled = status !== "ACTIVE";
  let posExtraClass, posLabel;

  if (status === "ACTIVE") {
    if (progress && progress.length > 0) {
      const progressTotal = progress.length;
      const progressCount = progress.filter(p => p.status === "DONE").length;

      if (progressCount === progressTotal) {
        posLabel = "Concluído";
      } else if (progressCount === 0) {
        posLabel = "Não iniciado";
      } else {
        const progressPercent = Math.floor(
          (progressCount * 100) / progressTotal
        );
        posLabel = `Progresso: ${progressPercent}%`;
      }

      actions.push({
        label: progressCount === 0 ? "Começar" : "Continuar"
      });
    } else {
      posLabel = price ? `Preço: R$ ${price}` : "Grátis";
      posExtraClass = classes.posHighlight;

      actions.push({ label: "Saber mais" });
      actions.push(
        price
          ? { label: "Comprar", link: `/payment/course/${id}` }
          : { label: "Começar" }
      );
    }
  } else if (status === "CANCELED") {
    posLabel = "Cancelado";

    actions.push({ label: "Reativar" });
  } else {
    posLabel = "Em breve...";

    actions.push({ label: "Saber mais" });
  }

  return {
    image,
    name,
    summary,
    actions,
    isDisabled,
    posExtraClass,
    posLabel
  };
};

const CourseCard = props => {
  const { classes } = props;
  const {
    image,
    name,
    summary,
    actions,
    isDisabled,
    posExtraClass,
    posLabel
  } = transformCourseToViewModel(props);

  return (
    <Card className={classes.card}>
      <CardActionArea disabled={isDisabled}>
        <CardMedia
          className={classNames(classes.media, {
            [classes.mediaDisabled]: isDisabled
          })}
          image={`/images/${image}`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {posLabel && (
            <Typography
              className={classNames(classes.pos, posExtraClass)}
              color="textSecondary"
            >
              {posLabel}
            </Typography>
          )}
          <Typography component="p">{summary}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {actions.map(action => (
          <Button
            key={action.label}
            size="small"
            color="primary"
            component={action.link ? Link : "button"}
            to={action.link}
          >
            {action.label}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(CourseCard);
