var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = require("../../config");
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

export default function (req, res) {
  amadeus.referenceData.locations
    .get(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch(function (responseError) {
      res.send(responseError);
    });
}
