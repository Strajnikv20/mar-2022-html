// - Є змінна a, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
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


// let a = prompt("а дорівнює 0?")
// if (a != 0) {
//     console.log('ВІРНО')
// } else if (a == 0) {
//     console.log('НЕВІРНО')
// }


// let time = prompt('До якої чверті попадає число?')
// if (time <= 15 && time >= 0) {
//     console.log('1st')
// } else if (time <= 30 && time >= 15) {
//     console.log('2st')
// } else if (time <= 45 && time >= 30) {
//     console.log('3st')
// } else if (time <= 59 && time >= 45) {
//     console.log('4st')}
//
//


// let day = prompt('У яку декаду попадає це число?')
// if (day <= 10 && day >= 0) {
//     console.log('1st dekada')
// } else if (day <= 20 && day >= 10) {
//     console.log('2st dekada')
// } else if (day <= 31 && day >= 20) {
//     console.log('3st dekada')
// }


//
// let rozklad = prompt('Розклад тижня');
// switch (rozklad) {
//     case "Monday":
//         console.log('studyng');
//         break;
//     case "Tuesday":
//         console.log('homework');
//         break;
//     case "Wednesday":
//         console.log('studyng again');
//         break;
//     case "Thursday":
//         console.log('homework again');
//         break;
//     case "Friday":
//         console.log('weekend');
//         break;
//     case "Saturday":
//         console.log('styding english');
//         break;
//     case "Sunday":
//         console.log('weekend again');
//         break;
//     default:
//         console.log("WTF???")
// }


// let user1 = prompt('Введіть число 1')
// let user2 = prompt('Введіть число 2')
// if (user1 > user2) console.log(user1)
// else if (user2 > user1) console.log(user2)
// else if (user2 == user1) console.log('WTF???')