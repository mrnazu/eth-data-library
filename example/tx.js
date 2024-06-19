// example/tx.js
const { getTransactions } = require("../src/index");

// Replace with your actual Ethereum node URL (if needed)
const nodeUrl = 'http://127.0.0.1:7545'; // Optional

// Address for which to retrieve transactions
const address = "0xe9C1B07ACbBe047d46305818f402d46daBEc0eDc";

// Block range (optional)
const fromBlock = 0;
const toBlock = 'latest'; // Cover all blocks

async function testTransactions() {
  try {
    // Log the node URL being used
    console.log(`Connecting to Ethereum node at: ${nodeUrl}`);

    // Call getTransactions with optional nodeUrl argument
    const transactions = await getTransactions(address, fromBlock, toBlock, nodeUrl);
    
    if (transactions.length === 0) {
      console.log(`No transactions found for address ${address} in the specified block range.`);
    } else {
      console.log(`Transactions for ${address}:`);
      // Loop through each transaction and log relevant details
      transactions.forEach(tx => {
        console.log(`  - Transaction Hash: ${tx.transactionHash}`);
        console.log(`  - Block Number: ${tx.blockNumber}`);
        // Include other relevant properties from the transaction object (if available)
        // ...
      });
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
}

testTransactions();