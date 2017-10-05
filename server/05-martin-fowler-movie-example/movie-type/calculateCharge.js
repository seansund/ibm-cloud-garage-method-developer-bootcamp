const calculateCharge = (daysRented, baseCharge, gracePeriod, rate) => {
  let charge = baseCharge;
  if (daysRented > gracePeriod) {
    charge += (daysRented - gracePeriod) * rate;
  }
  return charge;
};

export {calculateCharge};
