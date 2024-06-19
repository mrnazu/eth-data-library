// connection.test.js

const assert = require('assert');
const EthereumConnection = require('../src/connection');
const getConfig = require('../config/config');

const config = getConfig();

describe('Ethereum Connection', () => {
  it('should connect to the Ethereum node', function(done) {
    this.timeout(5000); // Increase timeout to 5000ms

    const connection = new EthereumConnection(config.ethereum);

    connection.connect()
      .then((connected) => {
        assert.strictEqual(connected, true, 'Expected connection to be successful');
        done();  // Signal successful test
      })
      .catch((error) => {
        console.error('Error during connection test:', error);
        assert.fail(error);  // Fail the test if there's an error
        done();  // Still call done() to signal test completion
      });
  });
});