### `doc/README.md`

# Ethereum Data Library Documentation

Welcome to the documentation for the Ethereum Data Library. This library provides tools for accessing and processing data on the Ethereum blockchain.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage Examples](#usage-examples)
   - [Transform Data](#transform-data)
   - [Sort by Property](#sort-by-property)
   - [Get Transactions](#get-transactions)
   - [Get Balance](#get-balance)
   - [Filter by Property](#filter-by-property)
   - [Connection and Queries](#connection-and-queries)
   - [Connect with User Node](#connect-with-user-node)
   - [Cache Operations](#cache-operations)
4. [API Reference](#api-reference)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

The Ethereum Data Library is designed to simplify interaction with Ethereum blockchain data, offering functionalities such as querying transactions, retrieving balances, and caching data for efficiency.

## Installation

To install the library, use npm:

```bash
npm install eth-data-library
```

## Usage Examples

### Transform Data

```javascript
// example/transform-data-test.js

const { transformData } = require('eth-data-library');

// Example usage of transformData function
function testTransformData() {
  const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 20 }
  ];

  const transformedData = transformData(data, item => ({ ...item, fullName: `${item.name} Doe` }));
  console.log('Transformed data:', transformedData);
}

testTransformData();
```

### Sort by Property

```javascript
// example/sort-by-property-test.js

const { sortByProperty } = require('eth-data-library');

// Example usage of sortByProperty function
function testSortByProperty() {
  const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 20 }
  ];

  const sortedData = sortByProperty(data, 'age', 'asc');
  console.log('Sorted data:', sortedData);
}

testSortByProperty();
```

### Get Transactions

```javascript
// example/get-transactions-query.js

const { getTransactions } = require('eth-data-library');
const { logInfo, logError } = require('../src/logger'); // Already there ofc.. (optional)

async function testGetTransactions() {
  const nodeUrl = 'http://172.28.240.1:7546'; // Local Node
  const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8'; // Example Ethereum address

  try {
    const transactions = await getTransactions(address, 0, 'latest', nodeUrl);
    logInfo(`Transactions retrieved successfully: ${transactions}`);
    console.log('Transactions:', transactions);
  } catch (error) {
    logError(`Error fetching transactions: ${error.message}`);
    console.error('Error fetching transactions:', error);
  }
}

testGetTransactions();
```

### Get Balance

```javascript
// example/get-balance-query.js

const { getBalance } = require('eth-data-library');

async function testGetBalance() {
    const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8'; // Replace with a valid Ethereum address
    const nodeUrl = 'http://172.28.240.1:7546'; // Replace with your Ethereum node URL

    try {
        const balance = await getBalance(address, nodeUrl);
        console.log(`Balance of ${address}:`, balance);
    } catch (error) {
        console.error('Error retrieving balance:', error);
    }
}

testGetBalance();
```

### Filter by Property

```javascript
// example/filter-by-property-test.js

const { filterByProperty } = require('eth-data-library');

// Example usage of filterByProperty function
function testFilterByProperty() {
  const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 25 }
  ];

  const filteredData = filterByProperty(data, 'age', 25);
  console.log('Filtered data:', filteredData);
}

testFilterByProperty();
```

### Connection and Queries

```javascript
// examples/connection-and-queries.js

const { getBalance } = require('eth-data-library');

const address = '0xc14E69957fE431c7b43b87823D8092220AC2d6e8';
const nodeUrl = 'http://172.28.240.1:7546'; // Replace with your actual node URL

getBalance(address, nodeUrl)
    .then(balance => console.log(`Balance of ${address}: ${balance} wei`))
    .catch(error => console.error('Error retrieving balance:', error));
```

### Connect with User Node

```javascript
// example/connect-with-user-node.js

const { EthereumConnection } = require('eth-data-library');

async function connectWithUserNode() {
  try {
    const nodeUrl = 'https://mainnet.infura.io/v3/877467ce673f4d11b8f9e4fb7eafcdc6'; // Replace with your node URL
    const connection = new EthereumConnection({ ethereum: { url: nodeUrl } });
    await connection.connect();
    console.log('Successfully connected to Ethereum node at:', nodeUrl);
  } catch (error) {
    console.error('Error connecting to Ethereum node:', error);
  }
}

connectWithUserNode();
```

### Cache Operations

```javascript
// example/cache-tests.js

const { set, get } = require('eth-data-library');

// Example usage of cache set and get functions
function testCache() {
  const key = 'test-key';
  const value = { data: 'Example cached data' };
  
  set(key, value);
  const cachedData = get(key);
  
  console.log('Retrieved from cache:', cachedData);
}

testCache();
```

### Cache Set and Get

```javascript
// example/cache-set-get-test.js

const { set, get } = require('eth-data-library');

// Example usage of cache set and get functions
function testCacheSetGet() {
  const key = 'test-key';
  const value = { data: 'Example cached data' };
  
  set(key, value);
  const cachedData = get(key);
  
  console.log('Retrieved from cache:', cachedData);
}

testCacheSetGet();
```

## API Reference

### getBalance(address)
- **Parameters:**
  - `address` (string): Ethereum address for which to retrieve the balance.
- **Returns:**
  - `Promise<string>`: Promise that resolves to the balance in wei as a string.

### getTransactions(address, fromBlock, toBlock)
- **Parameters:**
  - `address` (string): Ethereum address for which to fetch transactions.
  - `fromBlock` (number): Starting block number (inclusive).
  - `toBlock` (number or string): Ending block number (inclusive) or `'latest'`.
- **Returns:**
  - `Promise<Object[]>`: Promise that resolves to an array of transactions.


For detailed API reference and function signatures, please refer to the source code within each module.

## Contributing

Contributions are welcome! Please follow the guidelines outlined in CONTRIBUTING.md.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### Summary
- **Organization**: Each example is placed within its own section to demonstrate how to use various functions of the Ethereum Data Library.
- **API Reference**: References to API details and function signatures are mentioned, encouraging users to explore further in the source code and JSDoc comments.

This structure ensures that users can quickly understand how to use your library through practical examples and find detailed information about its functionality. Adjust paths and placeholders (`http://172.28.240.1:7546`, Ethereum addresses, etc.) as necessary to match your specific setup.