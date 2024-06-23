require('dotenv').config();

const defaultNodeUrl = "http://127.0.0.1:7545"; // Default Local Ethereum node URL

const getConfig = () => {
  const config = {
    ethereum: {
      url: process.env.ETHEREUM_NODE_URL || defaultNodeUrl,
    },
  };

  console.log('Logging config:', config); // Log the config object

  return config;
};

module.exports = {
  getConfig
};
