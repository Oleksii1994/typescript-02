// Задайте правильні ts типи для класичних js;
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
var age;
age = 50;
var personName;
personName = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
//------------------------------------------
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
// let anything = -20;
// anything = 'Text';
// anything = {};
var anything;
anything = "text";
anything = -20;
anything = {};
//------------------------------------------
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
var some;
some = 'Text';
var str;
if (typeof some === "string") {
    str = some;
}
//------------------------------------------
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
// let person = ['Max', 21];
var person;
person = ['Max', 21];
//------------------------------------------
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log("Page loading..");
}
if (page.load === Load.READY) {
    console.log("Page is ready..");
}
// Зробіть змінну, яка може приймати або рядок, або число.
var union;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var literal;
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
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
