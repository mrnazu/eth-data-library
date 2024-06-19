// src/index.js

/**
 * Project: eth-data-library
 * Authors: Samuel [https://github.com/mrnazu]
 * License: MIT License
 * Description:
 *    eth-data-library is a Nodejs library 
 *    that provides tools for accessing and processing data 
 *    on the Ethereum blockchain. 
 */


const EthereumConnection = require("./connection");
const { getBalance, getTransactions } = require("./queries");
const { filterByProperty, sortByProperty, transformData } = require("./common/utils");
const { set, get } = require("./common/cache");
const getConfig = require("../config/config");

getConfig();

// to ensure it's loaded correctly
// console.log("cc Samuel - Nazu\nBackend Engineer and Pen-tester");

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