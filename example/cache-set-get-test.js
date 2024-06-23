// example/cache-set-get-test.js

const { set, get } = require('../src/index');

// Example usage of cache set and get functions
function testCacheSetGet() {
  const key = 'test-key';
  const value = { data: 'Example cached data' };
  
  set(key, value);
  const cachedData = get(key);
  
  console.log('Retrieved from cache:', cachedData);
}

testCacheSetGet();