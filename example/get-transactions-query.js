const { getTransactions } = require('../src/index');

async function testGetTransactions() {
    const nodeUrl = 'http://172.28.240.1:7546'; // Example Ethereum node URL (replace with your actual node URL)
    const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8'; // Example Ethereum address

    try {
        const transactions = await getTransactions(address, 0, 'latest', nodeUrl);
        console.log('Transactions:', transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
}

testGetTransactions();
