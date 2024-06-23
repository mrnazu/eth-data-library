// get-transactions-query.js

const { getTransactions } = require('../src/index');
const { logInfo, logError } = require('../src/logger');

async function testGetTransactions() {
  const nodeUrl = 'http://172.28.240.1:7546'; // Local Node
  const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8'; // Example Ethereum address

  try {
    const transactions = await getTransactions(address, 0, 'latest', nodeUrl);
    logInfo(`Transactions retrieved successfully: ${transactions}`);
    console.log('Transactions:', transactions);
  } catch (error) {
    logError(`Error fetching transactions: ${error.message}`);
    console.error('Error fetching transactions:', error);
  }
}

testGetTransactions();
