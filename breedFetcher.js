const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    return callback(error, data.length > 0 ? data[0].description : null);
  });
};

module.exports = { fetchBreedDescription };
