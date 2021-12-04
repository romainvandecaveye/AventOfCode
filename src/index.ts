import sonarData from './Day1/sonar-data';
import diveData from './Day2/dive-data';
import powerConsumptionData from './Day3/powerconsumption-data';
import boards from './Day4/boards-data';
import draws from './Day4/bingo-data';
import * as day1 from './Day1/sonar';
import * as day2 from './Day2/dive';
import * as day3 from './Day3/diag';
import * as day4 from './Day4/bingo';

console.log(
  `Day1-step1 : ${day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData)}`
);

console.log(
  `Day1-step2 : ${day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData)}`
);

console.log(`Day2-step1 : ${day2.getFinalPositionAfterDive(diveData)}`);

console.log(`Day2-step2 : ${day2.getFinalPositionAfterDiveWithAim(diveData)}`);

console.log(
  `Day3-step1 : ${day3.calculatePowerConsumption(powerConsumptionData)}`
);

console.log(
  `Day3-step2 : ${day3.calculateLifeSupportRating(powerConsumptionData)}`
);

console.log('Day4-step1 : ', day4.whoWinSooner(boards, draws).calculatePower());
console.log('Day4-step2 : ', day4.whoWinLast(boards, draws).calculatePower());
