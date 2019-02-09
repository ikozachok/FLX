function isInteger(x) {
  return (x ^ 0) === x;
}

isInteger(5);
isInteger(5.1);