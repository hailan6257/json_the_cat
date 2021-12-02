const arr = process.argv.slice(2);
const cat = arr[0];
const request = require('request');
let catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;
request(catUrl, (error, response, body) => {
  if (error) console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  //console.log(data);
  data.length === 0 ? console.log(`Can't find ${cat}`) : console.log(data[0].description);
});