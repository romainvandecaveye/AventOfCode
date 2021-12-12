import { Path } from './path';

function isNotInCurrPath(currPath: string[], destination: string) {
  for (let i = 0; i < currPath.length; i++) {
    if (currPath[i] === destination) {
      return false;
    }
  }
  return true;
}

function hasNotAlreadyTwoSimpleCave(currPath: string[]) {
  let counter = 0;
  for (let i = 0; i < currPath.length; i++) {
    for (let j = 0; j < currPath.length; j++) {
      if (
        i !== j &&
        currPath[i] === currPath[j] &&
        currPath[j] === currPath[j].toLowerCase()
      ) {
        counter++;
      }
    }
  }
  return counter < 2;
}

export class Mapper {
  paths: Path[];

  map: Map<string, string[]>;

  constructor(paths: Path[]) {
    this.paths = paths;
    this.map = new Map<string, string[]>();
    for (let i = 0; i < paths.length; i++) {
      const from = this.map.get(paths[i].from);
      if (from === undefined) {
        this.map.set(paths[i].from, [paths[i].to]);
      } else {
        from.push(paths[i].to);
        this.map.set(paths[i].from, from);
      }
      const to = this.map.get(paths[i].to);
      if (to === undefined) {
        this.map.set(paths[i].to, [paths[i].from]);
      } else {
        to.push(paths[i].from);
        this.map.set(paths[i].to, to);
      }
    }
  }

  getPathsFrom(from: string, currPath: string[], paths: string[][]) {
    currPath.push(from);
    if (from === 'end') {
      paths.push(currPath);
    } else {
      const destinations = this.map.get(from) ?? [];
      for (let i = 0; i < destinations.length; i++) {
        const destination = destinations[i];
        if (
          destination !== destination.toLowerCase() ||
          isNotInCurrPath(currPath, destination)
        ) {
          this.getPathsFrom(destination, currPath.slice(), paths);
        }
      }
    }
  }

  getPathsWithTimeFrom(from: string, currPath: string[], paths: string[][]) {
    currPath.push(from);
    if (from === 'end') {
      paths.push(currPath);
    } else {
      const destinations = this.map.get(from) ?? [];
      for (let i = 0; i < destinations.length; i++) {
        const destination = destinations[i];
        if (
          destination !== 'start' &&
          (destination !== destination.toLowerCase() ||
            isNotInCurrPath(currPath, destination) ||
            hasNotAlreadyTwoSimpleCave(currPath))
        ) {
          this.getPathsWithTimeFrom(destination, currPath.slice(), paths);
        }
      }
    }
  }

  getNumberOfPaths() {
    const paths: string[][] = [];
    this.getPathsFrom('start', [], paths);
    return paths.length;
  }

  getNumberOfPathsWithTime() {
    const paths: string[][] = [];
    this.getPathsWithTimeFrom('start', [], paths);
    return paths.length;
  }
}
