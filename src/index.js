// index.js

require("dotenv").config();

const EthereumConnection = require("./blockchains/ethereum/connection");
const config = require("../config/config")({
  ethereumUrl: process.env.ETHEREUM_NODE_URL,
});

const connection = new EthereumConnection(config.ethereum);

connection
  .connect()
  .then(() => {
    console.log("Successfully connected to Ethereum node");
  })
  .catch((error) => {
    console.error("Error connecting:", error);
});
