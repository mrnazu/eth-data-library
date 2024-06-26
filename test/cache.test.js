// cache.test.js

const assert = require('assert');
const { set, get } = require('../src/common/cache');

describe('cache.js tests (simulated)', () => {
  it('set should store data in cache', () => {
    const key = 'test-key';
    const value = { data: 'This is cached data 2' };
    set(key, value);
    const cachedValue = get(key);
    assert.deepStrictEqual(cachedValue, value);
  });

  it('get should retrieve data from cache', () => {
    const key = 'test-key';
    const value = { data: 'This is cached data 2' };
    const cachedValue = get(key);
    assert.deepStrictEqual(cachedValue, value);
  });
});
