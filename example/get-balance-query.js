// example/get-balance-query.js

const { getBalance } = require('../src/index');

async function testGetBalance() {
    const address = '0xe9C1B07ACbBe047d46305818f402d46daBEc0eDc'; // Replace with a valid Ethereum address
    const nodeUrl = 'http://127.0.0.1:7545'; // Replace with your Ethereum node URL

    try {
        const balance = await getBalance(address, nodeUrl);
        console.log(`Balance of ${address}:`, balance);
    } catch (error) {
        console.error('Error retrieving balance:', error);
    }
}

testGetBalance();