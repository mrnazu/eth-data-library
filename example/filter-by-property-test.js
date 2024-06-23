// example/filter-by-property-test.js

const { filterByProperty } = require('../src/index');

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
