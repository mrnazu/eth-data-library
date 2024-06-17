// ./config/config.js

process.env.ETHEREUM_NODE_URL = "http://127.0.0.1:7545";
require('dotenv').config();

console.log('Ethereum Node URL:', process.env.ETHEREUM_NODE_URL);  // for debugging

const getConfig = () => {
  return {
    ethereum: {
      url: process.env.ETHEREUM_NODE_URL,
    },
  };
};

module.exports = getConfig;