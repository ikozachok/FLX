const amount = parseFloat(prompt('Please enter price', 0));
const discount = parseFloat(prompt('Please enter discount', 0));

if (amount >= 0 && amount <= 9999999 && discount <= 99 && discount >= 0) {
  const total = Math.round(amount * (1 - discount/100) * 100)/100;
  const saved = Math.round((amount - total)*100)/100;
  alert(
    'Price without discount: ' + amount + '\r\n' +
    'Discount: ' + discount + '%\r\n' +
    'Price with discount: ' + total + '\r\n' +
    'Saved: ' + saved
  );
} else {
  alert('Invalid input data');
}