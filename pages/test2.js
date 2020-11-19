import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button, ButtonBase, Grid } from "@material-ui/core";
import SelectAllIcon from "@material-ui/icons/SelectAll";

const styles = makeStyles((theme) => ({
  buttontext: {
    fontSize: "13px",
  },
}));

//console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);

export default function PricingTable() {
  const classes = styles();

  return (
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
          startIcon={<SelectAllIcon color="primary" />}
          classes={{ text: classes.buttontext }}
        >
          Pricing Table
        </Button>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
