import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button, ButtonBase, Grid } from "@material-ui/core";
import SelectAllIcon from "@material-ui/icons/SelectAll";
import Axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessToken_, postdatasample_ } from "../recoil/state";
var qs = require("qs");

const styles = makeStyles((theme) => ({
  buttontext: {
    fontSize: "13px",
  },
}));

const axiosToken = Axios.create({
  method: "post",
  baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

//console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);

export default function PricingTable() {
  const postdatasample = useRecoilValue(postdatasample_);

  const axiosAirportName = Axios.create({
    method: "get",
    baseURL: "https://test.api.amadeus.com/v1/reference-data/locations",
  });

  axiosAirportName.interceptors.request.use(
    (req) => {
      req.headers = {
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
      };
      return req;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosAirportName.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (
        error.response &&
        error.response.config &&
        error.response.status === 401
      ) {
        await axiosToken
          .request({
            data: qs.stringify({
              client_id: " kYUgZVtfSuy1NmE3kzGwtubzWGteoK1z",
              client_secret: "KDvXBul4gw1pL6rg",
              grant_type: "client_credentials",
            }),
          })
          .then((res) => {
            console.log("token at response interceptor", res.data.access_token);
            window.sessionStorage.setItem("accessToken", res.data.access_token);
          })
          .catch((err) => console.log(err.response));
      }
      return Promise.reject(error);
    }
  );

  const classes = styles();

  return (
    <>
      <Button
        disableFocusRipple={true}
        disableRipple={true}
        disableTouchRipple={true}
        startIcon={<SelectAllIcon color="primary" />}
        classes={{ text: classes.buttontext }}
        onClick={() => {
          axiosToken
            .request({
              data: qs.stringify({
                client_id: " kYUgZVtfSuy1NmE3kzGwtubzWGteoK1z",
                client_secret: "KDvXBul4gw1pL6rg",
                grant_type: "client_credentials",
              }),
            })
            .then((res) => console.log(res.data.access_token))
            .catch((err) => console.log(err.response));
        }}
      >
        Get Token
      </Button>
      <Button
        disableFocusRipple={true}
        disableRipple={true}
        disableTouchRipple={true}
        startIcon={<SelectAllIcon color="primary" />}
        classes={{ text: classes.buttontext }}
        onClick={() => {
          axiosAirportName
            .request({ url: "/CMAD" })
            .then((res) => console.log(res.data.data))
            .catch((err) => console.log(err.response));
        }}
      >
        Get AIRPORT NAME
      </Button>
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
            onClick={() => {
              Axios.post("api/accesstoken")
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
            }}
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
    </>
  );
}
