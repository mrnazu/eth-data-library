// connection.js

const Web3 = require('web3');

class EthereumConnection {
  constructor(config) {
    // Validate and store connection details
    this.url = config.url;
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.url));
  }

  async connect() {
    try {
      const connected = await this.web3.eth.net.isListening();
      if (connected) {
        console.log('Connected to Ethereum node!');
        return true;
      } else {
        throw new Error('Failed to connect to Ethereum node');
      }
    } catch (error) {
      console.error('Error connecting to Ethereum node:', error);
      throw error;
    }
  }
}

module.exports = EthereumConnection;