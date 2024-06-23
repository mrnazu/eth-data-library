// examples/connection-and-queries.js

const { getBalance } = require('../src/index');

const address = '0xe9C1B07ACbBe047d46305818f402d46daBEc0eDc';
const nodeUrl = 'http://127.0.0.1:7545'; // Replace with your actual node URL

getBalance(address, nodeUrl)
    .then(balance => console.log(`Balance of ${address}: ${balance} wei`))
    .catch(error => console.error('Error retrieving balance:', error));