const diveData = require('./dive-data.ts');

console.log(diveData);

class Coordinates {
  horizontal: number;
  depth: number;
  aim: number;

  constructor(horizontal: number, depth: number, aim: number) {
    this.horizontal = horizontal;
    this.depth = depth;
    this.aim = aim;
  }

  multiply(): number {
    return this.horizontal * this.depth;
  }
}

class Order {
  direction: string;
  unit: number;

  constructor(order: string) {
    this.direction = order.split(' ')[0];
    this.unit = Number.parseInt(order.split(' ')[1]);
  }
}

console.log(diveFromArray(diveData).multiply());

function dive(orderStr: string): Coordinates {
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

function diveFrom(orderStr: string, position: Coordinates): Coordinates {
  let delta = dive(orderStr);
  let depth = position.depth + (position.aim * delta.horizontal);
  let horizontal = position.horizontal + delta.horizontal;
  let aim = position.aim + delta.aim;
  return new Coordinates(horizontal, depth, aim);
}

function diveFromArray(orders: string[]): Coordinates {
  let position = new Coordinates(0, 0, 0);
  for (let i = 0; i < orders.length; i++) {
    position = diveFrom(orders[i], position);
  }
  return position;
}

describe('simple dive', () => {
  it('should return [1,0] when it is forward 1', () => {
    let actual = dive('forward 1');
    const expected = new Coordinates(1, 0, 0);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [0,0,1] when it is down 1', () => {
    let actual = dive('down 1');
    const expected = new Coordinates(0, 0, 1);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [0,0,-1] when it is up 1', () => {
    let actual = dive('up 1');
    const expected = new Coordinates(0, 0, -1);
    expect(actual).toStrictEqual(expected);
  });
});

describe('dive from position', () => {
  it('should return [2,1,0] when it is forward 1 from position [1,1,0]', () => {
    let actual = diveFrom('forward 1', new Coordinates(1, 1, 0));
    const expected = new Coordinates(2, 1, 0);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [1,1,1] when it is down 1 from position [1,1,0]', () => {
    let actual = diveFrom('down 1', new Coordinates(1, 1, 0));
    const expected = new Coordinates(1, 1, 1);
    expect(actual).toStrictEqual(expected);
  });
  it('should return [1,1,0] when it is up 1 from position [1,1,1]', () => {
    let actual = diveFrom('up 1', new Coordinates(1, 1, 1));
    const expected = new Coordinates(1, 1, 0);
    expect(actual).toStrictEqual(expected);
  });
});

describe('dive with array', () => {
  it('should return 900 when it is forward 1 from example array ', () => {
    let exempleArray = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ];
    let actual = diveFromArray(exempleArray).multiply();
    const expected = new Coordinates(15, 60,0).multiply();
    expect(actual).toStrictEqual(expected);
  });
});
