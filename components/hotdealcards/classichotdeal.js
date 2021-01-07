import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
  CardActions,
  Button,
  ButtonBase,
  Box,
  Badge,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import FlightIcon from "@material-ui/icons/Flight";
import ShareIcon from "@material-ui/icons/Share";

const styles = makeStyles((theme) => ({
  media: {
    minHeight: "150px",
    //  width: "300px",
  },
  flightIcon: {
    transform: "rotate(90deg)",
  },
  mediaGrid: {
    height: "150px",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.4)",
    // width: "100%",
  },
  shareIcon: {
    padding: "2px 4px 2px 4px",
  },
  box: {
    color: theme.palette.common.white,
  },
  containerRoot: {
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "15px",
  },
}));

const HotDeal = () => {
  const classes = styles();

  const HotelCard = () => {
    return (
      <Container classes={{ root: classes.containerRoot }}>
        <Paper variant="elevation" elevation={5}>
          <Grid container>
            <Grid item style={{ width: "100%" }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="/eiffel-tower-768501_640.jpg"
                    className={classes.media}
                  >
                    <Grid
                      className={classes.mediaGrid}
                      container
                      alignContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Box className={classes.box}>
                          <Grid container justify="center">
                            <Grid item>
                              <Typography variant="h3">LOS</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="h3">
                                <FlightIcon className={classes.flightIcon} />
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="h3">LHR</Typography>
                            </Grid>
                          </Grid>
                          <Grid container justify="space-around">
                            <Grid item>
                              <Typography variant="caption">Lagos</Typography>
                            </Grid>

                            <Grid item>
                              <Typography variant="caption">London</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardMedia>
                </CardActionArea>
                <CardContent>
                  <Typography variant="subtitle2" align="center">
                    Oct 20, 2020 - Oct 25, 2020
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justify="space-between">
                    <Grid item>
                      <ButtonBase className={classes.shareIcon}>
                        <ShareIcon color="primary" />
                      </ButtonBase>
                    </Grid>
                    <Grid item>
                      <Button size="small" color="primary">
                        &#8358; 125,650 | Book Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };

  const [cardItems, setCardItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [gridUnit, setGridUnit] = useState(12);

  const oneBox = useMediaQuery("(max-width:600px)");
  const twoBox = useMediaQuery("(max-width:900px) and (min-width:600px)");
  const threeBox = useMediaQuery("(max-width:1200px) and (min-width:900px)");
  const fourBox = useMediaQuery("(max-width:5000px) and (min-width:1200px)");

  useEffect(() => {
    if (oneBox) {
      setGridUnit(12);
    } else if (twoBox) {
      setGridUnit(6);
    } else if (threeBox) {
      setGridUnit(4);
    } else if (fourBox) {
      setGridUnit(3);
    }
  });

  return (
    <Container>
      <Grid container justify="center">
        {cardItems.map((card, index) => (
          <Grid classes={{}} xs={gridUnit} item key={index}>
            <HotelCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotDeal;
