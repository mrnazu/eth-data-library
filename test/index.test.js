const assert = require("assert");
const {
  EthereumConnection,
  getBalance,
  getTransactions,
  filterByProperty,
  sortByProperty,
  transformData,
  set,
  get,
} = require("../src/index");
const getConfig = require("../config/config");

describe("index", () => {
  it("should import necessary modules", () => {
    assert(EthereumConnection instanceof Function);
    assert(getBalance instanceof Function);
    assert(getTransactions instanceof Function);
    assert(filterByProperty instanceof Function);
    assert(sortByProperty instanceof Function);
    assert(transformData instanceof Function);
    assert(set instanceof Function);
    assert(get instanceof Function);
  });

  it("should load configuration correctly", () => {
    const config = getConfig();
    assert(config instanceof Object);
  });

  let logCount = 0;

  const originalLog = console.log;
  console.log = function () {
    logCount++;
    originalLog.apply(console, arguments);
  };

  it("should log configuration correctly", () => {
    getConfig();
    assert.equal(logCount, 2);
  });
});
