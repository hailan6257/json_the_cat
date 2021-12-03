const {fetchBreedDescription} = require('./breedFetcher');
const arr = process.argv.slice(2);
const breedName = arr[0];
fetchBreedDescription(breedName, (error, des) => {
  if (error) {
    console.log('error:', error);
  } else {
    console.log(des);
  }
});