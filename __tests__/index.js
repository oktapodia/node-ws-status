const lib = require('../');

describe('node-ws-status', () => {
  it('StatusCode', () => {
    expect(lib.StatusCode.NORMAL_CLOSURE).toEqual(1000);
    expect(lib.StatusCode[1000]).toEqual('Normal closure');
  });

  it('OpCode', () => {
    expect(lib.OpCode.CONTINUATION).toEqual(0);
    expect(lib.OpCode[0]).toEqual('Continuation frame');
  });
});
