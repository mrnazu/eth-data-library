const { getTransactions } = require("../src/index");

const transactions = getTransactions('0xe9C1B07ACbBe047d46305818f402d46daBEc0eDc', 1, 10);
console.log(transactions); // Output: an array of transactions

// Some error