export function splitPackets(packets: string) {
  return decodeSequence(decodeStringHexToBin(packets), []);
}

export function decodeBinToDecimal(s: string) {
  return parseInt(s, 2);
}

export function decodeHexToBin(s: string) {
  return parseInt(s, 16).toString(2).padStart(4, '0');
}

export function decodeStringHexToBin(string: string) {
  const strings = Array.from(string);
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += decodeHexToBin(strings[i]);
  }
  return result;
}

export function getVersionOfPacket(packet: string): number {
  return decodeBinToDecimal(packet.substring(0, 3));
}

export function getTypeOfPacket(packet: string): number {
  return decodeBinToDecimal(packet.substring(3, 6));
}

export function getPacketLengthTypeId(sequence: string): number {
  return decodeBinToDecimal(sequence.substring(6, 7));
}

export function getPacketsLength(sequence: string): number {
  if (getPacketLengthTypeId(sequence) === 0) {
    return decodeBinToDecimal(sequence.substring(7, 22));
  }
  return decodeBinToDecimal(sequence.substring(7, 18));
}

function decodeSequence(binSequence: string, packets: string[]): string[] {
  if (binSequence === '') {
    return packets;
  }
  const typeOfPacket = getTypeOfPacket(binSequence);

  if (typeOfPacket === 4) {
    packets.push(binSequence.substring(0, 24));
    return decodeSequence(binSequence.substring(24), packets);
  }
  const lengthTypeId = getPacketLengthTypeId(binSequence);
  let totalLength = 22;
  if (lengthTypeId === 0) {
    totalLength += getPacketsLength(binSequence) + 7;
  } else {
    totalLength += getPacketsLength(binSequence) * 11 + 5;
  }
  packets.push(binSequence.substring(0, totalLength));
  return decodeSequence(binSequence.substring(totalLength), packets);
}
