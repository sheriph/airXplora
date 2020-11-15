import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from "material-ui-popup-state/hooks";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { ClickAwayListener, Zoom } from "@material-ui/core";

const styles = (theme) => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

const PopperPopupState = ({ classes }) => {
  const popupState = usePopupState({
    variant: "popper",
    popupId: "demoPopper",
  });
  return (
    <div>
      <Button variant="contained" {...bindToggle(popupState)}>
        Toggle Popper
      </Button>
      <Popper {...bindPopper(popupState)} transition>
        <ClickAwayListener
          onClickAway={() => {
            popupState.close();
          }}
        >
          <Paper>
            <Typography className={classes.typography}>
              The content of the Popper.
            </Typography>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

PopperPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopperPopupState);
