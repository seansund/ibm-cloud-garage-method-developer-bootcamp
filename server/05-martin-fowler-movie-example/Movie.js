let Movie = (title, someMovieType) => {
  let movieType = someMovieType;
  
  return {
    get title() { return title; },
    get movieType() { return movieType; },
    set movieType(newMovieType) { movieType = newMovieType; },
    getCharge(daysRented) { 
      return movieType.getCharge(daysRented); 
    },
    getFrequentRenterPoints(daysRented) { 
      return movieType.getFrequentRenterPoints(daysRented);
    }
  };
};

export {Movie};
