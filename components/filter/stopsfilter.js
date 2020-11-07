import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useRecoilState } from "recoil";
import { stops_ } from "../../recoil/state";

const styles = makeStyles((theme) => ({
  listitemroot: {
    padding: "0",
  },
}));

const StopsFilter = ({ defaultStops, countStops }) => {
  const classes = styles();
  const [stops, setStops] = useState(defaultStops);
  const [stateStops, setStateStops] = useRecoilState(stops_);

  const updateStops = (stop, index) => {
    if (stop.type === "Any" && stop.isSelected === true) return;
    let newStops = [...stops];
    let newStop = { ...stop, isSelected: !stop.isSelected };
    newStops[index] = newStop;

    if (stop.type === "Any") {
      newStops = newStops.map((stop) => {
        if (stop.type === "Any") {
          return { ...stop, isSelected: true };
        } else {
          return { ...stop, isSelected: false };
        }
      });
    } else {
      newStops = newStops.map((stop) => {
        if (stop.type === "Any") {
          return { ...stop, isSelected: false };
        } else {
          return { ...stop };
        }
      });
    }

    setStops(newStops);
    setStateStops(newStops);
  };

  useEffect(() => {
    setStops(defaultStops);
  }, [countStops]);
  //console.log("stateStops", stateStops, stops);
  return (
    <Container>
      <List>
        {stops.map((stop, index) => (
          <ListItem
            onClick={() => updateStops(stop, index)}
            disableGutters
            classes={{ root: classes.listitemroot }}
            button={true}
            key={index}
          >
            <ListItemIcon>
              <Checkbox
                checked={stop.isSelected}
                checkedIcon={<FavoriteIcon />}
              />
            </ListItemIcon>
            <ListItemText>{stop.type}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default StopsFilter;
