import {BasicStatement} from './Statement';

let Customer = (name) => {
  let rentals = [];

  function getTotalCharge() {
    return rentals.reduce((sum, rental) => {
      return sum + rental.charge;
    }, 0);
  }
  function getTotalPoints() {
    return rentals.reduce((sum, rental) => {
      return sum + rental.frequentRenterPoints;
    }, 0);
  }
  
  let customer = {
    get name() { return name; },
    addRental (rental) { rentals.push(rental); },
    reduceRentals (callback, initialValue) { return rentals.reduce(callback, initialValue); },
    get totalCharge() { return getTotalCharge(); },
    get totalPoints() { return getTotalPoints(); },
    statement (Statement = BasicStatement) { return Statement(customer); }
  };
  
  return customer;
};

export { Customer };
