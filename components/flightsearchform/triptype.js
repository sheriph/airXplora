import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState } from "recoil";
import { trip_ } from "../../recoil/state";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  radio: {
    marginLeft: "25px",
  },
}));

const TripType = () => {
  const classes = styles();
  const [trip, setTrip] = useRecoilState(trip_);

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  return (
    <RadioGroup
      aria-label="triptype"
      name="triptype1"
      value={trip}
      onChange={handleChange}
      row
      className={classes.radio}
    >
      <FormControlLabel
        value="Round trip"
        control={
          <Radio
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<ThumbUpAltIcon />}
            color="primary"
          />
        }
        label="Round trip"
      />
      <FormControlLabel
        value="One way"
        control={
          <Radio
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<ThumbUpAltIcon />}
            color="primary"
          />
        }
        label="One way"
      />
      <FormControlLabel
        value="Multi-city"
        control={
          <Radio
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<ThumbUpAltIcon />}
            color="primary"
          />
        }
        label="Multi-city"
      />
    </RadioGroup>
  );
};

export default TripType;
