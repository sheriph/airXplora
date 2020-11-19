var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = process.env;
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

export default function (req, res) {
  amadeus.referenceData.airlines
    .get(req.body)
    .then((response) => res.send(response))
    .catch(function (error) {
      res.send({ errorInfo: error, type: "error" });
    });
}
