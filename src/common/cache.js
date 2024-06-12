const fs = require('fs');

/**
 * The directory path where cached data will be stored.
 * @type {string}
 */
const cacheDir = './cache';

/**
 * Ensures the cache directory exists. 
 * If it doesn't exist, the function creates it recursively.
 */
function ensureCacheDir() {
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
}

/**
 * Generates the file path for a specific cache key.
 * The file path is constructed by combining the cache directory path and the provided key with a `.json` extension.
 *
 * @param {string} key - The cache key used to identify the cached data.
 * @returns {string} - The absolute path to the cache file for the given key.
 */
function getCacheFilePath(key) {
  return `${cacheDir}/${key}.json`;
}

/**
 * Stores a key-value pair in the cache.
 *
 * @param {string} key - The unique identifier for the cached data.
 * @param {*} value - The data to be cached. This can be any serializable value.
 * @throws {Error} - If there's an error writing the data to the cache file.
 */
function set(key, value) {
  ensureCacheDir();
  const data = JSON.stringify(value);
  fs.writeFileSync(getCacheFilePath(key), data);
}

/**
 * Retrieves data from the cache based on the provided key.
 *
 * @param {string} key - The cache key used to identify the data.
 * @returns {*} - The cached data associated with the key, or null if the key is not found.
 * @throws {Error} - If there's an error reading the cache file or parsing the JSON data.
 */
function get(key) {
  const filePath = getCacheFilePath(key);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') { // Handle file not found error
      return null;
    } else {
      throw error; // Re-throw other errors
    }
  }
}

module.exports = {
  set,
  get,
};
