import Coordinates from './Coordinates';
import Order from './Order';

export function dive(orderStr: string): Coordinates {
  const order = new Order(orderStr);
  switch (order.direction) {
    case 'forward': {
      return new Coordinates(order.unit, 0, 0);
    }
    case 'down': {
      return new Coordinates(0, 0, order.unit);
    }
    case 'up': {
      return new Coordinates(0, 0, -order.unit);
    }
    default: {
      return new Coordinates(1, 0, 0);
    }
  }
}

export function diveFrom(orderStr: string, position: Coordinates): Coordinates {
  const delta = dive(orderStr);
  const depth = position.depth + position.aim * delta.horizontal;
  const horizontal = position.horizontal + delta.horizontal;
  const aim = position.aim + delta.aim;
  return new Coordinates(horizontal, depth, aim);
}

export function diveWithAimFrom(
  orderStr: string,
  position: Coordinates
): Coordinates {
  const delta = dive(orderStr);
  const depth = position.depth + position.aim * delta.horizontal;
  const horizontal = position.horizontal + delta.horizontal;
  const aim = position.aim + delta.aim;
  return new Coordinates(horizontal, depth, aim);
}

export function diveFromArray(orders: string[]): Coordinates {
  let position = new Coordinates(0, 0, 0);
  for (let i = 0; i < orders.length; i++) {
    position = diveFrom(orders[i], position);
  }
  return position;
}

export function diveFromArrayWithAim(orders: string[]): Coordinates {
  let position = new Coordinates(0, 0, 0);
  for (let i = 0; i < orders.length; i++) {
    position = diveWithAimFrom(orders[i], position);
  }
  return position;
}

export function getFinalPositionAfterDive(orders: string[]): number {
  return diveFromArray(orders).multiply();
}

export function getFinalPositionAfterDiveWithAim(orders: string[]): number {
  return diveFromArrayWithAim(orders).multiply();
}
