// config.js

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