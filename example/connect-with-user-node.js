// example/connect-with-user-node.js

const { EthereumConnection } = require('../src/index');

async function connectWithUserNode() {
  try {
    const nodeUrl = 'https://mainnet.infura.io/v3/877467ce673f4d11b8f9e4fb7eafcdc6'; // Replace with your node URL
    const connection = new EthereumConnection({ ethereum: { url: nodeUrl } });
    await connection.connect();
    console.log('Successfully connected to Ethereum node at:', nodeUrl);
  } catch (error) {
    console.error('Error connecting to Ethereum node:', error);
  }
}

connectWithUserNode();