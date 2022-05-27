// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let elementById = document.getElementById(`main_header`);
// elementById.className = `Hello Okten`;
// b) робить шириниу елементу ul 400px
// let elementsByName = document.getElementsByTagName(`ul`)
// for (const elementsByNameElement of elementsByName) {
//     elementsByNameElement.style.width = `400px`
// }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassName = document.getElementsByClassName(`linkList`);
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByNameElement.style.width = `50%`;
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let className = document.getElementsByClassName(`listElement2`);
// for (const classNameElement of className) {
//     console.log(classNameElement.innerText)
// }
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementsByTagName = document.getElementsByTagName(`li`);
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = `silver`;
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let name = document.getElementsByTagName(`a`);
// for (const nameElement of name) {
//     nameElement.className = `anchor`
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let name = document.getElementsByTagName(`a`);
// for (const nameElement of name) {
//     if (nameElement.innerText === `link3`){
//         nameElement.style.fontSize = `40px`
//     }
//
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let byTagName = document.getElementsByTagName(`a`);
// for (const byTagNameElement of byTagName) {
//     byTagNameElement.classList.add(`element_${byTagNameElement.innerText}`)
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let p = prompt(`Change color`);
// let name = document.getElementsByClassName(`sub-header`);
// for (const nameElement of name) {
//     nameElement.style.background = p;
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let kolir = prompt(`Вибери колір`)
// let className = document.getElementsByClassName(`sub-header`);
// for (const classNameElement of className) {
//     if (classNameElement.innerText === `content 2 segment`) {
//         classNameElement.style.color = color;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let naz = prompt(`Введіть текст`);
// let name = document.getElementsByClassName(`content_1`);
// for (const nameElement of name) {
//     nameElement.innerText = naz
// }
// l) отримати елементи p та змінити їм padding на 20px
// let name = document.getElementsByTagName(`p`);
// for (const nameElement of name) {
//     document.style.padding = `20px`
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let name = document.getElementsByClassName(`text2`);
// for (const nameElement of name) {
//     nameElement.innerText = `march - 2022`
// }