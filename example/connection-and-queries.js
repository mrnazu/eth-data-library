// examples/connection-and-queries.js

const { getBalance } = require('../src/index');

const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8';
const nodeUrl = 'http://172.28.240.1:7546'; // Replace with your actual node URL

getBalance(address, nodeUrl)
    .then(balance => console.log(`Balance of ${address}: ${balance} wei`))
    .catch(error => console.error('Error retrieving balance:', error));