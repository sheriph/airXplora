var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = require("../../config");
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

export default function (req, res) {
  // console.log("req.body", req.body)
  amadeus.referenceData
    .location(req.body.code)
    .get()
    .then((response) => res.send(response))
    .catch(function (error) {
      res.send({ errorInfo: error, type: "error" });
    });
}
