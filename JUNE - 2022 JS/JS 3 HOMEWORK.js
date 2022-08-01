// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


// let x = +prompt("x dorivnye 0?")
// if (x != 0) {
//     console.log(`VIRNO`)
// } else if (x == 0) {
//     console.log(`NE VIRNO`)
// }


// let clock = +prompt(`Yaka chetvert?`)
// if (clock <= 15 && clock >= 0) {
//     console.log(`1st`)
// } else if (clock <= 30 && clock >= 15) {
//     console.log(`2st`)
// } else if (clock <= 45 && clock >= 30) {
//     console.log(`3st`)
// } else if (clock <= 59 && clock >= 45) {
//     console.log(`4st`)
// }


// let day = +prompt(`Yaka zaraz dekada`)
// if (day >= 0 && day <= 10) {
//     console.log(`1st`)
// } else if (day >= 10 && day <= 20) {
//     console.log(`2st`)
// }else if (day >= 20 && day <= 31){
//     console.log(`3st`)}



// let plan = prompt('Розклад тижня');
// switch (plan) {
//     case "Monday":
//         console.log('working');
//         break;
//     case "Tuesday":
//         console.log('lection and working');
//         break;
//     case "Wednesday":
//         console.log('working again');
//         break;
//     case "Thursday":
//         console.log('homework and working');
//         break;
//     case "Friday":
//         console.log('working again again');
//         break;
//     case "Saturday":
//         console.log('styding english');
//         break;
//     case "Sunday":
//         console.log('weekend ');
//         break;
//     default:
//         console.log("???")
// }

//
// let user1 = prompt('Введіть число 1')
// let user2 = prompt('Введіть число 2')
// if (user1 > user2) console.log(user1)
// else if (user2 > user1) console.log(user2)
// else if (user2 == user1) console.log('WTF???')

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = undefined
x = (x || "default");
console.log(x);

Тобто ми підставляєм любе falsy-значення і консолиться default
