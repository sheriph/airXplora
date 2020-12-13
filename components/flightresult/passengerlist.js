import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PassengerList = ({ travelers }) => {
  const classes = useStyles();

  return (
    <Grid container spacing = {1}>
      {travelers &&
        travelers.map((person, index) => (
          <Grid item key={index}>
            <List dense disablePadding>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    {person.name.lastName.split("")[0].toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${person.name.lastName.toUpperCase()}`}
                  secondary={`${person.name.firstName.toLowerCase()}`}
                />
              </ListItem>
            </List>
          </Grid>
        ))}
    </Grid>
  );
};

export default PassengerList;
