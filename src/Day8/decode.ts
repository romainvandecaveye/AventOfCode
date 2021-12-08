function arrayHas(letters: string[], letter: string): boolean {
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] === letter) {
      return true;
    }
  }
  return false;
}

function arrayHasAllLetterFromWord(letters: string, refs: string): boolean {
  const refsArray = Array.from(refs);
  for (let i = 0; i < refsArray.length; i++) {
    if (!arrayHas(Array.from(letters), refsArray[i])) {
      return false;
    }
  }
  return true;
}

function findWhatIsMissing(reference: string, WordWithMissingLetter: string) {
  const lettersOfWordWithMissingLetters = Array.from(WordWithMissingLetter);
  const lettersOfReference = Array.from(reference);
  for (let i = 0; i < reference.length; i += 1) {
    if (!arrayHas(lettersOfWordWithMissingLetters, lettersOfReference[i])) {
      return lettersOfReference[i];
    }
  }
  return '';
}

export function decode(letters: string, decodedMap: Map<string, string>) {
  if (letters.length === 2) {
    return '1';
  }
  if (letters.length === 3) {
    return '7';
  }
  if (letters.length === 4) {
    return '4';
  }
  if (letters.length === 7) {
    return '8';
  }
  if (!arrayHas(Array.from(letters), decodedMap.get('f') ?? 'f')) {
    return '2';
  }
  if (letters.length === 5) {
    if (arrayHas(Array.from(letters), decodedMap.get('b') ?? 'b')) {
      return '5';
    }
    return '3';
  }
  if (letters.length === 6) {
    if (!arrayHas(Array.from(letters), decodedMap.get('e') ?? 'e')) {
      return '9';
    }
    if (!arrayHas(Array.from(letters), decodedMap.get('c') ?? 'c')) {
      return '6';
    }
  }
  return '0';
}

function getStringOfLength(strings: string[], length: number) {
  return strings.filter((value) => value.length === length);
}

function getFirst(strings: string[]) {
  return strings[0];
}

function concat(oneStrings: string[], dDecoded: string) {
  return getFirst(oneStrings) + dDecoded;
}

function concatAllDecoded(
  aDecoded: string,
  bDecoded: string,
  cDecoded: string,
  dDecoded: string,
  eDecoded: string,
  fDecoded: string
) {
  return aDecoded + bDecoded + cDecoded + dDecoded + eDecoded + fDecoded;
}

export function translate(strings: string[]) {
  const decodedMap = new Map();

  const sevenStrings = getStringOfLength(strings, 3);
  const oneStrings = getStringOfLength(strings, 2);
  const aDecoded = findWhatIsMissing(
    getFirst(sevenStrings),
    getFirst(oneStrings)
  );

  const fourStrings = getStringOfLength(strings, 4);
  const eightStrings = getStringOfLength(strings, 7);
  const zeroSixAndNineStrings = getStringOfLength(strings, 6);
  const nineStrings = zeroSixAndNineStrings.filter((value) =>
    arrayHasAllLetterFromWord(value, getFirst(fourStrings))
  );

  const zeroOrSixStrings = zeroSixAndNineStrings.filter(
    (value) => !arrayHasAllLetterFromWord(value, getFirst(fourStrings))
  );
  const eDecoded = findWhatIsMissing(
    getFirst(zeroOrSixStrings),
    getFirst(nineStrings)
  );

  const zeroStrings = zeroOrSixStrings.filter((zeroOrSix) =>
    arrayHasAllLetterFromWord(zeroOrSix, getFirst(oneStrings))
  );
  const sixStrings = zeroOrSixStrings.filter(
    (value) => !arrayHasAllLetterFromWord(value, oneStrings[0])
  );

  const cDecoded = findWhatIsMissing(
    getFirst(eightStrings),
    getFirst(sixStrings)
  );
  const dDecoded = findWhatIsMissing(
    getFirst(eightStrings),
    getFirst(zeroStrings)
  );
  const bDecoded = findWhatIsMissing(
    getFirst(fourStrings),
    concat(oneStrings, dDecoded)
  );
  const fDecoded = findWhatIsMissing(getFirst(oneStrings), cDecoded);
  const gDecoded = findWhatIsMissing(
    getFirst(eightStrings),
    concatAllDecoded(aDecoded, bDecoded, cDecoded, dDecoded, eDecoded, fDecoded)
  );

  decodedMap.set('a', aDecoded);
  decodedMap.set('b', bDecoded);
  decodedMap.set('c', cDecoded);
  decodedMap.set('d', dDecoded);
  decodedMap.set('e', eDecoded);
  decodedMap.set('f', fDecoded);
  decodedMap.set('g', gDecoded);

  return decodedMap;
}

export function easyDigitPart1(strings: string[]): number {
  let digit = 0;
  for (let i = 0; i < strings.length; i++) {
    const segment = strings[i];
    const delimiter = segment.indexOf('|');
    const valuePart = segment.substring(delimiter + 2).split(' ');
    const filteredValues = valuePart.filter(
      (value) =>
        value.length === 2 ||
        value.length === 3 ||
        value.length === 4 ||
        value.length === 7
    );
    digit += filteredValues.length;
  }
  return digit;
}
export function easyDigitPart2(strings: string[]): number {
  let sum = 0;
  for (let i = 0; i < strings.length; i += 1) {
    const segment = strings[i];
    const delimiter = segment.indexOf('|');
    const searchPart = segment.substring(0, delimiter - 1).split(' ');
    const decodedMap = translate(searchPart);
    const valuePart = segment.substring(delimiter + 2).split(' ');
    let valueString = '';
    for (let j = 0; j < valuePart.length; j += 1) {
      valueString += decode(valuePart[j], decodedMap);
    }
    sum += parseInt(valueString, 10);
  }
  return sum;
}
