import {calculateCharge} from './calculateCharge';

const Regular = () => {
  const movieType = 0;
  
  function getCharge(daysRented) {
    return calculateCharge(daysRented, 2, 2, 1.5);
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

const REGULAR = Regular();

export {REGULAR};
