// example/get-balance-query.js

const { getBalance } = require('../src/index');

async function testGetBalance() {
    const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8'; // Replace with a valid Ethereum address
    const nodeUrl = 'http://172.28.240.1:7546'; // Replace with your Ethereum node URL

    try {
        const balance = await getBalance(address, nodeUrl);
        console.log(`Balance of ${address}:`, balance);
    } catch (error) {
        console.error('Error retrieving balance:', error);
    }
}

testGetBalance();