const Web3 = require("web3");
const EthereumConnection = require("./connection");
const { getBalance: getBalanceFunc } = require("./queries");
const {
  filterByProperty,
  sortByProperty,
  transformData,
} = require("./common/utils");
const { set, get } = require("./common/cache");
const { logInfo, logError } = require("./logger");

// Export EthereumConnection class
module.exports.EthereumConnection = EthereumConnection;

// Export functions with parameters
module.exports.getBalance = async (address, nodeUrl) => {
  try {
    const connection = new EthereumConnection({ ethereum: { url: nodeUrl } });
    await connection.connect();
    const web3 = connection.web3;
    const balance = await getBalanceFunc(address, web3);
    logInfo(`Retrieved balance for ${address}: ${balance}`);
    return balance;
  } catch (error) {
    logError(`Failed to retrieve balance for ${address}: ${error.message}`);
    throw error;
  }
};

module.exports.getTransactions = async function getTransactions(
  address,
  fromBlock,
  toBlock,
  nodeUrl
) {
  let web3;
  if (nodeUrl.startsWith("https")) {
    web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl));
  } else if (nodeUrl.startsWith("http")) {
    web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl));
  } else if (nodeUrl.startsWith("wss")) {
    web3 = new Web3(new Web3.providers.WebsocketProvider(nodeUrl));
  } else {
    throw new Error(
      `Unsupported nodeUrl protocol. Must start with "https", "http", or "wss".`
    );
  }

  try {
    const transactions = await web3.eth.getPastLogs({
      address: address,
      fromBlock: fromBlock,
      toBlock: toBlock,
    });
    logInfo(`Retrieved ${transactions.length} transactions for ${address}`);
    return transactions;
  } catch (error) {
    let errorMessage = "";

    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      errorMessage = `CONNECTION ERROR: Couldn't connect to node ${nodeUrl}.`;
    } else {
      errorMessage = `Failed to get transactions: ${error.message}\n`;
    }
    
    logError(`Failed to get transactions for ${address}: ${error.message}`);
    throw new Error(errorMessage);
  }
};

// Export utility functions
module.exports.filterByProperty = filterByProperty;
module.exports.sortByProperty = sortByProperty;
module.exports.transformData = transformData;

// Export cache functions
module.exports.set = set;
module.exports.get = get;
