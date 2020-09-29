import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = makeStyles((theme) => ({
  button: {
    height: "48px",
    width: "100%"
    
  },
}));

const SearchButton = () => {
  const classes = styles();
  return (
    <Button
    disableElevation
      variant="contained"
      color="primary"
      size="large"
      startIcon={<SearchIcon />}
      className={classes.button}
    >
      Search
    </Button>
  );
};

export default SearchButton;
