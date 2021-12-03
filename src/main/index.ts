import * as day1 from "./Day1/sonar";

const diveData = require('./dive-data.ts');
const sonarData = require('./sonar-data.ts');


console.log(
  'Day1-step1 : ' +
  day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData)
);

console.log(
  'Day1-step2 : ' +
  day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData)
);
