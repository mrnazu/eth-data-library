// src/connection.js

const Web3 = require('web3');

class EthereumConnection {
  constructor(config) {
    if (!config || !config.ethereum || !config.ethereum.url) {
      throw new Error('Invalid config object: ethereum.url is required');
    }
    this.url = config.ethereum.url;
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.url));
  }

  async connect() {
    try {
      console.log('Attempting to connect to Ethereum node at:', this.url);
      await this.web3.eth.net.isListening();
      console.log('Connected to Ethereum node!');
      return true;
    } catch (error) {
      console.error('Error connecting to Ethereum node:', error);
      throw error;
    }
  }

  async disconnect() {
    // Implement disconnect logic if necessary
  }
}

module.exports = EthereumConnection;