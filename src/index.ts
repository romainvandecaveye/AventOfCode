import sonarData from './Day1/sonar-data';
import diveData from './Day2/dive-data';
import * as day1 from './Day1/sonar';
import * as day2 from './Day2/dive';

console.log(
  `Day1-step1 : ${day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData)}`
);

console.log(
  `Day1-step2 : ${day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData)}`
);

console.log(`Day2-step1 : ${day2.getFinalPositionAfterDive(diveData)}`);

console.log(`Day2-step2 : ${day2.getFinalPositionAfterDiveWithAim(diveData)}`);
