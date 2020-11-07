import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import Paper from '@material-ui/core/Paper';
import { CompactPicker, SketchPicker } from 'react-color';

const uiColors = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    type: 'light',
    primary: {
      main: '#2196f3',
      light: 'rgb(77, 171, 245)',
      dark: 'rgb(23, 105, 170)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: 'rgb(247, 51, 120)',
      dark: 'rgb(171, 0, 60)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
};
let i = 1;
export default function SecColorController() {
  const [secondaryColor, setsecondaryColor] = useState({
    light: uiColors.palette.secondary.light,
    dark: uiColors.palette.secondary.dark,
    contrastText: uiColors.palette.secondary.contrastText,
    main: uiColors.palette.secondary.main,
  });

  const setMain = color =>
    setsecondaryColor(
      secondaryColor => ({
        ...secondaryColor,
        main: (secondaryColor.main = color.hex),
      }),
      console.log(secondaryColor.main, uiColors.palette.secondary.main)
    );
  const setLight = color =>
    setsecondaryColor(
      secondaryColor => ({
        ...secondaryColor,
        light: (secondaryColor.light = color.hex),
      }),
      console.log(secondaryColor.light, uiColors.palette.secondary.light)
    );
  const setDark = color =>
    setsecondaryColor(
      secondaryColor => ({
        ...secondaryColor,
        dark: (secondaryColor.dark = color.hex),
      }),
      console.log(secondaryColor.dark, uiColors.palette.secondary.dark)
    );

  const [textColor, setTextColor] = useState({
    light: uiColors.palette.text.light,
    dark: uiColors.palette.text.dark,
    main: uiColors.palette.text.main,
  });

  const setMainText = color =>
    setTextColor(
      textColor => ({
        ...textColor,
        main: (textColor.main = color.hex),
      }),
      console.log(textColor.main, uiColors.palette.text.main)
    );
  const setLightText = color =>
    setTextColor(
      textColor => ({
        ...textColor,
        light: (textColor.light = color.hex),
      }),
      console.log(textColor.light, uiColors.palette.text.light)
    );
  const setDarkText = color =>
    setTextColor(
      textColor => ({
        ...textColor,
        dark: (textColor.dark = color.hex),
      }),
      console.log(textColor.dark, uiColors.palette.text.dark)
    );

  const useStyles = makeStyles({
    grid: {
      // justifyContent: 'center',
      // alignContent: 'center',
    },
    bgGrd: {
      backgroundColor: secondaryColor.main,
      color: textColor.main,
      border: 'black solid 3px',
      width: '300px',
      height: '300px',
    },
    smGrd1: {
      backgroundColor: secondaryColor.light,
      color: textColor.light,
      border: 'black solid 3px',
      width: '150px',
      height: '150px',
    },
    smGrd2: {
      backgroundColor: secondaryColor.dark,
      color: textColor.dark,
      width: '150px',
      height: '150px',
      border: 'black solid 3px',
    },
    paper: {
      // width: '300px',
      height: '300px',
      padding: '50px',
      backgroundColor: secondaryColor.main,
    },
    box: {
      // padding: '50px',
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            {' '}
            <Box mt={2}>
              Set Main Color
              <CompactPicker onChange={setMain} />
            </Box>
            <Box mt={2}>
              Set Light Color
              <CompactPicker onChange={setLight} />
            </Box>
            <Box mt={2}>
              Set Dark Color
              <CompactPicker onChange={setDark} />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            {' '}
            <Box mt={2}>
              Set Main text Color
              <CompactPicker onChange={setMainText} />
            </Box>
            <Box mt={2}>
              Set Light text Color
              <CompactPicker onChange={setLightText} />
            </Box>
            <Box mt={2}>
              Set Dark text Color
              <CompactPicker onChange={setDarkText} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <Box mt={2} mx={2}>
              <Grid container className={classes.grid}>
                <Grid container>
                  {' '}
                  <Grid item className={classes.bgGrd}>
                    secondary color main
                  </Grid>
                </Grid>
                <Grid container>
                  {' '}
                  <Grid item className={classes.smGrd1}>
                    secondary color light
                  </Grid>
                  <Grid item className={classes.smGrd2}>
                    secondary color dark
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>{' '}
      </Grid>
    </div>
  );
}

// export default SecColorController;
