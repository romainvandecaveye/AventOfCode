export default class Order {
  direction: string;

  unit: number;

  constructor(order: string) {
    const [direction] = order.split(' ');
    this.direction = direction;
    this.unit = Number.parseInt(order.split(' ')[1], 10);
  }
}
