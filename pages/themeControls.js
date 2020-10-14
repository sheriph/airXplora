import React from 'react';
import ColorController from '../components/colorUi/colorController';
import SecColorController from '../components/colorUi/bColorController';

function themeControl() {
  return (
    <div>
      <ColorController />
      <hr></hr>
      {/* <SecColorController /> */}
    </div>
  );
}

export default themeControl;
