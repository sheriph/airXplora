import React from "react";
import Axios from "axios";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";

const fetcher = async (...arg) =>
  await Axios.post(arg[0], { airlineCodes: arg[1] })
    //  .then((res) => new Promise((resolve) => setTimeout(resolve(res), 110)))
    .then((res) => {
    //  console.log("res", res.data);
      if (res.data.type === "error") {
        throw new Error(res.data.errorInfo);
      }
      return res.data;
    })
    .catch((error) => {
      console.log("axios error", error);
    });

const GetAirlineName = ({ airlineCodes }) => {
  const { data, error, isValidating } = useSWR(
    ["/api/getairlinename", airlineCodes],
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      dedupingInterval: 86400000,
      errorRetryCount: 12,
      onLoadingSlow: ()=>{
        console.log("slow network detected")
      }
    }
  );

  if (error) return <>failed to load</>;
  if (!data) return <Skeleton width="100px" variant="text" />;

  if (data) {
   // console.log("airline name response:", data);
    let airlineName = data.data[0].businessName;

    let prettyAirlinetName = airlineName
      .toLocaleLowerCase()
      .split(" ")
      .map((e) => e.slice(0, 1).toLocaleUpperCase() + e.slice(1))
      .join(" ");

    return <React.Fragment>{prettyAirlinetName}</React.Fragment>;
  }
};

export default GetAirlineName;
