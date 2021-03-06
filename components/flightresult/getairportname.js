import React from "react";
import Axios from "axios";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";
const qs = require("qs");

const GetAirportName = ({ airportCodes }) => {
  const axiosToken = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const axiosAirportName = Axios.create({
    method: "get",
    baseURL: "https://test.api.amadeus.com/v1/reference-data",
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

  const fetcher = async (airportCodes) => {
    const res = await axiosAirportName.request({
      url: `/locations?subType=CITY,AIRPORT&keyword=${airportCodes}`,
    });
    if (
      res.status !== 200 ||
      !res.data ||
      !res.data.data ||
      !res.data.data[0]
    ) {
      throw new Error("response status not correct", res.statusText);
    }
    return res.data.data[0];
  };

  const { data, error, isValidating } = useSWR(airportCodes, fetcher, {
    focusThrottleInterval: 86400000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 86400000,
    shouldRetryOnError: true,
    errorRetryCount: 5,
    errorRetryInterval: 6000,
    onLoadingSlow: () => {
      //  console.log("slow network detected");
    },
    onError: (error) => {
      //   console.log("error from fetcher", error);
    },
    onSuccess: (data) => {
      //   console.log("success data", data);
    },
  });

  if (error) return <Skeleton animation="wave" width="100px" variant="text" />;
  if (!data) return <Skeleton width="100px" variant="text" />;

  if (data) {
    let airlineName = data.name;

    let prettyAirlinetName = airlineName
      .toLocaleLowerCase()
      .split(" ")
      .map((e) => e.slice(0, 1).toLocaleUpperCase() + e.slice(1))
      .join(" ");

    return (
      <React.Fragment>{`${prettyAirlinetName} (${airportCodes})`}</React.Fragment>
    );
  }
};

export default GetAirportName;
