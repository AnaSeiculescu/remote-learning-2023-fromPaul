"use strict";
console.log('Test');
let a = 3;
a = 42;
a = 'Paul';
let state;
state = 'present';
state = 'absent';
const link = document.querySelector('a');
if (link) {
    link.href = 'https://google.com';
}
const fruit = ['apples', 'pears', 'cherries'];
fruit.push('bananas');
fruit.push(3);
const statuses = ['present', 'absent'];
const [s] = statuses;
const user = {
    email: 'paul.negoescu@nagarro.com',
    password: 'parola',
    firstName: 'Paul',
    lastName: 'Negoescu',
    height: 1.85,
    weight: 100,
    calculateBmi() {
        return (this.weight / this.height ** 2).toFixed(2);
    },
};
const personWoFunctionality = {
    firstName: '',
    lastName: '',
    height: 1,
    weight: 1,
    age: 3,
};
let prop = 'firstName';
console.log(personWoFunctionality[prop]);
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + n2;
    }
    throw new Error('This function only works with strings or numbers');
}
const num = add(1, 2);
const nume = add('Paul', 'Negoescu');
function myFetch(url, options) {
    if (typeof url === 'string') {
        return fetch(url, options).then((res) => res.json());
    }
    return fetch(url).then((res) => res.json());
}
const users = myFetch('dasdas');
const users2 = myFetch('dasdas');
users.then((data) => console.log(data));
users2.then((data) => console.log(data));
const arr = [{ id: 1, color: 'red' }];
function pluck(arr, prop) {
    return arr.map((el) => el[prop]);
}
pluck(arr, 'color');
