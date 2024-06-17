// config/config.js

require('dotenv').config();

const defaultNodeUrl = "http://127.0.0.1:7545"; // Default Ethereum node URL

const getConfig = () => {
  return {
    ethereum: {
      url: process.env.ETHEREUM_NODE_URL || defaultNodeUrl,
    },
  };
};

module.exports = getConfig;
