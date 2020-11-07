import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function CustomizedSlider() {
  const classes = useStyles();
  const [value, setValue] = useState([256900, 950300]);
  const [min, setMin] = useState(value[0]);
  const [max, setMax] = useState(value[1]);

  console.log(min, max);
  return (
    <Container className={classes.root}>
      <span>
        {value[0]},{value[1]}
      </span>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        value={value}
        onChange={(e, val) => setValue(val)}
        //   defaultValue={[20, 40]}
        min={min}
        max={max}
      />
    </Container>
  );
}
