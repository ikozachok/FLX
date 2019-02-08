function pipe(){
  let addOne = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] = addOne)
    addOne += arguments[0];
  }
  return addOne;
  //for()  1 -> argumnents.length
  // a = agruments[i](a)
}

function addOne(x) {
  return x + 1;
}
