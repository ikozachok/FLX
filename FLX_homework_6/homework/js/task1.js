const a = parseFloat(prompt('Please enter a for quadratic equation ax2 + bx + c = 0', 0));
const b = parseFloat(prompt('Please enter b for quadratic equation ax2 + bx + c = 0', 0));
const c = parseFloat(prompt('Please enter c for quadratic equation ax2 + bx + c = 0', 0));

if (a || b || c <= 0) {
  alert('Invalid input data')
}

console.log('dsds');
/*
const a = parseFloat(prompt('Enter a length', 0));
const b = parseFloat(prompt('Enter b length', 0));
const degrees = parseFloat(prompt('Enter α- angle', 0));
const halfCircle = 180;
const radians = degrees * Math.PI / halfCircle;

if (a >= 0) {
  const c = Math.round(Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(radians)) * 100)/100;
  const square = Math.round(a * b * Math.sin(radians)/2*100)/100;
  const perimeter = Math.round((a + b + c)*100)/100;
  console.log(
    'c length: ' + c + '\r\n' +
    'Triangle square: ' + square + '\r\n' +
    'Triangle perimeter: ' + perimeter + '\r\n'
  );
} else {
  console.log('Invalid data');
}
*/