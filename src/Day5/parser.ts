import { Venture } from './venture';

const COORDINATE_SEPARATOR = ',';
const SOURCE_AND_DESTINATION_SEPARATOR = ' -> ';
const LINE_SEPARATOR = '\n';

function getSourceAndDestination(line: string) {
  return line.split(SOURCE_AND_DESTINATION_SEPARATOR);
}

function getSource(sourceAndDestination: string[]) {
  return sourceAndDestination[0];
}

function getDestination(sourceAndDestination: string[]) {
  return sourceAndDestination[1];
}

function getXSource(source: string) {
  return Number(source.split(COORDINATE_SEPARATOR)[0]);
}

function getYSource(source: string) {
  return Number(source.split(COORDINATE_SEPARATOR)[1]);
}

function getXDestination(destination: string) {
  return Number(destination.split(COORDINATE_SEPARATOR)[0]);
}

function getYDestination(destination: string) {
  return Number(destination.split(COORDINATE_SEPARATOR)[1]);
}

function getCoordinates(line: string) {
  const xSource = getXSource(getSource(getSourceAndDestination(line)));
  const ySource = getYSource(getSource(getSourceAndDestination(line)));
  const xDestination = getXDestination(
    getDestination(getSourceAndDestination(line))
  );
  const yDestination = getYDestination(
    getDestination(getSourceAndDestination(line))
  );
  return { xSource, ySource, xDestination, yDestination };
}

export function parseLine(line: string): Venture {
  const { xSource, ySource, xDestination, yDestination } = getCoordinates(line);
  return new Venture(xSource, ySource, xDestination, yDestination);
}

export function parseLines(lines: string[]): Venture[] {
  const venture: Venture = parseLine(lines[0]);
  if (lines.length === 1) {
    return [venture];
  }
  const ventures = parseLines(lines.splice(1));
  ventures.unshift(venture);
  return ventures;
}

export function parseVentureAndFilterDiagonale(text: string): Venture[] {
  const lines = text.split(LINE_SEPARATOR);
  const ventures = parseLines(lines);
  return ventures.filter(
    (venture) =>
      venture.getXSource() === venture.getXDestination() ||
      venture.getYSource() === venture.getYDestination()
  );
}
export function parseVenture(text: string): Venture[] {
  const lines = text.split(LINE_SEPARATOR);
  return parseLines(lines);
}
