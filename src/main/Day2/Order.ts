export class Order {
    direction: string;
    unit: number;
  
    constructor(order: string) {
      this.direction = order.split(' ')[0];
      this.unit = Number.parseInt(order.split(' ')[1]);
    }
  }