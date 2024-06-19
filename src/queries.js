// src/queries.js

const Web3 = require('web3');
const { getConfig } = require('../config/config');

let defaultWeb3;

async function getDefaultWeb3() {
  if (!defaultWeb3) {
    const config = getConfig();
    defaultWeb3 = new Web3(new Web3.providers.HttpProvider(config.ethereum.url));
    try {
      await defaultWeb3.eth.net.isListening();
      console.log('Connected to Ethereum node at:', config.ethereum.url);
    } catch (error) {
      console.error('Failed to connect to Ethereum node at:', config.ethereum.url);
      throw error;
    }
  }
  return defaultWeb3;
}

async function getBalance(address, web3) {
  web3 = web3 || await getDefaultWeb3();
  try {
    const balance = await web3.eth.getBalance(address);
    return balance.toString(); // Convert balance to string (wei)
  } catch (error) {
    console.error('Error retrieving balance:', error);
    throw error;
  }
}

async function getTransactions(address, fromBlock, toBlock, web3) {
  web3 = web3 || await getDefaultWeb3();
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
    throw error;
  }
}

module.exports = {
  getBalance,
  getTransactions
};
