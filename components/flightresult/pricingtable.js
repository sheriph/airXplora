import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Badge,
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
} from "@material-ui/core";
import SelectAllIcon from "@material-ui/icons/SelectAll";
import { useRecoilState, useRecoilValue } from "recoil";
import { lowestValue_ } from "../../recoil/state";
import { formatPrice } from "../general/utilities";
import GetAirlineName from "./getairlinename";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = makeStyles((theme) => ({
  buttontext: {
    fontSize: "13px",
  },
  root: {
    padding: "0",
  },
}));

export default function PricingTable({ component, flightOffer }) {
  const classes = styles();
  const lowestValue = useRecoilValue(lowestValue_);
  const currentPrice = Number(flightOffer.price.total);

  return (
    <Container disableGutters>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button
            disableFocusRipple={true}
            disableRipple={true}
            disableTouchRipple={true}
            startIcon={
              currentPrice < lowestValue ? (
                <>
                  <SelectAllIcon color="primary" />
                </>
              ) : (
                <>
                  <Badge badgeContent={1} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </>
              )
            }
            classes={{ text: classes.buttontext }}
          >
            {currentPrice < lowestValue ? (
              "Pricing Table"
            ) : (
              <>
                Get Cheaper options
                {lowestValue ? (
                  <> from &#8358;{formatPrice(lowestValue)}</>
                ) : (
                  " Here"
                )}
              </>
            )}
          </Button>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.root }}>
          {component}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
