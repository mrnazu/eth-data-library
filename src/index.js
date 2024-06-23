const Web3 = require('web3');
const EthereumConnection = require('./connection');
const { getBalance: getBalanceFunc } = require('./queries');
const { filterByProperty, sortByProperty, transformData } = require('./common/utils');
const { set, get } = require('./common/cache');

// Export EthereumConnection class
module.exports.EthereumConnection = EthereumConnection;

// Export functions with parameters
module.exports.getBalance = async (address, nodeUrl) => {
  const connection = new EthereumConnection({ ethereum: { url: nodeUrl } });
  await connection.connect();
  const web3 = connection.web3; // Access the web3 instance from the connection
  return getBalanceFunc(address, web3); // Pass web3 instead of connection
};

module.exports.getTransactions = async function getTransactions(address, fromBlock, toBlock, nodeUrl) {
  let web3;
  if (nodeUrl.startsWith('https')) {
    web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl));
  } else if (nodeUrl.startsWith('http')) {
    web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl));
  } else if (nodeUrl.startsWith('wss')) {
    web3 = new Web3(new Web3.providers.WebsocketProvider(nodeUrl));
  } else {
    throw new Error(`Unsupported nodeUrl protocol. Must start with "https", "http", or "wss".`);
  }

  try {
      const transactions = await web3.eth.getPastLogs({
          address: address,
          fromBlock: fromBlock,
          toBlock: toBlock
      });
      return transactions;
  } catch (error) {
      throw new Error(`Failed to get transactions: ${error.message}`);
  }
};

// Export utility functions
module.exports.filterByProperty = filterByProperty;
module.exports.sortByProperty = sortByProperty;
module.exports.transformData = transformData;

// Export cache functions
module.exports.set = set;
module.exports.get = get;