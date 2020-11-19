var Amadeus = require("amadeus");
const { CLIENT_ID, CLIENT_SECRET } = process.env;
var amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

export default async function (req, res) {
  let returnDateMatrix = req.body.returnDateMatrix;
  let lastSearch = req.body.lastSearch;

  for (let x = 0; x < returnDateMatrix.length; x++) {
    let data = returnDateMatrix[x].data;
    for (let i = 1; i < data.length; i++) {
      if (data[i].return) {
        lastSearch = {
          ...lastSearch,
          originDestinations: [
            {
              ...lastSearch.originDestinations[0],
              departureDateTimeRange: { date: data[i].departure },
            },
            {
              ...lastSearch.originDestinations[1],
              departureDateTimeRange: { date: data[i].return },
            },
          ],
          searchCriteria: { ...lastSearch.searchCriteria, maxFlightOffers: 1 },
        };

        data[i] = { ...data[i], lastSearch };
      } else {
        lastSearch = {
          ...lastSearch,
          originDestinations: [
            {
              ...lastSearch.originDestinations[0],
              departureDateTimeRange: { date: data[i].departure },
            },
          ],
          searchCriteria: { ...lastSearch.searchCriteria, maxFlightOffers: 1 },
        };
        data[i] = { ...data[i], lastSearch };
      }
    }
  }

  res.send(returnDateMatrix);
}
