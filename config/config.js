// config.js

require('dotenv').config();

module.exports = {
  ethereum: {
    url: process.env.ETHEREUM_NODE_URL,
  },
};