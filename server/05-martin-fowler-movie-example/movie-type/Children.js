import {calculateCharge} from './calculateCharge';

const Children = () => {
  let movieType = 2;
  
  function getCharge(daysRented) {
    return calculateCharge(daysRented, 1.5, 3, 1.5);
  }
  function getFrequentRenterPoints() {
    return 1;
  }
  
  return {
    get movieType() { return movieType; },
    getCharge,
    getFrequentRenterPoints
  };
};

const CHILDRENS = Children();

export {CHILDRENS};
