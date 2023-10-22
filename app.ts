// Задайте правильні ts типи для класичних js;

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
age = 50;
 
let personName: string;
personName = 'Max';
 
let toggle: boolean;
toggle = true;

let empty: null;
 empty = null;

let notInitialize: undefined;
 notInitialize = undefined;

let callback: (a: number)=> number;
callback = (a) => { return 100 + a };
 
//------------------------------------------
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.

// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any;
anything = "text";
anything = -20;
anything = {};

//------------------------------------------
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

// let some:unknown;
// some = 'Text';

// let str: string;

// str = some;

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === "string") {
  str = some;
}

//------------------------------------------
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

// let person = ['Max', 21];

let person: [string, number];

person = ['Max', 21];


//------------------------------------------
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum Load { LOADING, READY }

const page= {
  load: Load.READY,
}

if (page.load === Load.LOADING) {
  console.log("Page loading..")
}
if (page.load === Load.READY) {
  console.log("Page is ready..")
}

// Зробіть змінну, яка може приймати або рядок, або число.

let union: number | string;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let literal: "enable" | "disable";

// Вкажіть типи для наступних функцій

// function showMessage(message) {
//   console.log(message);
// }


// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


//------------------------------------------
// Створіть свій тип даних на основі наявних даних.

// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close'; 
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}





