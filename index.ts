console.log('Test');

type MyType = number | string;

let a: MyType = 3;
a = 42;
a = 'Paul';

let state: 'present' | 'absent';
state = 'present';
state = 'absent';

const link = document.querySelector('a');
//type guard
if (link) {
  link.href = 'https://google.com';
}

// Generic types (<T>)
const fruit: Array<string | number> = ['apples', 'pears', 'cherries'];
fruit.push('bananas');
fruit.push(3);

const statuses = ['present', 'absent'] as const;
const [s] = statuses;

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  height: number;
  weight: number;
  calculateBmi: () => string;
}

interface User extends Person {
  email: string;
  password: string;
}

interface PersonWithoutFunctionality extends Omit<Person, 'calculateBmi'> {}

const user: User = {
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

type PWOF = typeof personWoFunctionality;
type MyKeys = keyof PWOF;

let prop: keyof typeof personWoFunctionality = 'firstName';

console.log(personWoFunctionality[prop]);

// Overload function types
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: number | string, n2: number | string): number | string {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  } else if (typeof n1 === 'string' && typeof n2 === 'string') {
    return n1 + n2;
  }
  throw new Error('This function only works with strings or numbers');
}

const num = add(1, 2);
const nume = add('Paul', 'Negoescu');

type MyRecord = {
  [key: string]: string;
};

type MyGenericRecord<K extends string | number | symbol, V> = {
  [P in K]: V;
};
function myFetch<T>(
  url: string | RequestInfo,
  options?: RequestInit
): Promise<T> {
  if (typeof url === 'string') {
    return fetch(url, options).then((res) => res.json());
  }
  return fetch(url).then((res) => res.json());
}

const users = myFetch<string>('dasdas');
const users2 = myFetch<User>('dasdas');
users.then((data) => console.log(data));
users2.then((data) => console.log(data));

const arr: [{id: number, color: string}] = [{ id: 1, color: 'red' }];
function pluck(
  arr: Array<{ id: number; color: string }>,
  prop: keyof (typeof arr)[0]
) {
  return arr.map((el) => el[prop]);
}
pluck(arr, 'color');

