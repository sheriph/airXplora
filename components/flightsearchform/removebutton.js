import React from "react";
import { Grid, ButtonBase, makeStyles } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

const styles = makeStyles((theme) => ({
  root: {
    borderWidth: "thin",
    borderColor: theme.palette.grey[300],
    borderStyle: "solid",
    width: "35px",
    height: "35px",
  //  width: "max-content",
    padding: "5px",
  },
}));

const RemoveButton = () => {
  const classes = styles();
  return (
    <ButtonBase>
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.root}>
          <RemoveIcon color="primary" />
        </Grid>
      </Grid>
    </ButtonBase>
  );
};
export default RemoveButton;
