import {Customer} from './Customer';
import {Movie} from './Movie';
import {Rental} from './Rental';
import {REGULAR} from './movie-type/Regular';
import {NEW_RELEASE} from './movie-type/NewRelease';
import {CHILDRENS} from './movie-type/Children';
import {HTMLStatement} from './Statement';

describe('martin fowler\'s movie refactoring example', () => {
  const DAYS_RENTED_IS_1 = 1;
  const DAYS_RENTED_IS_2 = 2;
  const DAYS_RENTED_IS_3 = 3;

  let customer;

  let childrens1;
  let childrens2;
  let childrens3;

  let newRelease1;
  let newRelease2;
  let newRelease3;

  let regular1;
  let regular2;
  let regular3;

  beforeEach( () => {
    customer = Customer('Dummy Customer, Jr.');

    childrens1 = Movie('Childrens1', CHILDRENS);
    childrens2 = Movie('Childrens2', CHILDRENS);
    childrens3 = Movie('Childrens3', CHILDRENS);

    newRelease1 = Movie('New Release1', NEW_RELEASE);
    newRelease2 = Movie('New Release2', NEW_RELEASE);
    newRelease3 = Movie('New Release3', NEW_RELEASE);

    regular1 = Movie('Regular1', REGULAR);
    regular2 = Movie('Regular2', REGULAR);
    regular3 = Movie('Regular3', REGULAR);
  });

  it('Basic Statement', () => {
    let expected = 'Rental Record for Dummy Customer, Jr.\n' +
        '\tChildrens1\t1.5\n' +
        '\tChildrens2\t1.5\n' +
        '\tChildrens3\t1.5\n' +
        '\tRegular1\t2\n' +
        '\tRegular2\t2\n' +
        '\tRegular3\t3.5\n' +
        '\tNew Release1\t3\n' +
        '\tNew Release2\t6\n' +
        '\tNew Release3\t9\n' +
        'Amount owed is 30\n' +
        'You earned 11 frequent renter points';

    customer.addRental(Rental(childrens1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(childrens2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(childrens3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(regular1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(regular2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(regular3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(newRelease1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(newRelease2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(newRelease3, DAYS_RENTED_IS_3));

    (expected).should.equal(customer.statement());
  });

  it('HTMLStatement', () => {
    let expected = '<div><p>Rental Record for Dummy Customer, Jr.</p>\n' +
    '<table>\n' +
    '<thead><tr><th>Title</th><th>Charge</th></tr></thead><tbody>\n' +
    '<tr><td>Childrens1</td><td>1.5</td></tr>\n' +
    '<tr><td>Childrens2</td><td>1.5</td></tr>\n' +
    '<tr><td>Childrens3</td><td>1.5</td></tr>\n' +
    '<tr><td>Regular1</td><td>2</td></tr>\n' +
    '<tr><td>Regular2</td><td>2</td></tr>\n' +
    '<tr><td>Regular3</td><td>3.5</td></tr>\n' +
    '<tr><td>New Release1</td><td>3</td></tr>\n' +
    '<tr><td>New Release2</td><td>6</td></tr>\n' +
    '<tr><td>New Release3</td><td>9</td></tr>\n' +
    '</tbody></table>\n' +
    '<p>Amount owed is 30<br />\n' +
    'You earned 11 frequent renter points</p></div>';

    customer.addRental(Rental(childrens1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(childrens2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(childrens3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(regular1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(regular2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(regular3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(newRelease1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(newRelease2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(newRelease3, DAYS_RENTED_IS_3));

    (expected).should.equal(customer.statement(HTMLStatement));
  });
});
