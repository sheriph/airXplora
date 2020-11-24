var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  client_id: " kYUgZVtfSuy1NmE3kzGwtubzWGteoK1z",
  client_secret: "KDvXBul4gw1pL6rg",
  grant_type: "client_credentials",
});
var config = {
  method: "post",
  url: "https://test.api.amadeus.com/v1/security/oauth2/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

const getToken = async () => {
  const token = await axios(config)
    .then(function (response) {
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return token;
};

export default async function (req, res) {
  const token = await getToken();
  res.send(token);
}
