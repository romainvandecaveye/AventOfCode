import * as day1 from './Day1/sonar';

import sonarData from './Day1/sonar-data';

console.log(
  `Day1-step1 : ${day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData)}`
);

console.log(
  `Day1-step2 : ${day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData)}`
);
