const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error and null description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Non_exist_breed', (err, desc) => {
      // expect callback (err) to be set, and desc to be null.
      const error = 'No such a breed';
      assert.equal(err, error);

      const expectedDesc = null;
      assert.equal(expectedDesc, desc);

      done();
    });
  });

});