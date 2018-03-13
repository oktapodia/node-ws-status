/* eslint-disable */
const { StatusCode, OpCode } = require('ws-status');

//// StatusCode
// echo "Normal Closure"
console.log(StatusCode[1000]);

// echo 1000
console.log(StatusCode.NORMAL_CLOSURE);

//// OpCode
// echo "Ping frame"
console.log(OpCode[9]);

// echo 9
console.log(OpCode.PING);
