import exp from 'constants';
import * as path from './path';
import { Mapper } from './mapper';

const dataFromSimpleExample = 'start-A\nstart-b\nA-c\nA-b\nb-d\nA-end\nb-end';
const dataFromReallyComplexExample =
  'fs-end\n' +
  'he-DX\n' +
  'fs-he\n' +
  'start-DX\n' +
  'pj-DX\n' +
  'end-zg\n' +
  'zg-sl\n' +
  'zg-pj\n' +
  'pj-he\n' +
  'RW-he\n' +
  'fs-DX\n' +
  'pj-RW\n' +
  'zg-RW\n' +
  'start-pj\n' +
  'he-WI\n' +
  'zg-he\n' +
  'pj-fs\n' +
  'start-RW';
const dataFromComplexeExample =
  'dc-end\n' +
  'HN-start\n' +
  'start-kj\n' +
  'dc-start\n' +
  'dc-HN\n' +
  'LN-dc\n' +
  'HN-end\n' +
  'kj-sa\n' +
  'kj-HN\n' +
  'kj-dc';
const paths = path.parsePath(dataFromSimpleExample);
const pathsComplex = path.parsePath(dataFromComplexeExample);
const pathsReallyComplex = path.parsePath(dataFromReallyComplexExample);
const mapper = new Mapper(paths);
const mapperComplex = new Mapper(pathsComplex);
const mapperReallyComplex = new Mapper(pathsReallyComplex);

describe('paths parser', () => {
  it('should parse one line', () => {
    const actual = path.parsePath('rf-RL');
    const expected = [new path.Path('rf', 'RL')];
    expect(actual).toStrictEqual(expected);
  });
  it('should parse two lines', () => {
    const actual = path.parsePath('rf-RL\nrf-wz');
    const expected = [new path.Path('rf', 'RL'), new path.Path('rf', 'wz')];
    expect(actual).toStrictEqual(expected);
  });
});

describe('Mapper ', () => {
  it('should return 1 path', () => {
    const actual: string[][] = [];
    new Mapper(path.parsePath('start-end')).getPathsFrom('start', [], actual);
    const expected = [['start', 'end']];
    expect(actual).toStrictEqual(expected);
  });
  it('should return 10 path', () => {
    const actual: string[][] = [];
    mapper.getPathsFrom('start', [], actual);
    const expected = 10;
    expect(actual.length).toBe(expected);
  });
  it('should return 19 path', () => {
    const actual: string[][] = [];
    mapperComplex.getPathsFrom('start', [], actual);
    const expected = 19;
    expect(actual.length).toBe(expected);
  });
  it('should return 226 path', () => {
    const actual: string[][] = [];
    mapperReallyComplex.getPathsFrom('start', [], actual);
    const expected = 226;
    expect(actual.length).toBe(expected);
  });
});

describe('path with time', () => {
  it('should return 36 paths', () => {
    const actual = mapper.getNumberOfPathsWithTime();
    const expected = 36;
    expect(actual).toBe(expected);
  });
  it('should return 103 paths', () => {
    const actual = mapperComplex.getNumberOfPathsWithTime();
    const expected = 103;
    expect(actual).toBe(expected);
  });
  it('should return 3509 paths', () => {
    const actual = mapperReallyComplex.getNumberOfPathsWithTime();
    const expected = 3509;
    expect(actual).toBe(expected);
  });
});
