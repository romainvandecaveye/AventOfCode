import sonarData from './Day1/sonar-data';
import diveData from './Day2/dive-data';
import powerConsumptionData from './Day3/powerconsumption-data';
import boards from './Day4/boards-data';
import draws from './Day4/bingo-data';
import venturesData from './Day5/ventures-data';
import lanternFishData from './Day6/lanternFish-data';
import * as day1 from './Day1/sonar';
import * as day2 from './Day2/dive';
import * as day3 from './Day3/diag';
import * as day4 from './Day4/bingo';
import * as day5 from './Day5/hydrotermal-venture';
import * as parser from './Day5/parser';
import { Shoal } from './Day6/shoal';

let startTime = new Date().getTime();
const day1step1 = day1.getNumberOfIncreasedFromSimpleArrayOfNumber(sonarData);
const endTimeDay1Step1 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay1Step1, ' ms} Day1-step1 : ', day1step1);

startTime = new Date().getTime();
const day1step2 = day1.getNumberOfIncreasedFromDeepArrayOfNumber(sonarData);
const endTimeDay1Step2 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay1Step2, ' ms} Day1-step2 : ', day1step2);

startTime = new Date().getTime();
const day2step1 = day2.getFinalPositionAfterDive(diveData);
const endTimeDay2Step1 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay2Step1, ' ms} Day2-step1 : ', day2step1);

startTime = new Date().getTime();
const day2step2 = day2.getFinalPositionAfterDiveWithAim(diveData);
const endTimeDay2Step2 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay2Step2, ' ms} Day2-step2 : ', day2step2);

startTime = new Date().getTime();
const day3step1 = day3.calculatePowerConsumption(powerConsumptionData);
const endTimeDay3Step1 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay3Step1, ' ms} Day3-step1 : ', day3step1);

startTime = new Date().getTime();
const day3step2 = day3.calculateLifeSupportRating(powerConsumptionData);
const endTimeDay3Step2 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay3Step2, ' ms} Day3-step2 : ', day3step2);

startTime = new Date().getTime();
const day4step1 = day4.whoWinSooner(boards, draws).calculatePower();
const endTimeDay4Step1 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay4Step1, ' ms} Day4-step1 : ', day4step1);

startTime = new Date().getTime();
const day4step2 = day4.whoWinLast(boards, draws).calculatePower();
const endTimeDay4Step2 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay4Step2, ' ms} Day4-step2 : ', day4step2);

// startTime = new Date().getTime();
// const venturesWithoutDiag = parser.parseVentureAndFilterDiagonale(venturesData);
// const endTimeDay5Step11 = Math.round(new Date().getTime() - startTime);
// console.log('{', endTimeDay5Step11, ' ms} Day5-step1-parsing');
//
// startTime = new Date().getTime();
// const day5step1 = day5.calculateOverlapping(venturesWithoutDiag);
// const endTimeDay5Step12 = Math.round(new Date().getTime() - startTime);
// console.log('{', endTimeDay5Step12, ' ms} Day5-step1', day5step1);

// startTime = new Date().getTime();
// const ventures = parser.parseVenture(venturesData);
// const endTimeDay5Step21 = Math.round(new Date().getTime() - startTime);
// console.log('{', endTimeDay5Step21, ' ms} Day5-step2-parsing');
//
// startTime = new Date().getTime();
// const day5step2 = day5.calculateOverlapping(ventures);
// const endTimeDay5Step22 = Math.round(new Date().getTime() - startTime);
// console.log('{', endTimeDay5Step22, ' ms} Day5-step2', day5step2);

startTime = new Date().getTime();
const shoal = new Shoal(lanternFishData);
shoal.liveDuring(80);
const day6step1 = shoal.getNumberOfFish();
const endTimeDay6Step1 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay6Step1, ' ms} Day6-step1 : ', day6step1);

shoal.liveDuring(256 - 80);
const day6step2 = shoal.getNumberOfFish();
const endTimeDay6Step2 = Math.round(new Date().getTime() - startTime);
console.log('{', endTimeDay6Step2, ' ms} Day6-step1 : ', day6step2);
