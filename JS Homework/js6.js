// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
// let fn = (array) => {
//     let sum = 0;
//     for (let item of mass) {
//         sum = sum + item;
//     }
//     return sum/mass.length;
// }
// document.write(fn(mass));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let foo = (...num) => {
//     let min = num[0];
//     let max = num[0];
//     for (let item of num) {
//         if (item < min) {
//             min = item
//         }
//         if (item > max) {
//             max = item
//         }
//
//     }
//     document.write(max);
//     return min;
// }
// document.write(foo(2, 3, 4, 5, 6, 7));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let mass = [];
// let fn = (mass) => {
//     for (let i = 0; i < 10; i++) {
//         let result = (Math.round(Math.random(0) * 100));
//         mass[i] = result;
//     }
// }
// fn(mass);
// console.log(mass);
// - ст0 дворити функцію яка заповнює масив рандомними числами в діапазоні від о limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = [];
// let foo = (a, limit) => {
//     for (let i = 0; i < limit; i++) {
//         let result = (Math.round(Math.random(a) * limit));
//         array[i] = result;
//     }
// }
// foo(0,10);
// console.log(array);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let naz = [1, 2, 3];
// let paul = [];
// let foo = (naz) => {
//     for (var i = naz.length - 1; i >= 0; i--) {
//         paul.push(naz[i]);
//     }
// }
// console.log(paul);
// foo(naz);
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let plocha = (a, b) => {
//     let result = (a * b);
//     return result;
// }
// let answer = plocha(15, 20);
// document.write(answer);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let kolo = (r) => {
//     let result = 3.14 * (r) * 2;
//     return result;
// }
// let qwe = kolo(50);
// document.write(qwe)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let radius = (h, r) => {
//     let result = (2 * 3.14 * r) + (2 * 3.14 * r * h)
//     return result;
// }
// let asd = radius(45, 80);
// document.write(asd);
// // - створити функцію яка приймає масив та виводить кожен його елемент
// let a = (array) => {
//     for (let item of array) {
//         document.write(item);
//
//     }
// }
// let skills = [`java`, ` `, `js`, ` `, `react`, ` `, `html`];
// a(skills)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = (a) => {
//     document.write(a)
// }
// text(`<h1>Some text</h1>`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let lijka = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// lijka(`Some text1`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let naz = (a, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// naz(`some text2`, 20);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let  qwe = (array) => {
// document.write(`<ul>`)
//
// document.write(`<li>${array[0]}</li>`)
// document.write(`<li>${array[1]}</li>`)
// document.write(`<li>${array[2]}</li>`)
// document.write(`<li>${array[3]}</li>`)
// document.write(`<li>${array[4]}</li>`)
//
// document.write(`</ul>`)
// }
// let array = [47, `text`, true, false,322];
// qwe(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let mass = (array) => {
//     document.write(`<div>${array[0].id}</div>`)
//     document.write(`<div>${array[0].name}</div>`)
//     document.write(`<div>${array[0].age}</div>`)
//     document.write(`<div>${array[1].id}</div>`)
//     document.write(`<div>${array[1].name}</div>`)
//     document.write(`<div>${array[1].age}</div>`)
//     document.write(`<div>${array[2].id}</div>`)
//     document.write(`<div>${array[2].name}</div>`)
//     document.write(`<div>${array[2].age}</div>`)
// }
// let array = [
//     {id: `qwe`, name: `naz`, age: 23},
//     {id: `asd`, name: `paul`, age: 22},
//     {id: `zxc`, name: `vova`, age: 22},
// ];
// mass(array);
// - створити функцію яка повертає найменьше число з масиву
// let array = [1, 2, 3, 4, 5];
//
// let min = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//
//     }
//     return min;
// }
// document.write(min(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let foo = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// document.write(foo(arr))

// let myarray = [
//     {id: `one`},
//     {id: `two`},
// ];
//
// let foo = (myarray) => {
//     let first = myarray[0];
//     myarray[0] = myarray[1];
//     myarray[1] = first;
// }
// foo(myarray);
// console.log(myarray);
