const { getBalance } = require("../src/index");
const balance = getBalance("0xe9C1B07ACbBe047d46305818f402d46daBEc0eDc");
console.log(balance); // Output: the balance of the address



/**
 * PS C:\Users\Hp\Documents\Projects\nodejs\web3\eth-data-library> node .\example\bal   
cc Samuel - Nazu
Backend Engineer and Pen-tester
Promise { <pending> }
C:\Users\Hp\Documents\Projects\nodejs\web3\eth-data-library\src\queries.js:10
    const config = getConfig();
                   ^

TypeError: getConfig is not a function
    at getDefaultWeb3 (C:\Users\Hp\Documents\Projects\nodejs\web3\eth-data-library\src\queries.js:10:20)
    at getBalance (C:\Users\Hp\Documents\Projects\nodejs\web3\eth-data-library\src\queries.js:24:24)
    at Object.<anonymous> (C:\Users\Hp\Documents\Projects\nodejs\web3\eth-data-library\example\bal.js:2:17)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.10.0
 * 
 */
