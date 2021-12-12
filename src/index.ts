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
import { calculateNumberOfDays } from './Day11/octopus';

function logTimestamptedResult(day: number, step: number, methodCall: number) {
  const startTime = new Date().getTime();
  const endTime = Math.round(new Date().getTime() - startTime);
  console.log('{', endTime, ' ms} Day', day, 'step', step, ': ', methodCall);
}
logTimestamptedResult(
  1,
  1,
  day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData)
);
logTimestamptedResult(
  1,
  2,
  day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData)
);
logTimestamptedResult(2, 1, day2.getFinalPositionAfterDive(diveData));
logTimestamptedResult(2, 2, day2.getFinalPositionAfterDiveWithAim(diveData));
logTimestamptedResult(
  3,
  1,
  day3.calculatePowerConsumption(powerConsumptionData)
);
logTimestamptedResult(
  3,
  2,
  day3.calculateLifeSupportRating(powerConsumptionData)
);
logTimestamptedResult(4, 1, day4.whoWinSooner(boards, draws).calculatePower());
logTimestamptedResult(4, 2, day4.whoWinLast(boards, draws).calculatePower());
logTimestamptedResult(6, 1, getNumberOfFishAfter(lanternFishData, 80));
logTimestamptedResult(6, 2, getNumberOfFishAfter(lanternFishData, 256));
logTimestamptedResult(7, 1, calculateFuel(crabsData));
logTimestamptedResult(7, 2, calculateFuelCrab(crabsData));
logTimestamptedResult(8, 1, decode.easyDigitPart1(seventsegmentData));
logTimestamptedResult(8, 2, decode.easyDigitPart2(seventsegmentData));
logTimestamptedResult(
  9,
  1,
  basin.findLowestPoints(basin.parseLine(smokeBasinData)).getRiskLevel()
);
const basins = basin.findLowestBasin(basin.parseLine(smokeBasinData));
basins.sort((a, b) => b.size() - a.size());
const biggestBasins = [basins[0], basins[1], basins[2]];
const actual = biggestBasins.reduce((prev, curr) => prev * curr.size(), 1);
logTimestamptedResult(9, 2, actual);

logTimestamptedResult(
  10,
  1,
  syntax.calculateScoreOfChunks(syntax.syntaxParseChunks(syntaxData))
);
logTimestamptedResult(
  10,
  2,
  syntax.calculatePart2(syntax.syntaxParseChunks(syntaxData))
);
logTimestamptedResult(
  11,
  1,
  octopus.calculateNumberOfFlashes(octopusData, 100)
);
logTimestamptedResult(11, 2, octopus.calculateNumberOfDays(octopusData));
