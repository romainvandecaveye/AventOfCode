import { OctopusCoal } from './octopusCoal';

export function parser(s: string) {
  const strings = s.split('\n');
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    const octopus = [];
    const octopusString = Array.from(strings[i]);
    for (let j = 0; j < octopusString.length; j++) {
      octopus.push(parseInt(octopusString[j], 10));
    }
    result.push(octopus);
  }
  return result;
}

export function calculateNumberOfFlashes(octopusData: string, days: number) {
  const octopusCoal = new OctopusCoal(parser(octopusData));
  octopusCoal.live(days);
  return octopusCoal.numberOfFlashes();
}

export function calculateNumberOfDays(octopusData: string): number {
  return new OctopusCoal(parser(octopusData)).liveUntilSynchronizedDay();
}
