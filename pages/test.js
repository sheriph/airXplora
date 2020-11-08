import { Button, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";

const GetComment = () => {
  const [data, setData] = useState("");

  return (
    <>
      <Button
        onClick={() => {
          console.log(process.env.NODE_ENV);
        }}
      >
        Get Comment
      </Button>
      <Typography>{data}</Typography>
    </>
  );
};

export default GetComment;
