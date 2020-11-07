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
  ButtonBase,
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

const HeroMobileCard = ({ flightOffer }) => {
  const classes = styles();
  // const isMobile = useMediaQuery("(max-width: 600px)");

  const itineraries = flightOffer.itineraries;
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardContent>
            {itineraries.map((itinerary, index) => (
              <Grid
                key={index}
                container
                spacing={1}
                justify="center"
                alignItems="center"
              >
                <Grid item container justify="center" xs={2}>
                  <Grid item>
                    <img
                      src={`/airlinelogo/${itinerary.segments[0].carrierCode}32.png`}
                      alt="airline logo"
                      width="32px"
                      height="32px"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={2}>
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
                <Grid item xs={5}>
                  <HeroHrLine
                    segments={itinerary.segments}
                    duration={itinerary.duration}
                  />
                </Grid>
                <Grid item xs={3}>
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
              </Grid>
            ))}

            {/*             {flightOffer.itineraries[1] !== undefined ? (
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item container justify="center" xs={2}>
                  <Grid item>
                    <img
                      src="/kq.png"
                      alt="airline logo"
                      width="30px"
                      height="30px"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item>
                      <Typography variant="body2">
                        {getTime(
                          flightOffer.itineraries[1].segments[0].departure.at
                        )}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.iataCodeGrid}>
                      <Typography variant="h6">
                        {
                          flightOffer.itineraries[1].segments[0].departure
                            .iataCode
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <HeroHrLine
                    segments={flightOffer.itineraries[1].segments}
                    duration={flightOffer.itineraries[1].duration}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="body2">
                        {getTime(
                          flightOffer.itineraries[1].segments[
                            flightOffer.itineraries[1].segments.length - 1
                          ].arrival.at
                        )}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.iataCodeGrid}>
                      <Typography variant="h6">
                        {
                          flightOffer.itineraries[1].segments[
                            flightOffer.itineraries[1].segments.length - 1
                          ].arrival.iataCode
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )} */}

            <Grid
              container
              alignItems="center"
              justify="space-evenly"
              className={classes.cardaction}
            >
              <Grid item>
                <Typography variant="button" color="primary">
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
                  <OpenInNewIcon fontSize="small" />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default HeroMobileCard;
