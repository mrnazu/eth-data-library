// src/blockchains/ethereum/queries.js

const Web3 = require('web3');
const { ethereumNodeURL } = require('../../../config/config');
const defaultWeb3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeURL));


async function getBalance(address, web3 = defaultWeb3) {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance.toString(); // Convert balance to string (wei)
  } catch (error) {
    console.error('Error retrieving balance:', error);
    throw error; // Re-throw the error to handle it upstream
  }
}


async function getTransactions(address, fromBlock, toBlock, web3 = defaultWeb3) {
  try {
    const logs = await web3.eth.getPastLogs({
      fromBlock,
      toBlock,
      address,
    });

    const transactions = logs.map(log => ({
      transactionHash: log.transactionHash,
      blockNumber: log.blockNumber,
      ...log
    }));

    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; // Re-throw the error to handle it upstream
  }
}

module.exports = {
  getBalance,
  getTransactions
};
