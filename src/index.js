// index.js

const EthereumConnection = require("./blockchains/ethereum/connection");
const { getBalance, getTransactions } = require("./blockchains/ethereum/queries");
const getConfig = require("../config/config");

const config = getConfig();

// Log the configuration to ensure it's loaded correctly
console.log('Config:', config);

async function main() {
  try {
    const connection = new EthereumConnection(config.ethereum.url);
    await connection.connect();
    console.log("Successfully connected to Ethereum node");

    // Example usage of getBalance and getTransactions
    const address = '0x93e3cDa8cCe57CfbD8f92223Ee6D4Bc241Ae069E';
    const balance = await getBalance(address);
    console.log(`Balance of ${address}: ${balance} wei`);

    const transactions = await getTransactions(address, 0, 'latest');
    console.log(`Transactions for ${address}:`, transactions);
  } catch (error) {
    console.error("Error connecting or querying data:", error);
  }
}

main();