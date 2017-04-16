var crc = require('../crc');
const opcode = Buffer.allocUnsafe(1).fill(0x24);

function TransmitterTimeTxMessage() {
  var check = crc.crc16(opcode);
  checkBuffer = Buffer.allocUnsafe(2);
  checkBuffer.writeUInt16LE(check);
  this.data = Buffer.concat([opcode, checkBuffer]);
}

module.exports = TransmitterTimeTxMessage;