const assert = require('assert');
require("dotenv").config();

const EthereumConnection = require('../src/blockchains/ethereum/connection');
const config = require('../config/config')({ ethereumUrl:  process.env.ETHEREUM_NODE_URL});

describe('Ethereum Connection', () => {
  it('should connect to the Ethereum node', (done) => {
    const connection = new EthereumConnection(config.ethereum);
    connection.connect()
      .then(() => {
        done();  // Signal successful test
      })
      .catch((error) => {
        assert.fail(error);  // Fail the test if there's an error
        done();  // Still call done() to signal test completion
      });
  });
});
