import { Venture } from './venture';
import { Coordinates } from './coordinates';

function contains(coordinates: Coordinates[], coordinate: Coordinates) {
  return coordinates.some((c) => c.x === coordinate.x && c.y === coordinate.y);
}

export function calculateOverlapping(ventures: Venture[]): number {
  const coordinates: Coordinates[] = [];
  const coordinatesDouble: Coordinates[] = [];
  ventures.forEach((venture) => {
    const path = venture.getPath();
    path.forEach((coordinate) => {
      if (!contains(coordinates, coordinate)) {
        coordinates.push(coordinate);
      } else if (!contains(coordinatesDouble, coordinate)) {
        coordinatesDouble.push(coordinate);
      }
    });
  });
  return coordinatesDouble.length;
}
