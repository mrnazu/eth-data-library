const assert = require('assert');
const { filterByProperty, sortByProperty, transformData } = require('../src/common/utils');

describe('utils.js tests', () => {
  it('filterByProperty should filter objects based on property and value', () => {
    const data = [
      { name: 'Nazu', age: 18 },
      { name: 'Sam', age: 25 },
      { name: 'Samuel', age: 30 },
    ];
    const filteredData = filterByProperty(data, 'age', 30);
    assert.equal(filteredData.length, 1); // Only expect one matching object
    assert.deepStrictEqual(filteredData, [{ name: 'Samuel', age: 30 }]);
  });
});
