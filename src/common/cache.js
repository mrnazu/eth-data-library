// cache.js

const fs = require('fs');
const cacheDir = './cache';

function ensureCacheDir() {
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
}

function getCacheFilePath(key) {
  return `${cacheDir}/${key}.json`;
}

function set(key, value) {
  ensureCacheDir();
  const data = JSON.stringify(value);
  fs.writeFileSync(getCacheFilePath(key), data);
}

function get(key) {
  const filePath = getCacheFilePath(key);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    } else {
      throw error;
    }
  }
}

module.exports = {
  set,
  get,
};
