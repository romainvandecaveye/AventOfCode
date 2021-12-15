// import { parseInsertions, parseTemplate } from './polymer-parser';
//
// const exampleTemplateData = 'NNCB';
// const exampleInsertionsData =
//   'CH -> B\n' +
//   'HH -> N\n' +
//   'CB -> H\n' +
//   'NH -> C\n' +
//   'HB -> C\n' +
//   'HC -> B\n' +
//   'HN -> C\n' +
//   'NN -> C\n' +
//   'BH -> H\n' +
//   'NC -> B\n' +
//   'NB -> B\n' +
//   'BN -> B\n' +
//   'BB -> N\n' +
//   'BC -> B\n' +
//   'CC -> N\n' +
//   'CN -> C';
//
// describe('parsers', () => {
//   it('should parse template into a map', () => {
//     const actual = parseTemplate('NNCB');
//     const expected = new Map([
//       ['NN', 1],
//       ['NC', 1],
//       ['CB', 1]
//     ]);
//     expect(actual).toStrictEqual(expected);
//   });
//   it('should parse one insertion', () => {
//     const actual = parseInsertions('CH -> B');
//     const expected = new Map([['CH', ['CB', 'BH']]]);
//     expect(actual).toStrictEqual(expected);
//   });
//
//   it('should parse two insertions', () => {
//     const actual = parseInsertions('CH -> B\nHH -> N');
//     const expected = new Map([
//       ['CH', ['CB', 'BH']],
//       ['HH', ['HN', 'NH']]
//     ]);
//     expect(actual).toStrictEqual(expected);
//   });
// });
// describe('insertions', () => {
//   // it('should insert one B', () => {
//   //   const actual = insert(parseTemplate('CH'), parseInsertions('CH -> B'));
//   //   const expected = new Map([
//   //     ['CB', 1],
//   //     ['BH', 1]
//   //   ]);
//   //   expect(actual).toStrictEqual(expected);
//   // });
//   // it('should insert one B and one A', () => {
//   //   const actual = insert(
//   //     parseTemplate('CHCB'),
//   //     parseInsertions('CH -> B\nCB -> A')
//   //   );
//   //   const expected = new Map([
//   //     ['CB', 1],
//   //     ['BH', 1],
//   //     ['HC', 1],
//   //     ['CA', 1],
//   //     ['AB', 1]
//   //   ]);
//   //   expect(actual).toStrictEqual(expected);
//   // });
//   it('should insert one B ', () => {
//     const actual = insert(parseTemplate('CBB'), parseInsertions('CB -> B'));
//     const expected = new Map([
//       ['CB', 1],
//       ['BB', 2]
//     ]);
//     expect(actual).toStrictEqual(expected);
//   });
//   it('should insert like example after step 1', () => {
//     const actual = insert(
//       parseTemplate(exampleTemplateData),
//       parseInsertions(exampleInsertionsData)
//     );
//     const expected = new Map([
//       ['NC', 1],
//       ['CN', 1],
//       ['NB', 1],
//       ['BC', 1],
//       ['CH', 1],
//       ['HB', 1]
//     ]);
//     expect(actual).toStrictEqual(expected);
//   });
//   it('should insert like example after step 2', () => {
//     const actual = insertNTime(
//       parseTemplate(exampleTemplateData),
//       parseInsertions(exampleInsertionsData),
//       2
//     );
//     const expected = new Map([
//       ['NB', 2],
//       ['BC', 2],
//       ['CC', 1],
//       ['CN', 1],
//       ['BB', 2],
//       ['BB', 2],
//       ['CB', 2],
//       ['BH', 1],
//       ['HC', 1]
//     ]);
//     expect(actual).toStrictEqual(expected);
//   });
//   // it('should count 1749 B after step 10', () => {
//   //   const polymer = insertNTime(
//   //     parseTemplate(exampleTemplateData),
//   //     parseInsertions(exampleInsertionsData),
//   //     2
//   //   );
//   //   console.log(polymer);
//   //   const actual = countOccurs(polymer).get('B') ?? 0;
//   //   const expected = 1749;
//   //   expect(actual).toBe(expected);
//   // });
//   //   it('should count 298 c after step 10', () => {
//   //     const polymer = insertNTime(exampleTemplateData, insertionsExample, 10);
//   //     const actual = countOccurs(polymer).get('C') ?? 0;
//   //     const expected = 298;
//   //     expect(actual).toBe(expected);
//   //   });
//   //   it('should calculate 1588 polymer score', () => {
//   //     const polymer = insertNTime(exampleTemplateData, insertionsExample, 10);
//   //     const actual = calculatePolymerScore(polymer);
//   //     const expected = 1588;
//   //     expect(actual).toBe(expected);
//   //   });
// });
