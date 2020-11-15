import React from "react";
import {
  Container,
  Grid,
  Divider,
  useMediaQuery,
  Typography,
  makeStyles,
  Box,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import HeroHrLine from "./herohrline";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { formatPrice, getTime } from "../general/utilities";
import GetAirlineName from "./getairlinename";

const styles = makeStyles((theme) => ({
  iataCodeGrid: {
    marginTop: "-10px",
  },
  container: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  cardaction: {
    paddingTop: "5px",
  },
}));

const HeroDesktopCard = ({ flightOffer }) => {
  const classes = styles();
  // const isMobile = useMediaQuery("(max-width: 600px)");
  const itineraries = flightOffer.itineraries;
  return (
    <Container disableGutters>
      <Card>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid
                item
                container
                spacing={1}
                xs={9}
                justify="center"
                alignItems="center"
              >
                {itineraries.map((itinerary, index) => (
                  <React.Fragment key={index}>
                    <Grid item container justify="center" xs={1}>
                      <Grid item>
                        <img
                          src={`/airlinelogo/${itinerary.segments[0].carrierCode}32.png`}
                          alt="airline logo"
                          width="32px"
                          height="32px"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <Grid container>
                        <Grid item>
                          <Typography variant="body2">
                            {getTime(itinerary.segments[0].departure.at)}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.iataCodeGrid}>
                          <Typography variant="h6">
                            {itinerary.segments[0].departure.iataCode}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={8}>
                      <Box px={3}>
                        <HeroHrLine
                          segments={itinerary.segments}
                          duration={itinerary.duration}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="body2">
                            {getTime(
                              itinerary.segments[itinerary.segments.length - 1]
                                .arrival.at
                            )}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.iataCodeGrid}>
                          <Typography variant="h6">
                            {
                              itinerary.segments[itinerary.segments.length - 1]
                                .arrival.iataCode
                            }
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>

              <Grid
                item
                container
                alignContent="flex-start"
                direction="column"
                spacing={1}
                xs={3}
                //     spacing={1}
              >
                <Grid item>
                  <Typography color="primary" variant="button">
                    &#8358; {formatPrice(flightOffer.price.total)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <GetAirlineName
                      airlineCodes={flightOffer.validatingAirlineCodes[0]}
                    />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <OpenInNewIcon />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default HeroDesktopCard;

{
  /* <Grid container justify="space-around" className={classes.cardaction}>
<Grid item>
  <Typography variant="body2"></Typography>&#8358; 214,700
</Grid>
<Grid item>
  <Typography variant="body2">Kenya Airways</Typography>
</Grid>
<Grid item>
  <Typography variant="body2">View</Typography>
</Grid>
</Grid> */
}
