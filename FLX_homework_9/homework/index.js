const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes () {
  const types = [];
  for (let i = 0; i < arguments.length; i++){
    types.push(typeof arguments[i]);
  }
  return types;
}
console.log(findTypes());
console.log(findTypes(1, '4564', []));
console.log(findTypes(null, undefined));

function executeforEach (arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newEl = func(arr[i]);
    if (typeof newEl === 'boolean') {
      if (newEl) {
        newArr.push(arr[i]);
      }
    } else {
        newArr.push(newEl);
    }
  }
  return newArr;
}
executeforEach([1,2,3], function(el) {
 console.log(el) 
});

function mapArray(arr, func) {
  return executeforEach(arr, func);
}
mapArray([2, 5, 8], function(el) {
 return el + 3 
})
console.log(mapArray([2, 5, 8], function(el) {
 return el + 3 
}))

function filterArray(arr, func) {
  return executeforEach(arr, func);
}
console.log('filter', filterArray([2, 5, 8], function(el) {
 return el > 3 
}))

function getAmountOfAdultPeople(data) {
  const filteredData = filterArray(data, (el) => el.age > 18);
  return filteredData.length;
}
console.log(getAmountOfAdultPeople(data))

function getGreenAdultBananaLovers(data) {
  const filteredData = filterArray(data, (el) =>
  el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green');
  return mapArray(filteredData, (el) => el.name);
}
console.log(getGreenAdultBananaLovers(data))

function keys(data) {
  const arr = [];
  for (let key in data) {
    if (data[key]) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}))

function values(data) {
  const arr = [];
  for (let key in data) {
    if (data[key]) {
      arr.push(data[key]);
    }
  }
  return arr;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}))

function showFormattedDate(date) {
  const monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = monthes[date.getMonth()];
  const year = date.getFullYear();

  return `Date: ${day} of ${month}, ${year}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))

function isEvenYear (date) {
  const year = date.getFullYear();
  return year % 2 === 0;
}
console.log(isEvenYear(new Date('2019-02-27T01:10:00')))
console.log(isEvenYear(new Date('2018-02-27T01:10:00')))

function isEvenMonth(date) {
  const month = date.getMonth();
  return month % 2 !== 0;
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')))
console.log(isEvenMonth(new Date('2016-03-27T01:10:00')))