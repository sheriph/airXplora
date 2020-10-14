import React from "react";
import { Grid, ButtonBase, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = makeStyles((theme) => ({
  root: {
    borderWidth: "thin",
    borderColor: theme.palette.grey[300],
    borderStyle: "solid",
    width: "35px",
    height: "35px",
    padding: "5px",
  },
}));

const PassengerValue = ({ val }) => {
  const classes = styles();
  return (
    <ButtonBase disableRipple>
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.root}>
          <Typography>{val}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};
export default PassengerValue;
