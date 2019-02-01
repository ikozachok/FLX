const a = parseFloat(prompt('Please enter a for quadratic equation ax2 + bx + c = 0', 0));
const b = parseFloat(prompt('Please enter b for quadratic equation ax2 + bx + c = 0', 0));
const c = parseFloat(prompt('Please enter c for quadratic equation ax2 + bx + c = 0', 0));
const d = b * b - 4 * a * c;
console.log(d);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
}
else
if (a == 0 && b == 0 && c == 0) {
  const x1 = 'any number';
  const x2 = 'any number';
  console.log(x1);
  console.log(x2);
}
else
if(a==0 && b==0 && c!=0)
{
  const x1 = 'no solution';
  const x2 = 'no solution';
  console.log(x1);
  console.log(x2);
}
else
if (a == 0 && b != 0 && c != 0) {
  const x = - c / b;
  console.log(x);
}
else
if (a != 0 && d > 0) {
  const x1 = (- b + Math.sqrt(d))/(2 * a);
  const x2 = (- b - Math.sqrt(d))/(2 * a);
  console.log(x1);
  console.log(x2);
}
else
if (a != 0 && d == 0) {
  const x = (- b) / ( 2 * a );
  console.log(x);
}
else
if (d < 0) {
  console.log('no solution')
}
/*console.log('dsds');*/
