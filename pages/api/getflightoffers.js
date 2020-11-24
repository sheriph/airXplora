var axios = require("axios");
//var data = JSON.stringify();

var config = {
  method: "post",
  url: "https://test.api.amadeus.com/v2/shopping/flight-offers",
};

const getFlightOffers = async (data) => {
  config.data = data;
  const flightOffers = await axios(config)
    .then(function (response) {
      return JSON.stringify(response.data.data);
    })
    .catch(function (error) {
      if (error.response) return error.response.statusText;
      if (error.request) return error.request;

      //  console.log("YEPA ERROR", error.response.statusText);
      return error.message;
    });
  return flightOffers;
};

export default async function (req, res) {
  /*  console.log("request", req.body);
  res.send(req.body); */

  const flightOffers = await getFlightOffers(req.body);
  res.send(flightOffers);
}
