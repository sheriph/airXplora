const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = require("./config");
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json()); // for parsing application/json
    server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    server.post("/api/flightoffer", function (req, res) {
      amadeus.shopping.flightOffersSearch
        .get(req.body)
        .then(function (response) {
          res.send(response.data);
        })
        .catch(function (responseError) {
          res.send("Server Error");
        });
    });

    server.post("/api/flightofferpost", function (req, res) {
      amadeus.shopping.flightOffersSearch
        .post(JSON.stringify(req.body))
        .then(function (response) {
          res.send(response.data);
        })
        .catch(function (responseError) {
          res.send(responseError);
        });
    });

    //Aiport Search //

    server.post("/api/airportautosuggest", function (req, res) {
      amadeus.referenceData.locations
        .get(req.body)
        .then((response) => {
          res.send(response);
        })
        .catch(function (responseError) {
          res.send(responseError);
        });
    });

    //Flight-Offer Serarch

    server.post("/api/flightoffersearch", function (req, res) {
      amadeus.shopping.flightOffersSearch
        .get(req.body)
        .then((response) => {
          res.send(response);
        })
        .catch(function (responseError) {
          res.send(responseError);
        });
    });

    //Get Airport Detail from iatacode

    /*     server.post("/api/getairportname", function (req, res) {
      amadeus.referenceData
        .location(req.body.code)
        .get()
        .then((response) => res.send(response))
        .catch(function (responseError) {
          res.send(responseError);
        });
    }); */

    server.post("/api/getcityorairporttest", function (req, res) {
      // console.log("req.body", req.body)
      amadeus.referenceData
        .location("ALHR")
        .get()
        .then((response) => res.send(response))
        .catch(function (error) {
          res.send({ errorInfo: error, type: "error" });
        });
    });

    server.post("/api/getcityorairport", function (req, res) {
      // console.log("req.body", req.body)
      amadeus.referenceData
        .location(req.body.code)
        .get()
        .then((response) => res.send(response))
        .catch(function (error) {
          res.send({ errorInfo: error, type: "error" });
        });
    });

    server.post("/api/getairlinename", function (req, res) {
      amadeus.referenceData.airlines
        .get(req.body)
        .then((response) => res.send(response))
        .catch(function (error) {
          res.send({ errorInfo: error, type: "error" });
        });
    });

    server.post("/api/verifyprice", (req, res) => {
      amadeus.shopping.flightOffers.pricing
        .post(JSON.stringify(req.body))
        .then((response) => res.send(response))
        .catch((err) => res.send(err));
    });

    /*     server.post("/api/getaiportname", (req, res) => {
      referenceData.urls.checkinLinks
        .get(req.body)
        .then((response) => res.send(response))
        .catch((err) => res.send(err));
    }); */

    server.post("/api/createorder", (req, res) => {
      amadeus.booking.flightOrders
        .post(JSON.stringify(req.body))
        .then((response) => res.send(response))
        .catch((err) => res.send(err));
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
