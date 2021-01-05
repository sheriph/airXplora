import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { formatPrice, getPriceRows } from "../general/utilities";
import { Container, Typography, useMediaQuery } from "@material-ui/core";

const styles = makeStyles({});

const PriceSummary = ({ flightOffer }) => {
  const classes = styles();
  const travelerPricings = flightOffer.travelerPricings;
  const priceRows = getPriceRows(travelerPricings);
  console.log(priceRows);
  const rows = [
    { type: "Adult", fare: "250,000", taxes: "1,210,000", total: "1,500,000" },
  ];

  const mobile = useMediaQuery("(max-width:320px)");
  const mobile1 = useMediaQuery("(max-width:375px)");
  const mobile2 = useMediaQuery("(max-width:414px)");

  return (
    <Container disableGutters>
      <TableContainer className={classes.table}>
        <Table size="small" padding="checkbox" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right"> Fare (&#8358;) </TableCell>
              <TableCell align="right"> Taxes (&#8358;) </TableCell>
              <TableCell align="right"> Total (&#8358;) </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {priceRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.type === "ADULT"
                    ? "Adult"
                    : `${row.type === "CHILD" ? "Child" : "Infant"}`}
                </TableCell>
                <TableCell align="right">{formatPrice(row.fare)}</TableCell>
                <TableCell align="right">{formatPrice(row.taxes)}</TableCell>
                <TableCell align="right">{formatPrice(row.total)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                align="right"
                colSpan={3}
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              >
                Grand Total{" "}
                {flightOffer.price.agencyTotal ? (
                  <Typography variant="caption"> (+Other Fees) </Typography>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="right">
                {formatPrice(
                  flightOffer.price.agencyTotal || flightOffer.price.total
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PriceSummary;
