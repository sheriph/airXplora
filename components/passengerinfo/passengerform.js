import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { isEmpty } from "lodash";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const styles = makeStyles((theme) => ({
  groupradio: {
    flexDirection: "row",
  },
  header: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  genderselect: {
    minWidth: "120px",
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      //  showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const PassengerForm = ({
  register,
  errors,
  handleSubmit,
  control,
  ageLimit,
  travelerId,
  item,
}) => {
  const classes = styles();

  return (
    <Container disableGutters>
      <Grid className={classes.header} container direction="column">
        <Grid item>
          {travelerId === "1" ? (
            <Typography variant="h5"> Primary Traveller </Typography>
          ) : (
            <Typography variant="h5">
              +
              {item.travelerType === "ADULT"
                ? " Adult "
                : `${item.travelerType === "CHILD" ? " Child " : " Infant "}`}
              Traveller
            </Typography>
          )}
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            size="small"
            inputRef={register({ required: true })}
            id={`surname${travelerId}`}
            label="Surname"
            variant="outlined"
            name={`surname${travelerId}`}
            helperText={
              errors[`surname${travelerId}`] ? (
                <Typography color="error" variant="caption">
                  Surname required
                </Typography>
              ) : (
                ""
              )
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            size="small"
            inputRef={register({ required: true })}
            id={`givennames${travelerId}`}
            label="Given names"
            variant="outlined"
            name={`givennames${travelerId}`}
            helperText={
              errors[`givennames${travelerId}`] ? (
                <Typography color="error" variant="caption">
                  Given names required
                </Typography>
              ) : (
                ""
              )
            }
          />
        </Grid>

        {travelerId === "1" && (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              InputProps={{
                inputComponent: TextMaskCustom,
              }}
              size="small"
              inputRef={register({
                required: true,
              })}
              id={`telephone`}
              label="Telephone"
              variant="outlined"
              name={`telephone`}
              helperText={
                errors[`telephone`] ? (
                  <Typography color="error" variant="caption">
                    Telephone required
                  </Typography>
                ) : (
                  ""
                )
              }
            />
          </Grid>
        )}

        {travelerId === "1" && (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              inputRef={register({
                required: "Email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              id={`email`}
              label="Email"
              variant="outlined"
              name={`email`}
              helperText={
                errors[`email`] ? (
                  <Typography color="error" variant="caption">
                    {errors[`email`].message}
                  </Typography>
                ) : (
                  ""
                )
              }
            />
          </Grid>
        )}

        {item.documentRequired && (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              inputRef={register({
                required: true,
              })}
              id={`passportnumber${travelerId}`}
              label="Passport number"
              variant="outlined"
              name={`passportnumber${travelerId}`}
              helperText={
                errors[`passportnumber${travelerId}`] ? (
                  <Typography color="error" variant="caption">
                    Passport number required
                  </Typography>
                ) : (
                  ""
                )
              }
            />
          </Grid>
        )}

        {item.documentRequired && (
          <Grid item xs={12} sm={6}>
            <Controller
              name={`passportexpiry${travelerId}`}
              control={control}
              defaultValue={null}
              rules={{
                required: true,
              }}
              render={({ onChange, value, ref }) => (
                <FormControl fullWidth>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      //  disableFuture
                      clearable
                      openTo="year"
                      format="dd/MM/yyyy"
                      label="Passport expiry"
                      views={["year", "month", "date"]}
                      value={value}
                      inputRef={ref}
                      onChange={(e) => onChange(e)}
                      inputVariant="outlined"
                      size="small"
                      minDate={new Date()}
                    />
                  </MuiPickersUtilsProvider>
                  {errors[`passportexpiry${travelerId}`] ? (
                    <FormHelperText error>
                      Passport expiry required
                    </FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            />
          </Grid>
        )}

        {item.travelerType !== "ADULT" ? (
          <Grid item xs={12} sm={6}>
            <Controller
              name={`dob${travelerId}`}
              control={control}
              defaultValue={null}
              rules={{
                required: true,
              }}
              render={({ onChange, value, ref }) => (
                <FormControl fullWidth>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      disableFuture
                      clearable
                      openTo="year"
                      format="dd/MM/yyyy"
                      label="Date of birth"
                      views={["year", "month", "date"]}
                      value={value}
                      inputRef={ref}
                      onChange={(e) => onChange(e)}
                      inputVariant="outlined"
                      size="small"
                      minDate={
                        new Date(
                          new Date().getFullYear() - ageLimit,
                          new Date().getMonth(),
                          new Date().getDate()
                        )
                      }
                    />
                  </MuiPickersUtilsProvider>
                  {errors[`dob${travelerId}`] ? (
                    <FormHelperText error>
                      Date of birth required
                    </FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            />
          </Grid>
        ) : (
          ""
        )}

        {item.genderRequired && (
          <Grid item xs={12} sm={6}>
            <Controller
              name={`gender${travelerId}`}
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ onChange, value, ref }) => (
                <FormControl
                  fullWidth
                  size="small"
                  variant="outlined"
                  className={classes.genderselect}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id={`gender${travelerId}`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    label="Gender"
                    inputRef={ref}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                  {errors[`gender${travelerId}`] ? (
                    <FormHelperText error>Gender required</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PassengerForm;
