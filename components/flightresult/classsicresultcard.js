import React from "react";
import {
  Container,
  Grid,
  Divider,
  useMediaQuery,
  Typography,
  makeStyles,
  Drawer,
  Box,
} from "@material-ui/core";
import HeroHrLine from "./herohrline";
import HeroMobileCard from "./hermobilecard";
import HeroDesktopCard from "./herodesktopcard";
import { useRecoilState } from "recoil";
import { isDrawerOpen_ } from "../../recoil/state";

const styles = makeStyles((theme) => ({
  iataCodeGrid: {
    marginTop: "-10px",
  },
}));

const ResultCard = ({ flightOffer }) => {
  const classes = styles();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container disableGutters>
      {isMobile ? (
        <HeroMobileCard flightOffer={flightOffer} />
      ) : (
        <HeroDesktopCard flightOffer={flightOffer} />
      )}
    </Container>
  );
};

export default ResultCard;
