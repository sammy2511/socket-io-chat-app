var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
  it('should generate correct message object',() => {
    var from = 'samar';
    var text = 'some message';
    var message = generateMessage(from,text);
    var n = 1;
    expect(message.createdAt).not.toBe(0);
    expect(message).toMatchObject({from,text});
  });
});
