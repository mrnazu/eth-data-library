// logger.js

function getCurrentTimestamp() {
    return new Date().toISOString();
  }
  
  function logInfo(message) {
    console.log(`[${getCurrentTimestamp()}] INFO: ${message}`);
  }
  
  function logWarning(message) {
    console.warn(`[${getCurrentTimestamp()}] WARNING: ${message}`);
  }
  
  function logError(message) {
    console.error(`[${getCurrentTimestamp()}] ERROR: ${message}`);
  }
  
  module.exports = {
    logInfo,
    logWarning,
    logError,
  };
  