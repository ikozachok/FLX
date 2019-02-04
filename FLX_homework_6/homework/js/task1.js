const a = parseFloat(prompt('Please enter a for quadratic equation ax2 + bx + c = 0', 0));
const b = parseFloat(prompt('Please enter b for quadratic equation ax2 + bx + c = 0', 0));
const c = parseFloat(prompt('Please enter c for quadratic equation ax2 + bx + c = 0', 0));

const d = b * b - 4 * a * c;

let x1 = 'no solution';
let x2 = 'no solution';

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
  } else
if (a === 0 && b === 0 && c === 0) {
  x1 = 'any number';
  x2 = 'any number';
  } else
if (a === 0 && b ===0 && c !== 0) {
  x1 = 'no solution';
  x2 = 'no solution';
  } else
if (a === 0 && b !== 0 && c !== 0) {
  x1 = - c / b;
  x2 = x1;
 } else
if (a !== 0 && d > 0) {
  x1 = (- b + Math.sqrt(d))/(2 * a);
  x2 = (- b - Math.sqrt(d))/(2 * a);
  } else
if (a !== 0 && d === 0) {
  x1 = (- b) / ( 2 * a );
  x2 = x1;
  } else
if (d < 0) {
  x1 = 'no solution';
  x2 = 'no solution';
}
alert(x1, x2)