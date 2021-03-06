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
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";

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
  const departureDate = new Date(prevState.departureDate);
  const returnDate = new Date(prevState.returnDate);
  const departureMatrix = getPlusMinus3DaysArray(departureDate);
  const returnDateMatrix = getReturnDateAndData(
    departureDate,
    returnDate,
    prevState.tripType
  );

  const [count, setCount] = useState(1);
  const [fullMatrix, setFullMatrix] = useState([]);

  useEffect(() => {
    console.log("fetching matrix....");

    const getFullReturnMatrix = async () => {
      const data = await Axios({
        data: { lastSearch, returnDateMatrix },
        method: "post",
        url: "/api/matrixflightoffer",
      })
        .then(async (res) => {
          setFullMatrix(res.data);
        })
        .catch((err) => console.log(err));
      return data;
    };
    getFullReturnMatrix();
  }, [count]);
  //return "HELLO";

  // return <Button onClick={() => setCount((prev) => prev + 1)}>fetch</Button>;

  return (
    <TableContainer>
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
                    <LazyLoad
                      width={10}
                      height={10}
                      unmountIfInvisible
                      placeholder={<Skeleton variant="text" width="100%" />}
                      overflow
                    >
                      <GetFlightOffer
                        uniqueKey={index}
                        departureDate={data.departure || data.currentDate}
                        returnDate={
                          prevState.tripType === "Round trip"
                            ? data.return
                            : null
                        }
                        lastSearch={data.lastSearch}
                      />
                    </LazyLoad>
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
