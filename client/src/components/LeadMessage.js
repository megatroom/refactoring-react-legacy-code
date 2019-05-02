import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

const LeadMessage = ({ classes, children }) => (
  <div className={classes.root}>
    <Typography variant="body1">{children}</Typography>
  </div>
);

export default withStyles(styles)(LeadMessage);
