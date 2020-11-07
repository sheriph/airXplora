import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = makeStyles((theme) => ({
  listitemroot: {
    padding: "0",
  },
}));
const StopsFilter = () => {
  const classes = styles();
  const [checked, setCheck] = useState(false);
  return (
    <Container>
      <List>
        <ListItem
          onClick={() => setCheck((p) => !p)}
          disableGutters
          classes={{ root: classes.listitemroot }}
          button={true}
        >
          <ListItemIcon>
            <Checkbox checked={checked} checkedIcon={<FavoriteIcon />} />
          </ListItemIcon>
          <ListItemText>Any</ListItemText>
        </ListItem>

        <ListItem
          onClick={() => setCheck((p) => !p)}
          disableGutters
          classes={{ root: classes.listitemroot }}
          button={true}
        >
          <ListItemIcon>
            <Checkbox checked={checked} checkedIcon={<FavoriteIcon />} />
          </ListItemIcon>
          <ListItemText>Nonstop (Direct)</ListItemText>
        </ListItem>

        <ListItem
          onClick={() => setCheck((p) => !p)}
          disableGutters
          classes={{ root: classes.listitemroot }}
          button={true}
        >
          <ListItemIcon>
            <Checkbox checked={checked} checkedIcon={<FavoriteIcon />} />
          </ListItemIcon>
          <ListItemText>Upto 1 Stop</ListItemText>
        </ListItem>
       
      </List>
    </Container>
  );
};

export default StopsFilter;
