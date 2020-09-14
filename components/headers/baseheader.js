import React from "react";
import Head from "next/head";
import Header1 from "./header1/header1";

const BaseHeader = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <Header1 />
  </>
);

export default BaseHeader;
