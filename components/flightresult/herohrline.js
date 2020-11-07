import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  LinearProgress,
  Box,
  Typography,
  Tooltip,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {
  getFlightDuration,
  getLayover,
  getLayoverPoints,
} from "../general/utilities";

const styles = makeStyles((theme) => ({
  linearProgress: {
    width: "100%",
  },
  smallTextflightDuration: {
    fontSize: "10px",
    color: theme.palette.grey[600],
  },
  arrow: {
    transform: "rotate(270deg)",
    fontSize: "10px",
  },
  arrowtext: {
    fontSize: "10px",
    position: "relative",
    bottom: "8px",
  },
  arrowicongrid: {
    width: "10px",
    height: "10px",
    position: "relative",
    bottom: "4px",
  },
}));

const HeroHrLine = ({ segments, duration }) => {
  if (!segments || !duration) return <>loading ... </>;
  // getLayoverPoints(segments);
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const [progress, setProgress] = React.useState(0);
  const [layover, setLayover] = useState(getLayoverPoints(segments));
  const classes = styles();

  

  return (
    <Container disableGutters>
      <Grid container spacing={0} justify="center">
        <Grid item xs={12}>
          <Typography
            className={classes.smallTextflightDuration}
            align="center"
          >
            {getFlightDuration(duration)}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.linearProgress}>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
        {layover.map((item, index) => (
          <Grid item container justify="center" xs={3} key={item.id}>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item className={classes.arrowicongrid}>
                  <PlayArrowIcon className={classes.arrow} color="primary" />
                </Grid>
                <Grid item>
                  <Typography className={classes.arrowtext}>
                    {item.iataCode}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HeroHrLine;
