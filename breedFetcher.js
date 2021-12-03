const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  
  let catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(catUrl, (error, response, body) => {
    //console.log(error);
    const data = JSON.parse(body);
    let des = null;
    if (data.length > 0) des = data[0].description;
    if (data.length === 0) error = 'No such a breed';
    callback(error, des);
  });
};

module.exports = {fetchBreedDescription};
