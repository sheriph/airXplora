import React from "react";
import { Grid, ButtonBase, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = makeStyles((theme) => ({
  root: {
    borderWidth: "thin",
    borderColor: theme.palette.grey[300],
    borderStyle: "solid",
    width: "35px",
    height: "35px",
   // width: "max-content",
    padding: "5px",
  },
}));

const AddButton = () => {
  const classes = styles();
  return (
    <ButtonBase>
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.root}>
          <AddIcon color="primary" />
        </Grid>
      </Grid>
    </ButtonBase>
  );
};
export default AddButton;
