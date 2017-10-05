let Rental = (movie, daysRented) => {
  
  return {
    get movie() { return movie; },
    get title() { return movie.title; },
    get daysRented() { return daysRented; },
    get charge() { return movie.getCharge(daysRented); },
    get frequentRenterPoints() {
      return movie.getFrequentRenterPoints(daysRented);
    }
  };
};

export { Rental };
