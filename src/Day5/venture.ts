import * as _ from 'lodash';
import { Coordinates } from './coordinates';

export class Venture {
  sourceCoordinates;

  destinationCoordinates;

  constructor(
    xSource: number,
    ySource: number,
    xDestination: number,
    yDestination: number
  ) {
    this.sourceCoordinates = new Coordinates(xSource, ySource);
    this.destinationCoordinates = new Coordinates(xDestination, yDestination);
  }

  getXSource() {
    return this.sourceCoordinates.x;
  }

  getYSource() {
    return this.sourceCoordinates.y;
  }

  getXDestination() {
    return this.destinationCoordinates.x;
  }

  getYDestination() {
    return this.destinationCoordinates.y;
  }

  getPath() {
    return this.drawPath(this.sourceCoordinates, this.destinationCoordinates);
  }

  private isHorizontalAscendant(): boolean {
    return this.sourceCoordinates.x < this.destinationCoordinates.x;
  }

  private isVerticalAscendant(): boolean {
    return this.sourceCoordinates.y < this.destinationCoordinates.y;
  }

  private isHorizontalPath(): boolean {
    return this.sourceCoordinates.y === this.destinationCoordinates.y;
  }

  private drawPath(
    sourceCoordinates: Coordinates,
    destinationCoordinates: Coordinates
  ): Coordinates[] {
    if (_.isEqual(sourceCoordinates, destinationCoordinates)) {
      return [sourceCoordinates];
    }
    const newX =
      sourceCoordinates.x === destinationCoordinates.x
        ? sourceCoordinates.x
        : sourceCoordinates.x +
          this.getDeltaX(sourceCoordinates, destinationCoordinates);

    const newY =
      sourceCoordinates.y === destinationCoordinates.y
        ? sourceCoordinates.y
        : sourceCoordinates.y +
          this.getDeltaY(sourceCoordinates, destinationCoordinates);

    const newSource = new Coordinates(newX, newY);

    const coordinates = this.drawPath(newSource, destinationCoordinates);
    coordinates.unshift(sourceCoordinates);
    return coordinates;
  }

  private getDeltaX(
    sourceCoordinates: Coordinates,
    destinationCoordinates: Coordinates
  ): number {
    return (
      (destinationCoordinates.x - sourceCoordinates.x) /
      Math.abs(destinationCoordinates.x - sourceCoordinates.x)
    );
  }

  private getDeltaY(
    sourceCoordinates: Coordinates,
    destinationCoordinates: Coordinates
  ) {
    return (
      (destinationCoordinates.y - sourceCoordinates.y) /
      Math.abs(destinationCoordinates.y - sourceCoordinates.y)
    );
  }
}
