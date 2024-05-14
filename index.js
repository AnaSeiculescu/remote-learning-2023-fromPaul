/*** Array Functions ***/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru si returneaza 
un array de numere unde toate numerele au fost adunate cu 2
*/
const strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function myMap(transformerFunc) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    res.push(transformerFunc(item, i, this));
  }
  return res;
}

Array.prototype.myMap = myMap;

console.log('Typecast: ', typeCastAndAdd(strArr));

function typeCastAndAdd(arr) {
  // const res = [];
  // for(const item of arr) {
  //   res.push(Number(item) + 2);
  // }
  // return res;

  // const res = [];
  // arr.forEach((item) => res.push(Number(item) + 2));
  // return res;

  // return arr.map((item) => Number(item) + 2);
  // return arr.myMap((item) => Number(item) + 2);

  return arr.map(Number).map((item) => item + 2);
}

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie
si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

function pluck(arr, key) {
  return arr.map((item) => item[key]);
}

console.log('Pluck: ', pluck(demoArr, 'color')); // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din 
array-ul de mai sus, aria e inaltime * latime.
*/
console.log('Calclulate area:', calculateArea(demoArr));

function calculateArea(arr) {
  return arr.map((item) => item.height * item.width);
}

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde 
elementele au aria mai mica sau egala cu 100
*/
function filterArr(arr) {
  // const res = [];
  // for(const item of arr) {
  //   if(item.height * item.width <= 100) {
  //     res.push(item);
  //   }
  // }
  // return res;
  return arr.filter((item) => item.height * item.width <= 100);
}

console.log('Filter: ', filterArr(demoArr));

/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator. 
Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze
true sau false. Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte 
in array-ul rezultat. Daca returneaza false va fi inclus.
*/

function iterator(item) {
  return item.height * item.width <= 100;
}

function reject(arr, cb) {
  return arr.filter((item) => !cb(item));
}

console.log('Reject', reject(demoArr, iterator));

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
console.log('Find Color: ', findColor(demoArr, 'red'));

function findColor(arr, color) {
  // for(const item of arr) {
  //   if(item.color === color) {
  //     return item;
  //   }
  // }
  return arr.find((item) => item.color === color);
}
/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/
console.log('Areas are Bigger: ', areasAreBigger(demoArr, 5));

function areasAreBigger(arr, area) {}

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/
console.log('At Least One: ', atLeastOneIsOfColor(demoArr, 'green'));

function atLeastOneIsOfColor(arr, color) {}

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
console.log('Sum of distances: ', sumOfDistances(demoArr));

function sumOfDistances(arr) {}

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/
console.log('Number of colors: ', noColors(demoArr));

function noColors(arr) {}

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
console.log('Unique Colors: ', uniqueColors(demoArr));

function uniqueColors(arr) {}

/*
[
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
]
*/

/*
11. Sa se inverseze doua variabile.
*/
let a = 5,
  b = 8;

console.log('A:', a, 'B:', b);

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

// console.log("Classes: ", objClasses);

const result1 = [
  { id: 1, name: 'Sandra', type: 'user', username: 'sandra' },
  { id: 2, name: 'John', type: 'admin', username: 'johnny2' },
  { id: 3, name: 'Peter', type: 'user', username: 'pete' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob' },
];

const result2 = [
  { id: 2, name: 'John', email: 'johnny@example.com' },
  { id: 4, name: 'Bobby', email: 'bobby@example.com' },
];

const props = ['id', 'name'];

function arrayIntersection(arr1, arr2, props) {}

function arrayIntersection2(arr1, arr2) {}

console.log(arrayIntersection2(result1, result2, props));
