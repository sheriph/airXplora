import React from "react";
import Axios from "axios";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";

const fetcher = async (...arg) =>
  await Axios.post(arg[0], { code: `A${arg[1]}` } /* `A${arg[1]}` */)
    //  .then((res) => new Promise((resolve) => setTimeout(resolve(res), 110)))
    .then((res) => {
      if (res.data.type === "error") {
        throw new Error(res.data.errorInfo);
      }
      return res.data;
    })
    .catch((error) => {
      console.log("axios error", error);
    });

const GetAirportName = ({ airportCodes }) => {
  const { data, error, isValidating } = useSWR(
    ["/api/getcityorairport", airportCodes],
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      dedupingInterval: 86400000,
      errorRetryCount: 12,
      onLoadingSlow: () => {
        console.log("slow network detected");
      },
    }
  );

  if (error) return <>failed to load</>;
  if (!data) return <Skeleton width="100px" variant="text" />;

  if (data) {
    let airlineName = data.data.name;

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
