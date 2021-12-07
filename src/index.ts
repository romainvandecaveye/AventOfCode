import sonarData from './Day1/sonar-data';
import diveData from './Day2/dive-data';
import powerConsumptionData from './Day3/powerconsumption-data';
import boards from './Day4/boards-data';
import draws from './Day4/bingo-data';
import lanternFishData from './Day6/lanternFish-data';
import * as day1 from './Day1/sonar';
import * as day2 from './Day2/dive';
import * as day3 from './Day3/diag';
import * as day4 from './Day4/bingo';
import { getNumberOfFishAfter } from './Day6/shoal';

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
