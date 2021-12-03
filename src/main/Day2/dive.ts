import { Coordinates } from './Coordinates';
import { Order } from './Order';

export function dive(orderStr: string): Coordinates {
  let order = new Order(orderStr);
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
  let delta = dive(orderStr);
  let depth = position.depth + position.aim * delta.horizontal;
  let horizontal = position.horizontal + delta.horizontal;
  let aim = position.aim + delta.aim;
  return new Coordinates(horizontal, depth, aim);
}

export function diveFromArray(orders: string[]): Coordinates {
  let position = new Coordinates(0, 0, 0);
  for (let i = 0; i < orders.length; i++) {
    position = diveFrom(orders[i], position);
  }
  return position;
}
