import Reacr from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  Container,
  Hidden,
  Button,
  Box,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

const styles = makeStyles((theme) => ({
  secttion1: {
    height: "20px",
    backgroundColor: theme.palette.grey[100],
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  secttion2: {
    height: "50px",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  paper: {
    margin: "0",
    padding: "0",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
}));

const Header1 = () => {
  const classes = styles();
  return (
    <>
      <Paper className={classes.paper}>
        <Box>
          <Grid container>
            <Grid
              item
              container
              className={classes.secttion1}
              xs={12}
              justify="space-between"
            >
              <Grid item xs="auto">
                <Typography variant="subtitle2" style={{ cursor: "pointer" }}>
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs container spacing={1} justify="flex-end">
                <Grid item xs="auto">
                  <CallIcon fontSize="small" />
                </Grid>
                <Grid item xs="auto">
                  <Typography variant="subtitle2">09065369929</Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid item xs="auto">
                    <Typography
                      variant="subtitle2"
                      style={{ cursor: "pointer" }}
                    >
                      <Box ml={2}>Manage My Booking</Box>
                    </Typography>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            <Grid
              item
              container
              className={classes.secttion2}
              xs="auto"
              xs={12}
              alignItems="center"
            >
              <Grid item xs="auto" className={classes.logo}>
                LOGO
              </Grid>
              <Grid
                item
                container
                xs
                spacing={1}
                // justify="flex-end"
                alignItems="center"
              >
                <Grid item xs="auto">
                  <Button variant="outlined">Home</Button>
                </Grid>
                <Grid item xs="auto">
                  <Button variant="text">Flight</Button>
                </Grid>
                <Grid item xs="auto">
                  <Button variant="text">Hotel</Button>
                </Grid>
                <Grid item xs="auto">
                  <Button variant="text">Blog</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Header1;
