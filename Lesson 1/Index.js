// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let str1 = 'Hello';
console.log(str1);

let str2 = 'owu';
console.log(str2);

let str3 = 'com';
console.log(str3);

let str4 = 'ua';
console.log(str4);

let num1 = 1;
console.log(num1);

let num2 = 10;
console.log(num2);

let num3 = -999;
console.log(num3);

const Pi = 3.14;
console.log(Pi);

let num4 = 2.7;
console.log(num4);

let num5 = 16;
console.log(num5);

let boolT = true;
console.log(boolT);

let boolF = false;
console.log(boolF);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Tetiana';
let middleName = 'Oleksandrivna';
let lastName = 'Khitushka';

let person = `${firstName} ${middleName} ${lastName}`
console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Вкажіть Ваше імя', '');
let secondName = prompt('Вкажіть Ваше по-батькові', '');
let age = prompt('Вкажіть Ваш вік', '');

console.log(`${name} ${secondName} - ${age}`);
