import Reacr, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  Container,
  Hidden,
  Button,
  Box,
  Dialog,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import firebase from "../../../firebase/index";
import { useDocument } from "@nandorojo/swr-firestore";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = makeStyles((theme) => ({
  secttion1: {
    height: "20px",
    backgroundColor: theme.palette.common.white,
    //  paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
  },
  secttion2: {
    height: "50px",
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
  },
  paper: {
    /*     margin: "0",
    padding: "0", */
  },
  logo: {
    //   marginRight: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header1 = () => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const { data, error, loading } = useDocument("adminSettings/agencyProfile");
  return (
    <>
      <Paper className={classes.paper}>
        <Container>
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
                  <AccountCircleIcon fontSize="small" />
                </Typography>
              </Grid>
              <Grid item xs container spacing={1} justify="flex-end">
                <Grid item xs="auto">
                  <CallIcon fontSize="small" />
                </Grid>
                <Grid item xs="auto">
                  <Typography variant="subtitle2">
                    {!data ? (
                      <Skeleton variant="text" width={100} />
                    ) : (
                      data.primaryContact
                    )}
                  </Typography>
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
              <Hidden xsDown>
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
              </Hidden>
              <Hidden smUp>
                <Grid
                  item
                  container
                  xs
                  spacing={1}
                  justify="flex-end"
                  alignItems="center"
                >
                  <Box mr={1}>
                    <IconButton onClick={() => setOpen((prev) => !prev)}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper>
        <Dialog
          fullScreen
          open={open}
          // onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Grid container direction="column">
            <Button variant="text">
              <CloseIcon onClick={() => setOpen((prev) => !prev)} />
            </Button>
            <Button variant="outlined">Home</Button>
            <Button variant="text">Flight</Button>
            <Button variant="text">Hotel</Button>
            <Button variant="text">Blog</Button>
          </Grid>
        </Dialog>
      </Paper>
    </>
  );
};

export default Header1;
