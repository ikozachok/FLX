const a = parseFloat(prompt('Please enter a for quadratic equation ax2 + bx + c = 0', 0));
const b = parseFloat(prompt('Please enter b for quadratic equation ax2 + bx + c = 0', 0));
const c = parseFloat(prompt('Please enter c for quadratic equation ax2 + bx + c = 0', 0));

const d = b * b - 4 * a * c;

let value1 = 'no solution';
let value2 = 'no solution';

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
  } else
if (a === 0 && b === 0 && c === 0) {
  value1 = 'any number';
  value2 = value1;
  } else
if (a === 0 && b === 0 && c !== 0) {
  value1 = 'no solution';
  value2 = value1;
  } else
if (a === 0 && b !== 0 && c !== 0) {
  value1 = - c / b;
  value2 = ' ';
  alert('x = ' + value1);
 } else
if (a !== 0 && d > 0) {
  value1 = (- b + Math.sqrt(d))/(2 * a);
  value2 = (- b - Math.sqrt(d))/(2 * a);
  } else
if (a !== 0 && d === 0) {
  value1 = (- b) / ( 2 * a );
  value2 = value1;
  } else
if (d < 0) {
  value1 = 'no solution';
}
alert('x1 = ' + value1 + ' and x2 =' + value2)