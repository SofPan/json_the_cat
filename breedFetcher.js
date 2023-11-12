const request = require('request');
const userRequest = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userRequest}`, (error, response, body) => {
  if (error) {
    console.log("error:", error);
    console.log('statusCode:', response && response.statusCode);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});