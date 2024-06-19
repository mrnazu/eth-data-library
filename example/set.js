const { set, get } = require('../src/index');
set("mykey", "myvalue");
const value = get("mykey");
console.log(value);