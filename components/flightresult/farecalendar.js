import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Button, Typography } from "@material-ui/core";
import RepeatIcon from "@material-ui/icons/Repeat";
import {
  formatPrice,
  getPlusMinus3DaysArray,
  getReturnDateAndData,
} from "../general/utilities";
import GetFlightOffer from "./getflightoffer";
import Axios from "axios";
import { useRecoilState } from "recoil";
import { fullReturn_ } from "../../recoil/state";
import MatrixItem from "./matrixitem";

const styles = makeStyles((theme) => ({
  table: {
    //   minWidth: 650,
  },
  tablecell: {
    border: "1px solid",
    borderColor: theme.palette.grey[200],
    padding: "3px 6px 3px 6px",
  },
  tablecellroot: {
    //  width: "20px",
  },
}));

export default function FareCalendar({ prevState, lastSearch }) {
  const classes = styles();
  const departureMatrix = getPlusMinus3DaysArray(prevState.departureDate);
  const returnDateMatrix = getReturnDateAndData(
    prevState.departureDate,
    prevState.returnDate,
    prevState.tripType
  );
  const [count, setCount] = useState(1);
  const [fullMatrix, setFullMatrix] = useRecoilState(fullReturn_);
  console.log(fullMatrix)
  const [lowestValue, setLowestValue] = useState(0);
  const [highestValue, setHighestValue] = useState(0);

  console.log("returnDateMatrix", returnDateMatrix);

  useEffect(() => {
    console.log("fetching matrix....");

    const getFullReturnMatrix = async () => {
      const data = await Axios({
        data: { lastSearch, returnDateMatrix },
        method: "post",
        url: "/api/matrixflightoffer",
      })
        .then(async (res) => {
          console.log("response", res.data);
          let updatedFullMatrix = res.data;
          for (let item of updatedFullMatrix) {
            let obj = item.data;
            for (let i = 1; i < obj.length; i++) {
              const flightOffers = await Axios({
                data: obj[i].lastSearch,
                method: "post",
                url: "/api/flightofferpost",
              })
                .then((res) => {
                  if (res.type === "error") throw new Error(res.error);
                  console.log("res.data", res.data);
                  return res.data;
                })
                .catch((err) => {
                  console.log(err);
                  return null;
                });
              obj[i] = { ...obj[i], flightOffers };
            }
          }
          console.log("updatedFullMatrix", updatedFullMatrix);
          let set = new Set();
          for (let item of updatedFullMatrix) {
            let data = item.data;
            for (let i = 1; i < data.length; i++) {
              if (data[i].flightOffers[0])
                set.add(ata[i].flightOffers[0].price.total);
            }
          }
          setHighestValue(Math.max(...set));
          setLowestValue(Math.min(...set));
          setFullMatrix(updatedFullMatrix);
        })
        .catch((err) => console.log(err));
      return data;
    };
    getFullReturnMatrix();
  }, [count]);
  //return "HELLO";

  // return <Button onClick={() => setCount((prev) => prev + 1)}>fetch</Button>;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead component={TableBody}>
          <TableRow>
            <TableCell
              padding="none"
              size="small"
              className={classes.tablecell}
              classes={{ root: classes.tablecellroot }}
              align="center"
            >
              <RepeatIcon />
            </TableCell>
            {departureMatrix.map((date, index) => (
              <TableCell
                padding="none"
                size="small"
                key={index}
                className={classes.tablecell}
                classes={{ root: classes.tablecellroot }}
                align="center"
              >
                <Typography noWrap variant="caption">
                  {date.prettyDate}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {fullMatrix.map((item, index) => (
            <TableRow key={index}>
              {item.data.map((data, index) => (
                <TableCell
                  padding="none"
                  size="small"
                  className={classes.tablecell}
                  classes={{ root: classes.tablecellroot }}
                  align="center"
                  key={index}
                >
                  {typeof data === "string" ? (
                    <Typography noWrap variant="caption">
                      {data}
                    </Typography>
                  ) : (
                    /* <GetFlightOffer
                      departureDate={date.departure}
                      returnDate={
                        prevState.tripType === "Round trip"
                          ? date.return
                          : undefined
                      }
                      lastSearch={lastSearch}
                    /> */ <>
                      {/*  <Typography>
                        {data.flightOffers[0] ? (
                          <>
                            &#8358;
                            {formatPrice(data.flightOffers[0].price.total)}
                          </>
                        ) : (
                          "...."
                        )}
                      </Typography> */}
                      {data.flightOffers[0] ? (
                        <>
                          <MatrixItem
                            value={data.flightOffers[0].price.total}
                            lowestValue={
                              lowestValue ===
                              Number(data.flightOffers[0].price.total)
                            }
                            highestValue={
                              highestValue ===
                              Number(data.flightOffers[0].price.total)
                            }
                            flightOffer={data.flightOffers[0]}
                          />
                        </>
                      ) : (
                        "...."
                      )}
                    </>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
