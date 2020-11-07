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
import { airlinesFilter_ } from "../../recoil/state";

const styles = makeStyles((theme) => ({
  listitemroot: {
    padding: "0",
  },
}));

const AirlineFilter = ({ count, airlinesList }) => {
  const classes = styles();
  const [airlinesFilter, setAirlinesFilter] = useState(airlinesList);
  const [stateAirlinesFilter, setStateAirlinesFilter] = useRecoilState(
    airlinesFilter_
  );
  const updateAirlines = (airline, index) => {
    let newAirline = { ...airline, isSelected: !airline.isSelected };
    let newAirlinesFilter = [...airlinesFilter];
    newAirlinesFilter[index] = newAirline;
    setAirlinesFilter(newAirlinesFilter);
    setStateAirlinesFilter(newAirlinesFilter);
  };

  useEffect(() => {
    setAirlinesFilter(airlinesList);
  }, [count]);

  return (
    <Container>
      <List>
        {airlinesFilter.map((airline, index) => (
          <ListItem
            onClick={() => updateAirlines(airline, index)}
            disableGutters
            classes={{ root: classes.listitemroot }}
            button={true}
            key={index}
          >
            <ListItemIcon>
              <Checkbox
                checked={airline.isSelected}
                checkedIcon={<FavoriteIcon />}
              />
            </ListItemIcon>
            <ListItemText>{airline.airlineName}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AirlineFilter;
