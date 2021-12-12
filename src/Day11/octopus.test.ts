import * as octopus from './octopus';
import { OctopusCoal } from './octopusCoal';

const dataFromExample =
  '5483143223\n' +
  '2745854711\n' +
  '5264556173\n' +
  '6141336146\n' +
  '6357385478\n' +
  '4167524645\n' +
  '2176841721\n' +
  '6882881134\n' +
  '4846848554\n' +
  '5283751526';

describe('octopus parser', () => {
  it('should parse one line', () => {
    const actual = octopus.parser('123456');
    const expected = [[1, 2, 3, 4, 5, 6]];
    expect(actual).toStrictEqual(expected);
  });
  it('should parse multiple lines', () => {
    const actual = octopus.parser('123\n456');
    const expected = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe('octopus flashes', () => {
  it('should count 1 flash', () => {
    const octopusCoal = new OctopusCoal([[9]]);
    octopusCoal.live(1);
    const actual = octopusCoal.numberOfFlashes();
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should count 2 flash', () => {
    const octopusCoal = new OctopusCoal([[9, 8]]);
    octopusCoal.live(1);
    const actual = octopusCoal.numberOfFlashes();
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('should count 0 flash after 1 day', () => {
    const octopusCoal = new OctopusCoal(octopus.parser(dataFromExample));
    octopusCoal.live(1);
    const actual = octopusCoal.numberOfFlashes();
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it('should count 204 flash after 10 days', () => {
    const octopusCoal = new OctopusCoal(octopus.parser(dataFromExample));
    octopusCoal.live(10);
    const actual = octopusCoal.numberOfFlashes();
    const expected = 204;
    expect(actual).toBe(expected);
  });
  it('should count 1656 flash after 100 days', () => {
    const octopusCoal = new OctopusCoal(octopus.parser(dataFromExample));
    octopusCoal.live(100);
    const actual = octopusCoal.numberOfFlashes();
    const expected = 1656;
    expect(actual).toBe(expected);
  });
  it('should return 195 when all octopus from example are synchronised ', () => {
    const octopusCoal = new OctopusCoal(octopus.parser(dataFromExample));
    const actual = octopusCoal.liveUntilSynchronizedDay();
    const expected = 195;
    expect(actual).toBe(expected);
  });
});
