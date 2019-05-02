import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

const Heading = ({ classes, children }) => (
  <div className={classes.root}>
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
    <Divider />
  </div>
);

export default withStyles(styles)(Heading);
