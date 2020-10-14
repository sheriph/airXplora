import React, { useState, useEffect } from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";

const AnimatedSave = ({ updateDate }) => {
  const [icon, setIcon] = useState(<SaveIcon />);
  let id1;
  let id2;

  const handleSave = () => {
    updateDate();

    setIcon(<CircularProgress size="20px" color="inherit" />);
    id1 = setTimeout(() => {
      setIcon(<CheckIcon />);
    }, 500);
    id2 = setTimeout(() => {
      setIcon(<SaveIcon />);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, []);

  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={icon}
      onClick={handleSave}
    >
      Save
    </Button>
  );
};

export default AnimatedSave;
