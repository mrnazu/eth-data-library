// example/cache-tests.js

const { set, get } = require('../src/common/cache');

// Example usage of cache set and get functions
function testCache() {
  const key = 'test-key';
  const value = { data: 'Example cached data' };
  
  set(key, value);
  const cachedData = get(key);
  
  console.log('Retrieved from cache:', cachedData);
}

testCache();
