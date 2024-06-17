// src/index.js

const EthereumConnection = require("./blockchains/ethereum/connection");
const { getBalance, getTransactions } = require("./blockchains/ethereum/queries");
const { filterByProperty, sortByProperty, transformData } = require("./common/utils");
const { set, get } = require("./common/cache");
const getConfig = require("../config/config");

const config = getConfig();

// Log the configuration to ensure it's loaded correctly
console.log('Config:', config);

module.exports = {
  EthereumConnection,
  getBalance,
  getTransactions,
  filterByProperty,
  sortByProperty,
  transformData,
  set,
  get,
};