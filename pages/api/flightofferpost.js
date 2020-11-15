var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = require("../../config");
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

export default function (req, res) {
  amadeus.shopping.flightOffersSearch
    .post(JSON.stringify(req.body))
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send({ type: "error", error });
    });
}
