// src/index.js

const EthereumConnection = require("./connection");
const { getBalance, getTransactions } = require("./queries");
const { filterByProperty, sortByProperty, transformData } = require("./common/utils");
const { set, get } = require("./common/cache");
const getConfig = require("../config/config");

getConfig();

// to ensure it's loaded correctly
console.log("cc Samuel - Nazu\nBackend Engineer and Pen-tester");

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