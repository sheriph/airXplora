import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { RecoilRoot } from "recoil";
import "firebase/firestore";
import "firebase/auth";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdPt_dANbMrCkJCvCtYaxDl-g-UoJvi24",
  authDomain: "airxplora.firebaseapp.com",
  databaseURL: "https://airxplora.firebaseio.com",
  projectId: "airxplora",
  storageBucket: "airxplora.appspot.com",
  messagingSenderId: "798724678627",
  appId: "1:798724678627:web:e1583685cd9517f1cbf6d6",
  measurementId: "G-29QNRH3N5R",
};

const fuego = new Fuego(firebaseConfig);

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <FuegoProvider fuego={fuego}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </FuegoProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
