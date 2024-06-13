// connection.js

const Web3 = require('web3');

class EthereumConnection {
  constructor(config) {
    this.url = config.url;
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
}

module.exports = EthereumConnection;
