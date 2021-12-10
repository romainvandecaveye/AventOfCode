import assert from 'assert';

export function syntaxParseChunks(chunks: string): string[] {
  const lines = chunks.split('\n');
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);
  }
  return result;
}

export function isOpenCharacter(character: string) {
  return (
    character === '{' ||
    character === '(' ||
    character === '[' ||
    character === '<'
  );
}

export function isCloseCharacterCompatible(
  closeCharacter: string,
  lastOpenCharacter: string
) {
  if (lastOpenCharacter === '(' && closeCharacter === ')') {
    return true;
  }
  if (lastOpenCharacter === '<' && closeCharacter === '>') {
    return true;
  }
  if (lastOpenCharacter === '{' && closeCharacter === '}') {
    return true;
  }
  return lastOpenCharacter === '[' && closeCharacter === ']';
}

export function analyseSyntax(characters: string[], open: string[]): string {
  if (characters.length === 0) {
    return '';
  }
  const fistCharacter = characters.shift();
  assert(fistCharacter != null);
  if (isOpenCharacter(fistCharacter)) {
    open.push(fistCharacter);
    return analyseSyntax(characters, open);
  }
  const lastOpenCharacter = open.pop();
  assert(lastOpenCharacter != null);
  if (isCloseCharacterCompatible(fistCharacter, lastOpenCharacter)) {
    return analyseSyntax(characters, open);
  }
  return fistCharacter;
}

export function detectSyntaxError(characters: string) {
  return analyseSyntax(Array.from(characters), []);
}

export function calculateScore(character: string): number {
  const characterScoring = new Map<string, number>([
    [')', 3],
    [']', 57],
    ['}', 1197],
    ['>', 25137]
  ]);
  return characterScoring.get(character) ?? 0;
}
export function getAutoCompleteScore(character: string): number {
  const characterScoring = new Map<string, number>([
    [')', 1],
    [']', 2],
    ['}', 3],
    ['>', 4]
  ]);
  return characterScoring.get(character) ?? 0;
}

export function calculateScoreOfChunks(strings: string[]): number {
  let score = 0;
  for (let i = 0; i < strings.length; i++) {
    score += calculateScore(detectSyntaxError(strings[i]));
  }
  return score;
}

function findCloseCharacter(openCharacters: string) {
  const charactersMapping = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>']
  ]);
  return charactersMapping.get(openCharacters) ?? '';
}
function findOpenCharacter(closeCharacter: string) {
  const charactersMapping = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
    ['>', '<']
  ]);
  return charactersMapping.get(closeCharacter) ?? '';
}

function removeLastOpenCharacter(
  openCharacters: string[],
  closeCharacter: string
) {
  const openCharacter = findOpenCharacter(closeCharacter);
  const lastIndexOfOpenCharacter = openCharacters.lastIndexOf(openCharacter);
  openCharacters.splice(lastIndexOfOpenCharacter, 1);
}

function findMissingCharacter(
  characters: string[],
  openCharacters: string[]
): string {
  if (characters.length === 0) {
    let closeCharacters = '';
    for (let i = 0; i < openCharacters.length; i++) {
      closeCharacters = findCloseCharacter(openCharacters[i]).concat(
        closeCharacters
      );
    }
    return closeCharacters;
  }
  const firstCharacter = characters.shift();
  assert(firstCharacter != null);
  if (isOpenCharacter(firstCharacter)) {
    openCharacters.push(firstCharacter);
    return findMissingCharacter(characters, openCharacters);
  }
  removeLastOpenCharacter(openCharacters, firstCharacter);
  return findMissingCharacter(characters, openCharacters);
}

export function autocomplete(string: string) {
  return findMissingCharacter(Array.from(string), []);
}

export function calculateAutoCompleteScore(characters: string) {
  const autoCompleted = Array.from(autocomplete(characters));
  return autoCompleted.reduce(
    (prev, curr) => prev * 5 + getAutoCompleteScore(curr),
    0
  );
}

export function calculatePart2(lines: string[]) {
  const incompleteLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (detectSyntaxError(lines[i]) === '') {
      incompleteLines.push(lines[i]);
    }
  }
  const scores = [];
  for (let i = 0; i < incompleteLines.length; i++) {
    scores.push(calculateAutoCompleteScore(incompleteLines[i]));
  }
  scores.sort((a, b) => a - b);

  return scores[(scores.length - 1) / 2];
}
