// example/transform-data-test.js

const { transformData } = require('../src/index');

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
