import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = makeStyles((theme) => ({
  footerTitle: {
    marginBottom: theme.spacing(2),
  },
  container: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(3),
  },
}));

const ClassicFooter = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.container}>
        <Grid container justify="center">
          <Grid item container direction="column" xs={8} sm={6} spacing={1}>
            <Grid item className={classes.footerTitle}>
              <Typography>Contact Details</Typography>
            </Grid>
            <Grid item container>
              <Grid item xs={2} sm={2} md={1}>
                <HomeIcon />
              </Grid>
              <Grid item xs={9} sm={10} md={11}>
                <Typography>65c Opebi Rd, Ikeja</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={2} sm={2} md={1}>
                <PhoneIcon />
              </Grid>
              <Grid item xs={9} sm={10} md={11}>
                <Typography>09065369929 | 08087164862</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={2} sm={2} md={1}>
                <EmailIcon />
              </Grid>
              <Grid item xs={9} sm={10} md={11}>
                <Typography>info@naijagoingabroad.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={4} sm={2} spacing={1}>
            <Grid item className={classes.footerTitle}>
              <Typography>Helpful Link</Typography>
            </Grid>
            <Grid item>
              <Typography>Home</Typography>
            </Grid>
            <Grid item>
              <Typography>Flight</Typography>
            </Grid>
            <Grid item>
              <Typography>Hotel</Typography>
            </Grid>
            <Grid item>
              <Typography>Blog</Typography>
            </Grid>
            <Grid item>
              <Typography>Contact Us</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} sm={4} spacing={1}>
            <Grid item className={classes.footerTitle}>
              <Typography>Subscribe To Our Newsletter</Typography>
            </Grid>
            <Grid item>
              <TextField variant="outlined" color="primary" />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Box my={2}>
          <Divider />
        </Box>
        <Grid container justify="space-between">
          <Grid item xs="auto">
            <Grid container>
              <Grid item xs="auto">
                <FacebookIcon />
              </Grid>
              <Grid item xs="auto">
                <InstagramIcon />
              </Grid>
              <Grid item xs="auto">
                <TwitterIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            <Typography>
              Copyright &copy; {new Date().getFullYear()} airXplora. All Rights
              Reserved
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClassicFooter;
