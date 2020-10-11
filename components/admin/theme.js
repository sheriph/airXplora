import React from 'react';
import ColorController from '../colorUi/colorController';
import SecColorController from '../colorUi/secColorController';

const ThemePage = () => {
  return (
    <>
      This is the theme Page, Here you can theme your UI, change logo, color etc
      <ColorController />
      <hr />
      <SecColorController />
    </>
  );
};

export default ThemePage;
