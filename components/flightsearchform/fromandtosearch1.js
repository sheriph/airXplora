import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Hidden,
  Paper,
  Box,
  Container,
} from "@material-ui/core";
import FromSearch1 from "./fromsearch1";
import ToSearch1 from "./tosearch1";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import SwapVerticalCircleIcon from "@material-ui/icons/SwapVerticalCircle";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { from1_, fromLocal1_, to1_, toLocal1_ } from "../../recoil/state";
import { shadows } from "@material-ui/system";
import clsx from "clsx";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icongrid: {
    width: "5px",
    //  zIndex: 1500000,
    // padding: "0",
    //   margin: "0",
  },
  verticalicongrid: {
    margin: "0",
    //  zIndex: 1500000,
    width: "5px",
    marginTop: "-10px",
    marginBottom: "-5px",
  },
  fromgrid: {
    flexGrow: 1,
  },
  tosearchmobile: {
    marginTop: "-10px",
  },
  fromsearchmobile: {
    marginBottom: "-5px",
  },
  rotate1: {
    transform: "scaleX(1)",
    transition: "transform 1s",
  },
  rotate2: {
    transform: "scaleX(-1)",
    transition: "transform 1s",
  },
  rotate3: {
    transform: "scaleY(1)",
    transition: "transform 1s",
  },
  rotate4: {
    transform: "scaleY(-1)",
    transition: "transform 1s",
  },
}));

const FromAndToSearch1 = () => {
  const [from, setFrom] = useRecoilState(from1_);
  const [fromLocal, setFromLocal] = useRecoilState(fromLocal1_);
  const [to, setTo] = useRecoilState(to1_);
  const [toLocal, setToLocal] = useRecoilState(toLocal1_);

  const [rotate, setRotate] = useState(false);

  const classes = styles();

  const swapnow = () => {
    if (from && to) {
      setFrom(to);
      setTo(from);
      setFromLocal(toLocal);
      setToLocal(fromLocal);
      setRotate((prev) => !prev);
    }
  };
  return (
    <Container disableGutters>
      <Hidden xsDown>
        <Grid container alignItems="center" justify="center">
          <Grid xs item>
            <FromSearch1 />
          </Grid>
          <Grid
            className={classes.icongrid}
            xs="auto"
            item
            container
            justify="center"
          >
            <Grid onClick={swapnow} style={{ cursor: "pointer" }} item>
              <Box display="flex" borderRadius="10px">
                <SwapHorizontalCircleIcon
                  color={from && to ? "primary" : "disabled"}
                  fontSize="large"
                  className={clsx(
                    !rotate && classes.rotate1,
                    rotate && classes.rotate2
                  )}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid xs item>
            <ToSearch1 />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid container alignItems="center" justify="center">
          <Grid className={classes.fromsearchmobile} xs={12} item>
            <FromSearch1 />
          </Grid>
          <Grid
            className={classes.verticalicongrid}
            xs={12}
            item
            container
            justify="center"
          >
            <Grid
              onClick={swapnow}
              style={{ cursor: "pointer" }}
              xs="auto"
              item
            >
              <Box display="flex" borderRadius="10px">
                <SwapVerticalCircleIcon
                  color={from && to ? "primary" : "disabled"}
                  fontSize="large"
                  className={clsx(
                    !rotate && classes.rotate3,
                    rotate && classes.rotate4
                  )}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid className={classes.tosearchmobile} xs={12} item>
            <ToSearch1 />
          </Grid>
        </Grid>
      </Hidden>
    </Container>
  );
};

export default FromAndToSearch1;
