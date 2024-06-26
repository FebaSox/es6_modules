import Car from "./car.js";

class Wishlist {
  constructor() {
    this.list = [];
    this.nextID = 0;
  }
  add(make, model, year) {
    const car = new Car(++this.nextID, make, model, year);
    this.list.push(car);
  }
  remove(carId) {
    this.list = this.list.filter((car) => car.id !== carId);
  }
}

export default Wishlist;
