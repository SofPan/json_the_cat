const request = require('request');
const userRequest = process.argv.slice(2);

request(`https://api.thecaapi.com/v1/breeds/search?q=${userRequest}`, (error, response, body) => {
  if (error) {
    console.log("error:", error.message);
    console.log('statusCode:', response && response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  try {
    console.log(data[0].description);
  } catch (err) {
    console.log(err.message);
  }
});