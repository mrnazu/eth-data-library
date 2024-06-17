// test/queries.test.js

const sinon = require('sinon');
const { getBalance, getTransactions } = require('../src/blockchains/ethereum/queries');
const Web3 = require('web3');

(async () => {
  const chai = await import('chai');
  const { expect } = chai;
  
  describe('Ethereum Blockchain Queries', () => {
    let web3Mock;
    let getBalanceStub;
    let getPastLogsStub;
    let consoleErrorStub;

    beforeEach(() => {
      web3Mock = new Web3();
      getBalanceStub = sinon.stub(web3Mock.eth, 'getBalance');
      getPastLogsStub = sinon.stub(web3Mock.eth, 'getPastLogs');
      consoleErrorStub = sinon.stub(console, 'error'); // Suppress console.error
    });

    afterEach(() => {
      sinon.restore();
      consoleErrorStub.restore(); // Restore console.error
    });

    describe('getBalance', () => {
      it('should retrieve the balance of an address', async () => {
        const address = '0x1234567890AbCdEf1234567890AbCdEf1234567890';
        const mockBalance = '1000000000000000000'; // 100 ETH in Wei

        getBalanceStub.withArgs(address).resolves(mockBalance);

        const balance = await getBalance(address, web3Mock); // Pass the mock

        expect(balance).to.be.a('string');
        expect(balance).to.equal(mockBalance);
      });

      it('should handle errors during balance retrieval', async () => {
        const address = '0x1234567890AbCdEf1234567890AbCdEf1234567890';
        const expectedError = new Error('Failed to get balance');

        getBalanceStub.withArgs(address).rejects(expectedError);

        try {
          await getBalance(address, web3Mock); // Pass the mock
        } catch (error) {
          expect(error).to.equal(expectedError);
        }
      });
    });

    describe('getTransactions', () => {
      it('should retrieve transactions for an address within a block range', async () => {
        const address = '0x1234567890AbCdEf1234567890AbCdEf1234567890';
        const fromBlock = 100;
        const toBlock = 200;
        const mockTransactions = [
          { transactionHash: 'tx1', blockNumber: 150 },
          { transactionHash: 'tx2', blockNumber: 180 }
        ];

        getPastLogsStub.withArgs({ fromBlock, toBlock, address }).resolves(mockTransactions);

        const transactions = await getTransactions(address, fromBlock, toBlock, web3Mock); // Pass the mock

        expect(transactions).to.be.an('array');
        expect(transactions).to.deep.equal(mockTransactions);
      });

      it('should handle errors during transaction retrieval', async () => {
        const address = '0x1234567890AbCdEf1234567890AbCdEf1234567890';
        const fromBlock = 100;
        const toBlock = 200;
        const expectedError = new Error('Failed to get transactions');

        getPastLogsStub.withArgs({ fromBlock, toBlock, address }).rejects(expectedError);

        try {
          await getTransactions(address, fromBlock, toBlock, web3Mock); // Pass the mock
        } catch (error) {
          expect(error).to.equal(expectedError);
        }
      });
    });
  });

  if (typeof run === 'function') {
    run();
  }
})();