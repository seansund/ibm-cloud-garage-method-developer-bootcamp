import {calculateCharge} from './calculateCharge';

const NewRelease = () => {
  const movieType = 1;
  
  function getCharge(daysRented) {
    return calculateCharge(daysRented, 0, 0, 3);
  }
  function getFrequentRenterPoints(daysRented) {
    if (daysRented > 1) return 2;
    return 1;
  }
  
  return {
    get movieType() { return movieType; },
    getCharge,
    getFrequentRenterPoints
  };
};

const NEW_RELEASE = NewRelease();

export {NEW_RELEASE};
