import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FromAndToSearch from "./fromandtosearch";
import FromAndToSearch1 from "./fromandtosearch1";
import FromAndToSearch2 from "./fromandtosearch2";
import FromAndToSearch3 from "./fromandtosearch3";
import FromAndToSearch4 from "./fromandtosearch4";

import DatePicker from "../datepicker/datepicker";
import DatePicker1 from "../datepicker/datepicker1";
import DatePicker2 from "../datepicker/datepicker2";
import DatePicker3 from "../datepicker/datepicker3";
import DatePicker4 from "../datepicker/datepicker4";

import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { Container, Grid, Box, ButtonBase } from "@material-ui/core";
import { useRecoilState } from "recoil";
import {
  showRepeater1_,
  showRepeater2_,
  showRepeater3_,
  showRepeater4_,
} from "../../recoil/state";

export const RepeaterInput = () => {
  const [showRepeater1, toggleShowRepeater1] = useRecoilState(showRepeater1_);

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FromAndToSearch />
        </Grid>
        <Grid item xs={6}>
          <DatePicker />
        </Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item>
            <Box py={1.5}>
              <ButtonBase
                focusRipple={true}
                onClick={() => toggleShowRepeater1(true)}
              >
                <AddBoxIcon
                  color={showRepeater1 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export const RepeaterInput1 = () => {
  const [showRepeater2, toggleShowRepeater2] = useRecoilState(showRepeater2_);
  const [showRepeater1, toggleShowRepeater1] = useRecoilState(showRepeater1_);

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FromAndToSearch1 />
        </Grid>
        <Grid item xs={6}>
          <DatePicker1 />
        </Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item>
            <Box py={1.5}>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater2) {
                    return;
                  } else {
                    toggleShowRepeater2(true);
                  }
                }}
              >
                <AddBoxIcon
                  color={showRepeater2 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater2) {
                    return;
                  } else {
                    toggleShowRepeater1(false);
                  }
                }}
              >
                <DeleteSweepIcon
                  color={showRepeater2 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export const RepeaterInput2 = () => {
  const [showRepeater2, toggleShowRepeater2] = useRecoilState(showRepeater2_);
  const [showRepeater3, toggleShowRepeater3] = useRecoilState(showRepeater3_);

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FromAndToSearch2 />
        </Grid>
        <Grid item xs={6}>
          <DatePicker2 />
        </Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item>
            <Box py={1.5}>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater3) {
                    return;
                  } else {
                    toggleShowRepeater3(true);
                  }
                }}
              >
                <AddBoxIcon
                  color={showRepeater3 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater3) {
                    return;
                  } else {
                    toggleShowRepeater2(false);
                  }
                }}
              >
                <DeleteSweepIcon
                  color={showRepeater3 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export const RepeaterInput3 = () => {
  const [showRepeater4, toggleShowRepeater4] = useRecoilState(showRepeater4_);
  const [showRepeater3, toggleShowRepeater3] = useRecoilState(showRepeater3_);

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FromAndToSearch3 />
        </Grid>
        <Grid item xs={6}>
          <DatePicker3 />
        </Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item>
            <Box py={1.5}>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater4) {
                    return;
                  } else {
                    toggleShowRepeater4(true);
                  }
                }}
              >
                <AddBoxIcon
                  color={showRepeater4 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
              <ButtonBase
                focusRipple={true}
                onClick={() => {
                  if (showRepeater4) {
                    return;
                  } else {
                    toggleShowRepeater3(false);
                  }
                }}
              >
                <DeleteSweepIcon
                  color={showRepeater4 ? "disabled" : "primary"}
                  fontSize="large"
                />
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export const RepeaterInput4 = () => {
  const [showRepeater4, toggleShowRepeater4] = useRecoilState(showRepeater4_);
  const [showRepeater3, toggleShowRepeater3] = useRecoilState(showRepeater3_);

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FromAndToSearch4 />
        </Grid>
        <Grid item xs={6}>
          <DatePicker4 />
        </Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item>
            <Box py={1.5}>
              <ButtonBase focusRipple={true}>
                <AddBoxIcon color="disabled" fontSize="large" />
              </ButtonBase>
              <ButtonBase
                focusRipple={true}
                onClick={() => toggleShowRepeater4(false)}
              >
                <DeleteSweepIcon color="primary" fontSize="large" />
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
