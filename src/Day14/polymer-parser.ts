import { Insertion } from './insertion';

export function parseTemplate(templateData: string) {
  const templateMap = new Map();
  const templateArray = Array.from(templateData);
  for (let i = 0; i < templateArray.length - 1; i++) {
    const pair = templateArray[i] + templateArray[i + 1];
    const numberOfPair = templateMap.get(pair) ?? 0;
    templateMap.set(pair, numberOfPair + 1);
  }
  return templateMap;
}
export function parseInsertions(insertionsData: string) {
  const insertions = insertionsData.split('\n');
  const result = new Map<string, string[]>();
  for (let i = 0; i < insertions.length; i++) {
    const insertion = insertions[i].split(' -> ');
    const pair = insertion[0];
    const pairArr = Array.from(pair);
    const char = insertion[1];
    result.set(insertion[0], [pairArr[0] + char, char + pairArr[1]]);
  }
  return result;
}
