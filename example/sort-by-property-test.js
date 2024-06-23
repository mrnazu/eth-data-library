// example/sort-by-property-test.js

const { sortByProperty } = require('../src/index');

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
