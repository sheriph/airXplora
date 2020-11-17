import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AccordionActions,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  Grid,
} from "@material-ui/core";
import MyAirbnbSlider from "../filter/airbnbslider";
import { Grade } from "@material-ui/icons";
import AirlineFilter from "../filter/airlinefilter";
import StopsFilter from "../filter/stopsfilter";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  airlinesFilter_,
  flightOffers_,
  isLoading_,
  priceFilterValue_,
  stops_,
} from "../../recoil/state";
import Worker from "./filter.worker";
import {
  getAirlineListData,
  getMaxAndMinPriceArray,
  getStops,
} from "../general/utilities";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import { forceCheck } from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  accordiondetailsroot: {
    padding: "0",
  },
  mobiledrawerpaper: {
    backgroundColor: "transparent",
  },
  mobiledrawerbox: {
    backgroundColor: "transparent",
  },
}));

export default function Filter({ defaultFlightOffers, isMobile }) {
  if (!defaultFlightOffers) return <>Loading..</>;
  const [uidata, updateData] = useRecoilState(flightOffers_);
  const [iL, setLoading] = useRecoilState(isLoading_);
  const classes = useStyles();
  const [isPriceExpanded, togglePriceExpansion] = useState(true);
  const [isAirlineExpanded, toggleAirlineExpansion] = useState(true);
  const [isStopsExpanded, toggleStopsExpansion] = useState(true);
  const filterRange = useRecoilValue(priceFilterValue_);

  const [flightOffers, setFlightOffers] = useState(defaultFlightOffers);
  const [pureFlightOffers, setPureFlightOffers] = useState(flightOffers);
  const range = getMaxAndMinPriceArray(defaultFlightOffers);
  const airlinesList = getAirlineListData(defaultFlightOffers);
  const stops = getStops(defaultFlightOffers);
  const [count, setCount] = useState(1);
  const [countStops, setCountStops] = useState(1);
  const [priceCount, setPriceCount] = useState(1);
  const stateStops = useRecoilValue(stops_);
  const stateAirlinesFilter = useRecoilValue(airlinesFilter_);
  const [priceDrawer, setPriceDrawer] = useState(false);
  const [airlinesDrawer, setAirlinesDrawer] = useState(false);
  const [stopsDrawer, setStopsDrawer] = useState(false);

  const handleFilter = () => {
    setLoading(true);
    let t0 = performance.now();
    let worker = new Worker();
    console.log("gettign return");
    worker.postMessage({
      flightOffers: defaultFlightOffers,
      filterRange: filterRange,
      stateAirlinesFilter: stateAirlinesFilter,
      stateStops: stateStops,
    });
    worker.addEventListener("message", (e) => {
      // console.log("what have we here", e.data);

      let t1 = performance.now();
      console.log("time used by filter", e.data, t1 - t0);
      //    setFlightOffers(e.data);
      //  mutate(e.data, false);
      console.log("response", e.data);
      updateData(e.data);
      setLoading(false);
      forceCheck();
    });
  };

  const handlePriceReset = () => {
    let t0 = performance.now();
    let worker = new Worker();
    worker.postMessage({
      flightOffers: pureFlightOffers,
      filterRange: undefined,
      stateAirlinesFilter: stateAirlinesFilter,
      stateStops: stateStops,
    });
    worker.addEventListener("message", (e) => {
      // console.log("what have we here", e.data);

      let t1 = performance.now();
      console.log("time used by filter", t1 - t0);
      //  setFilterRange(getMaxAndMinPriceArray(pureFlightOffers));
      //setRange(getMaxAndMinPriceArray(pureFlightOffers));
      setFlightOffers(e.data);
    });
    setPriceCount((prev) => prev + 1);
  };

  const handleAirlineReset = () => {
    setCount((p) => p + 1);
    let t0 = performance.now();
    let worker = new Worker();
    worker.postMessage({
      flightOffers: pureFlightOffers,
      filterRange: filterRange,
      stateAirlinesFilter: undefined,
      stateStops: stateStops,
    });
    worker.addEventListener("message", (e) => {
      // console.log("what have we here", e.data);

      let t1 = performance.now();
      console.log("time used by filter", t1 - t0);
      setFlightOffers(e.data);
    });
  };

  const handleStopsReset = () => {
    let t0 = performance.now();
    let worker = new Worker();
    worker.postMessage({
      flightOffers: pureFlightOffers,
      filterRange: filterRange,
      stateAirlinesFilter: stateAirlinesFilter,
      stateStops: [{ type: "Any", isSelected: true }],
    });
    worker.addEventListener("message", (e) => {
      // console.log("what have we here", e.data);

      let t1 = performance.now();
      console.log("time used by filter", t1 - t0);
      setFlightOffers(e.data);
    });
    setCountStops((prev) => prev + 1);
  };

  /*  useEffect(() => {
    if (filterRange.length === 0) {
      setFilterRange(range);
    }
  }, []); */
  if (!defaultFlightOffers) <> Loading </>;
  return (
    <Container>
      {isMobile ? (
        <>
          <Box mt={2}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              size="small"
              fullWidth
            >
              <Button>
                <FilterListIcon />
              </Button>

              <Button onClick={() => setPriceDrawer((prev) => !prev)}>
                Price
              </Button>

              <Button onClick={() => setAirlinesDrawer((prev) => !prev)}>
                Airline
              </Button>
              <Button onClick={() => setStopsDrawer((prev) => !prev)}>
                Stops
              </Button>
            </ButtonGroup>
          </Box>
          <Drawer
            anchor="bottom"
            open={priceDrawer}
            ModalProps={{
              onBackdropClick: () => setPriceDrawer((prev) => !prev),
              keepMounted: true,
            }}
            classes={{ paper: classes.mobiledrawerpaper }}
          >
            <Box pb={5} className={classes.mobiledrawerbox}>
              <Accordion defaultExpanded={true} expanded={isPriceExpanded}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>Price (NGN)</Typography>
                    </Grid>
                    <Grid item onClick={() => setPriceDrawer((prev) => !prev)}>
                      <Typography>
                        <CloseIcon color="primary" />
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails
                  classes={{ root: classes.accordiondetailsroot }}
                >
                  <MyAirbnbSlider priceCount={priceCount} range={range} />
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    onClick={handlePriceReset}
                    variant="outlined"
                    size="small"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={handleFilter}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
            </Box>
          </Drawer>
          <Drawer
            anchor="bottom"
            open={airlinesDrawer}
            ModalProps={{
              onBackdropClick: () => setAirlinesDrawer((prev) => !prev),
              keepMounted: true,
            }}
            classes={{ paper: classes.mobiledrawerpaper }}
          >
            <Box pb={5} className={classes.mobiledrawerbox}>
              <Accordion defaultExpanded={true} expanded={isAirlineExpanded}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>Preffered Airlines</Typography>
                    </Grid>
                    <Grid
                      item
                      onClick={() => setAirlinesDrawer((prev) => !prev)}
                    >
                      <Typography>
                        <CloseIcon color="primary" />
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails
                  classes={{ root: classes.accordiondetailsroot }}
                >
                  <AirlineFilter count={count} airlinesList={airlinesList} />
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    onClick={handleAirlineReset}
                    variant="outlined"
                    size="small"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={handleFilter}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
            </Box>
          </Drawer>
          <Drawer
            anchor="bottom"
            open={stopsDrawer}
            ModalProps={{
              onBackdropClick: () => setStopsDrawer((prev) => !prev),
              keepMounted: true,
            }}
            classes={{ paper: classes.mobiledrawerpaper }}
          >
            <Box pb={5} className={classes.mobiledrawerbox}>
              <Accordion defaultExpanded={true} expanded={isStopsExpanded}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>Preffered Stops</Typography>
                    </Grid>
                    <Grid item onClick={() => setStopsDrawer((prev) => !prev)}>
                      <Typography>
                        <CloseIcon color="primary" />
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails
                  classes={{ root: classes.accordiondetailsroot }}
                >
                  <StopsFilter defaultStops={stops} countStops={countStops} />
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    onClick={handleStopsReset}
                    variant="outlined"
                    size="small"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={handleFilter}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
            </Box>
          </Drawer>
        </>
      ) : (
        <>
          <Accordion defaultExpanded={true} expanded={isPriceExpanded}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  onClick={() => togglePriceExpansion((prev) => !prev)}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item>
                  <Typography>Price (NGN)</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.accordiondetailsroot }}>
              <MyAirbnbSlider priceCount={priceCount} range={range} />
            </AccordionDetails>
            <AccordionActions>
              <Button
                onClick={handlePriceReset}
                variant="outlined"
                size="small"
                color="primary"
              >
                Reset
              </Button>
              <Button
                onClick={handleFilter}
                variant="contained"
                size="small"
                color="primary"
              >
                Save
              </Button>
            </AccordionActions>
          </Accordion>
          <Accordion defaultExpanded={true} expanded={isAirlineExpanded}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  onClick={() => toggleAirlineExpansion((prev) => !prev)}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container justify="space-between">
                <Grid item>
                  <Typography>Preffered Airlines</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.accordiondetailsroot }}>
              <AirlineFilter count={count} airlinesList={airlinesList} />
            </AccordionDetails>
            <AccordionActions>
              <Button
                onClick={handleAirlineReset}
                variant="outlined"
                size="small"
                color="primary"
              >
                Reset
              </Button>
              <Button
                onClick={handleFilter}
                variant="contained"
                size="small"
                color="primary"
              >
                Save
              </Button>
            </AccordionActions>
          </Accordion>
          <Accordion defaultExpanded={true} expanded={isStopsExpanded}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  onClick={() => toggleStopsExpansion((prev) => !prev)}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container justify="space-between">
                <Grid item>
                  <Typography>Preffered Stops</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.accordiondetailsroot }}>
              <StopsFilter defaultStops={stops} countStops={countStops} />
            </AccordionDetails>
            <AccordionActions>
              <Button
                onClick={handleStopsReset}
                variant="outlined"
                size="small"
                color="primary"
              >
                Reset
              </Button>
              <Button
                onClick={handleFilter}
                variant="contained"
                size="small"
                color="primary"
              >
                Save
              </Button>
            </AccordionActions>
          </Accordion>
        </>
      )}
    </Container>
  );
}
