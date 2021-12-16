import sonarData from './Day1/sonar-data';
import diveData from './Day2/dive-data';
import powerConsumptionData from './Day3/powerconsumption-data';
import boards from './Day4/boards-data';
import draws from './Day4/bingo-data';
import lanternFishData from './Day6/lanternFish-data';
import seventsegmentData from './Day8/sevent-segment-data';
import smokeBasinData from './Day9/smokebasing-data';
import syntaxData from './Day10/syntax-data';
import octopusData from './Day11/octopus-data';
import pathData from './Day12/paths-data';
import coordinateData from './Day13/coordinates-data';
import foldingData from './Day13/folding-data';
import templateData from './Day14/template.data';
import insertionData from './Day14/insertion.data';
import chitonsData from './Day15/chitons-data';
import * as day1 from './Day1/sonar';
import * as day2 from './Day2/dive';
import * as day3 from './Day3/diag';
import * as day4 from './Day4/bingo';
import { getNumberOfFishAfter } from './Day6/shoal';
import { calculateFuel, calculateFuelCrab } from './Day7/calculateFuel';
import crabsData from './Day7/crabs.data';
import * as decode from './Day8/decode';
import * as basin from './Day9/smokebassin';
import * as syntax from './Day10/syntax';
import * as octopus from './Day11/octopus';
import * as googlemaps from './Day12/mapper';
import * as path from './Day12/path';
import * as origami from './Day13/origami';
import { calculatePolymerScore } from './Day14/polymer';
import { getPath } from './Day15/chiton';

function logResult(day: number, step: number, methodCall: any) {
  console.log(' Day', day, 'step', step, ': ', methodCall);
}
// logResult(1, 1, day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData));
// logResult(1, 2, day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData));
// logResult(2, 1, day2.getFinalPositionAfterDive(diveData));
// logResult(2, 2, day2.getFinalPositionAfterDiveWithAim(diveData));
// logResult(3, 1, day3.calculatePowerConsumption(powerConsumptionData));
// logResult(3, 2, day3.calculateLifeSupportRating(powerConsumptionData));
// logResult(4, 1, day4.whoWinSooner(boards, draws).calculatePower());
// logResult(4, 2, day4.whoWinLast(boards, draws).calculatePower());
// logResult(6, 1, getNumberOfFishAfter(lanternFishData, 80));
// logResult(6, 2, getNumberOfFishAfter(lanternFishData, 256));
// logResult(7, 1, calculateFuel(crabsData));
// logResult(7, 2, calculateFuelCrab(crabsData));
// logResult(8, 1, decode.easyDigitPart1(seventsegmentData));
// logResult(8, 2, decode.easyDigitPart2(seventsegmentData));
// logResult(
//   9,
//   1,
//   basin.findLowestPoints(basin.parseLine(smokeBasinData)).getRiskLevel()
// );
// const basins = basin.findLowestBasin(basin.parseLine(smokeBasinData));
// basins.sort((a, b) => b.size() - a.size());
// const biggestBasins = [basins[0], basins[1], basins[2]];
// const actual = biggestBasins.reduce((prev, curr) => prev * curr.size(), 1);
// logResult(9, 2, actual);
//
// logResult(
//   10,
//   1,
//   syntax.calculateScoreOfChunks(syntax.syntaxParseChunks(syntaxData))
// );
// logResult(10, 2, syntax.calculatePart2(syntax.syntaxParseChunks(syntaxData)));
// logResult(11, 1, octopus.calculateNumberOfFlashes(octopusData, 100));
// logResult(11, 2, octopus.calculateNumberOfDays(octopusData));
//
// logResult(
//   12,
//   1,
//   new googlemaps.Mapper(path.parsePath(pathData)).getNumberOfPaths()
// );
//
// logResult(
//   12,
//   2,
//   new googlemaps.Mapper(path.parsePath(pathData)).getNumberOfPathsWithTime()
// );
// logResult(13, 1, origami.drawFoldOnceAndCount(coordinateData, foldingData));
//
// logResult(13, 2, origami.drawFoldAllAndCount(coordinateData, foldingData));
// logResult(14, 1, calculatePolymerScore(templateData, insertionData, 10));
// logResult(14, 2, calculatePolymerScore(templateData, insertionData, 40));
const testData =
  '1163732\n' +
  '1381332\n' +
  '2136536\n' +
  '3694938\n' +
  '3694932\n' +
  '3694932\n' +
  '2311932';
logResult(15, 1, getPath(testData));
