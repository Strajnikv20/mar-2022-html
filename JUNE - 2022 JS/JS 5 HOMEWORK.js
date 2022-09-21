
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a, b) {
    let sum = a * b;
    return sum
}

console.log(area(10, 23));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(a, b) {
    let sum1 = a * 3.14 * b;
    return sum1;
}

console.log(areaCircle(13, 545));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    let sum2 = h * r + h * 2
    return sum2
}

console.log(areaCylinder(123, 321));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [11, 22, 44, 55, 33, 55, 66, 77, 678, 452, 12313]

function arr1(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

arr1(array);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(sometext) {
    document.write(`<ul>
        <li>${sometext}</li>
        <li>${sometext}</li>
        <li>${sometext}</li>
    </ul>`)
}

ulCreator(`I LOVE ARTHAS`)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphCreator(text) {
    document.write(`<h1><p>${text}</p></h1>`)
}

paragraphCreator(`Дота ета мая жизнь`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function loopCreator(a, b) {
    for (let i = 0; i < b; i++) {
        document.write(`<ul>
            <h1><li>${a}</li></h1>
        </ul>`)
    }
}

loopCreator(`Каракос-Каракас,Артас - Підарас`, 1);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1488, 1007, `Vitaliy`, `Gromyako`, true, false]

function arrayReturner(array) {
    for (const item of array) {
        document.write(`<h1>${item}</h1>`)
    }
}

arrayReturner(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayWithObjects = [
    {id: 1, name: `Nazar Wyhopen`, age: 23},
    {id: 2, name: `Paul Baluh`, age: 22},
    {id: 3, name: `Vitaliy Tsal'`, age: 31}
]

function objectsReturner(array) {
    for (const arrayWithObject of arrayWithObjects) {
        document.write(`<div><h1>${arrayWithObject.name} ${arrayWithObject.age} ${arrayWithObject.id}</h1></div>`)
    }
}

objectsReturner(arrayWithObjects);
// - створити функцію яка повертає найменьше число з масиву

let arrayNumbers = [123, 45345, -131, 0, 123123, 456456, 123123, 0, -1488]

function minReturner(array) {
    let result = arrayNumbers[0]
    for (const arrayNumber of arrayNumbers) {
        if (result > arrayNumber) {
            result = arrayNumber
        }
    }
    return result
}

document.write(minReturner(arrayNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


let arrayNumbers1 = [123, 45345, -131, 0, 123123, 456456, 123123, 0, -1488]

function sumReturner(array) {
    let sum1 = 0;
    for (const number of arrayNumbers1) {
        number += sum1
    }
    return sum1
}
console.log(sumReturner(arrayNumbers1)); ??????????????????????????????????????????????













