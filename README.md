# WS Status & Op Code npm package

Utility to interact with Websocket status & Op Code.

## Usage

With this module, you can call it with a Status Code / Op Code or a message name.

#### StatusCode
* The Status Code will return the message name
* The Message name will return the Status Code

#### OpCode
* The Op Code will return the message name
* The Message name will return the Op Code

## API

This module only map a message name constant to a code or the opposite
It works for OpCode and StatusCode

### API sample

```javascript
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
```

---

Original [repository](https://github.com/oktapodia/node-ws-status) and [npm](https://www.npmjs.com/package/ws-status) package
