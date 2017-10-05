let format = require('string-template');

const applyTemplates = (customer, statementTemplate, lineItemTemplate) => {
  
  let lineItems = customer.reduceRentals((sum, rental) => {
    return sum + format(lineItemTemplate, {
      title: rental.title, 
      charge: rental.charge});
  }, '');
  
  let statement = format(statementTemplate, {
    name: customer.name,
    lineItems: lineItems,
    totalCharge: customer.totalCharge,
    totalPoints: customer.totalPoints
  });
  
  return statement;
};

const BasicStatement = (customer) => {
  const lineItemTemplate = '\t{title}\t{charge}\n';
  const statementTemplate = 
    'Rental Record for {name}\n' +
    '{lineItems}' +
    'Amount owed is {totalCharge}\n' +
    'You earned {totalPoints} frequent renter points';
  
  return applyTemplates(customer, statementTemplate, lineItemTemplate);
};

const HTMLStatement = (customer) => {
  const lineItemTemplate = '<tr><td>{title}</td><td>{charge}</td></tr>\n';
  const statementTemplate = 
    '<div><p>Rental Record for {name}</p>\n' +
    '<table>\n' + 
    '<thead><tr><th>Title</th><th>Charge</th></tr></thead>' +
    '<tbody>\n' +
    '{lineItems}' +
    '</tbody></table>\n' +
    '<p>Amount owed is {totalCharge}<br />\n' +
    'You earned {totalPoints} frequent renter points</p></div>';
  
  return applyTemplates(customer, statementTemplate, lineItemTemplate);
};

export {BasicStatement};
export {HTMLStatement};
