import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { RecoilRoot, useRecoilState } from "recoil";
import "firebase/firestore";
import "firebase/auth";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import { SnackbarProvider } from "notistack";
import Axios from "axios";
import Head from "next/head";
import { accessToken_ } from "../recoil/state";

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

  // const [accessToken, setAccessToken] = useRecoilState(accessToken_);
/*   Axios.defaults.headers.[
    "Authorization"
  ] = `Bearer "Vtt7njCvXX6jeWtus0m2iU2jtOtQ"`;
 */
  /*  Axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? "https://airxplora.vercel.app/"
      : "http://localhost:3000";
 */
  // Axios.defaults.baseURL = "http://localhost:3000";

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <FuegoProvider fuego={fuego}>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </FuegoProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
