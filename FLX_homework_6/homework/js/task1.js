const a = parseFloat(prompt('Please enter a for quadratic equation ax2 + bx + c = 0', 0));
const b = parseFloat(prompt('Please enter b for quadratic equation ax2 + bx + c = 0', 0));
const c = parseFloat(prompt('Please enter c for quadratic equation ax2 + bx + c = 0', 0));

const d = b * b - 4 * a * c;

if (a !== 0 && d === 0) {
  const value = (- b) / ( 2 * a );
  alert('x = ' + value);
  } else
if (a !== 0 && d > 0) {
  const value1 = (- b + Math.sqrt(d))/(2 * a);
  const value2 = (- b - Math.sqrt(d))/(2 * a);
  alert('x1 = ' + value1 + ' and x2 =' + value2);
  } else
if (d < 0) {
  alert('no solution');
} else {
  alert('Invalid input data');
}
