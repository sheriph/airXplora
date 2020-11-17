import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { Container, Grid } from "@material-ui/core";
import { formatPrice, getMaxAndMinPriceArray } from "../general/utilities";
import { useRecoilState } from "recoil";
import { priceFilterValue_ } from "../../recoil/state";

const useStyles = makeStyles((theme) => ({}));

const AirbnbSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
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
}))(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function MyAirbnbSlider({ range, priceCount }) {
  if (!range) return <>Range not definded</>;
  const [value, setValue] = useState(range);
  const [filterRange, setFilterRange] = useRecoilState(priceFilterValue_);

  useEffect(() => {
    if (filterRange) {
      console.log("reseting price");
      setValue(range);
      setFilterRange(undefined);
    }
  }, [priceCount]);

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Typography>
            From &#8358;{formatPrice(value[0])} - &#8358;{formatPrice(value[1])}
          </Typography>
        </Grid>
      </Grid>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        value={value}
        onChange={(e, v) => {
          setValue([...v]);
        }}
        //   onChangeCommitted={(e, v) => handleChangeCommited(v)}
        max={range[1]}
        min={range[0]}
        onMouseUp={() => setFilterRange([...value])}
        onPointerUp={() => setFilterRange([...value])}
        //   defaultValue={value}
      />
    </Container>
  );
}
