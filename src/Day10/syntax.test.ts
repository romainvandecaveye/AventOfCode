import * as syntax from './syntax';

const exampleData =
  '[({(<(())[]>[[{[]{<()<>>\n' +
  '[(()[<>])]({[<{<<[]>>(\n' +
  '{([(<{}[<>[]}>{[]{[(<()>\n' +
  '(((({<>}<{<{<>}{[]{[]{}\n' +
  '[[<[([]))<([[{}[[()]]]\n' +
  '[{[{({}]{}}([{[{{{}}([]\n' +
  '{<[[]]>}<{[{[{[]{()[[[]\n' +
  '[<(<(<(<{}))><([]([]()\n' +
  '<{([([[(<>()){}]>(<<{{\n' +
  '<{([{{}}[<[[[<>{}]]]>[]]';

describe('parser', () => {
  it('should parse two lines', () => {
    const actual = syntax.syntaxParseChunks(
      '[({(<(())[]>[[{[]{<()<>>\n[(()[<>])]({[<{<<[]>>('
    );
    const expected = ['[({(<(())[]>[[{[]{<()<>>', '[(()[<>])]({[<{<<[]>>('];
    expect(actual).toStrictEqual(expected);
  });
});

describe('finding first corrupted element', () => {
  it('should return "" when passing ()', () => {
    const actual = syntax.detectSyntaxError('()');
    const expected = '';
    expect(actual).toBe(expected);
  });
  it('should return "}" when passing (})', () => {
    const actual = syntax.detectSyntaxError('(})');
    const expected = '}';
    expect(actual).toBe(expected);
  });
  it('should return "}" when passing "{([(<{}[<>[]}>{[]{[(<()>"', () => {
    const actual = syntax.detectSyntaxError('{([(<{}[<>[]}>{[]{[(<()>');
    const expected = '}';
    expect(actual).toBe(expected);
  });
  it('should return ")" when passing "[[<[([]))<([[{}[[()]]]', () => {
    const actual = syntax.detectSyntaxError('[[<[([]))<([[{}[[()]]]');
    const expected = ')';
    expect(actual).toBe(expected);
  });
});

describe('score syntax', () => {
  it('should return 3 when passing )', () => {
    const actual = syntax.calculateScore(')');
    const expected = 3;
    expect(actual).toBe(expected);
  });
  it('should return 57 when passing ]', () => {
    const actual = syntax.calculateScore(']');
    const expected = 57;
    expect(actual).toBe(expected);
  });
  it('should return 1197 when passing }', () => {
    const actual = syntax.calculateScore('}');
    const expected = 1197;
    expect(actual).toBe(expected);
  });
  it('should return 25137 when passing >', () => {
    const actual = syntax.calculateScore('>');
    const expected = 25137;
    expect(actual).toBe(expected);
  });

  it('should return 26397 when passing example', () => {
    const expected = 26397;
    const actual = syntax.calculateScoreOfChunks(
      syntax.syntaxParseChunks(exampleData)
    );
    expect(actual).toBe(expected);
  });
});

describe('autocomplete', () => {
  it('should return ")" when I call autocomplete of "("', () => {
    const actual = syntax.autocomplete('(');
    const expected = ')';
    expect(actual).toBe(expected);
  });
  it('should return "))" when I call autocomplete of "(("', () => {
    const actual = syntax.autocomplete('((');
    const expected = '))';
    expect(actual).toBe(expected);
  });
  it('should return "}}]])})]" when I call autocomplete of "[({(<(())[]>[[{[]{<()<>>"', () => {
    const actual = syntax.autocomplete('[({(<(())[]>[[{[]{<()<>>');
    const expected = '}}]])})]';
    expect(actual).toBe(expected);
  });
});

describe('autocomplete score', () => {
  it('should return 1 when I calculate autoCompleteScore of ")"', () => {
    const actual = syntax.calculateAutoCompleteScore('(');
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should return 1 when I calculate autoCompleteScore of "))"', () => {
    const actual = syntax.calculateAutoCompleteScore('((');
    const expected = 6;
    expect(actual).toBe(expected);
  });
  it('should return 288957 when I call autocompleteScore of "}}]])})]"', () => {
    const actual = syntax.calculateAutoCompleteScore(
      '[({(<(())[]>[[{[]{<()<>>'
    );
    const expected = 288957;
    expect(actual).toBe(expected);
  });
});
describe('part2', () => {
  it('should return 288957 as autocomplete score of example', () => {
    const actual = syntax.calculatePart2(syntax.syntaxParseChunks(exampleData));
    const expected = 288957;
    expect(actual).toBe(expected);
  });
});
