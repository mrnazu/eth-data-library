// config.js

require('dotenv').config();

const defaultNodeUrl = "http://127.0.0.1:7545"; // Default Local Ethereum node URL

const getConfig = () => {
  return {
    ethereum: {
      url: process.env.ETHEREUM_NODE_URL || defaultNodeUrl,
    },
  };
};

module.exports = getConfig;
