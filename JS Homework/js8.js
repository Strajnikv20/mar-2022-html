// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// class user {
//     constructor(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
// }
//
// const user1 = new user(10, `Pavlo`, `Baluh`, `qwe@gmail.com`, +3806666666);
// const user2 = new user(9, `Volodya`, `Pupkin`, `asd@gmail.com`, +3807777777);
// const user3 = new user(8, `Nazar`, `Wyhopen`, `zxc@gmail.com`, +38088888888);
// const user4 = new user(7, `Ivan`, `Batig`, `rty@gmail.com`, +380345345345);
// const user5 = new user(6, `Vasya`, `Ivanov`, `fgh@gmail.com`, +38067567567);
// const user6 = new user(5, `Andrii`, `Drozd`, `vbn@gmail.com`, +380978978978);
// const user7 = new user(4, `Oleg`, `Kiva`, `uio@gmail.com`, +38089089089);
// const user8 = new user(3, `Zahar`, `Putin`, `jkl@gmail.com`, +3806456747);
// const user9 = new user(2, `Anna`, `Giga`, `mmm@gmail.com`, +380325255222);
// const user10 = new user(1, `Karina`, `loza`, `ppp@gmail.com`, +38056875688);

// let array = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// console.log(array);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterarray = (array) => array.filter(value => value.id%2==0);
// console.log(filterarray(array));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortarray = (array) =>array.sort((a,b) => a.id - b.id);
// console.log(sortarray(array));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
// const user1 = new client(10, `Pavlo`, `Baluh`, `qwe@gmail.com`, +3806666666,[`apple`,`banana`,`kokos`]);
// const user2 = new client(9, `Volodya`, `Pupkin`, `asd@gmail.com`, +3807777777,[`apple`,`banana`,`kokos`]);
// const user3 = new client(8, `Nazar`, `Wyhopen`, `zxc@gmail.com`, +38088888888,[`apple`,`banana`,`kokos`]);
// const user4 = new client(7, `Ivan`, `Batig`, `rty@gmail.com`, +380345345345,[`apple`,`banana`]);
// const user5 = new client(6, `Vasya`, `Ivanov`, `fgh@gmail.com`, +38067567567,[`apple`,`banana`]);
// const user6 = new client(5, `Andrii`, `Drozd`, `vbn@gmail.com`, +380978978978,[`apple`,`banana`]);
// const user7 = new client(4, `Oleg`, `Kiva`, `uio@gmail.com`, +38089089089,[`apple`]);
// const user8 = new client(3, `Zahar`, `Putin`, `jkl@gmail.com`, +3806456747,[`apple`]);
// const user9 = new client(2, `Anna`, `Giga`, `mmm@gmail.com`, +380325255222,[`apple`]);
// const user10 = new client(1, `Karina`, `loza`, `ppp@gmail.com`, +38056875688,[`apple`,`kokos`]);

// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortclient = (clients) => clients.sort((a,b) => a.order.length - b.order.length)
// console.log(sortclient(clients));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, producer, year, maxspeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо з швидкістю ${this.maxspeed} на год`)
//     };
//     this.info = function () {
//         for (let item in this) {
//             console.log(`${item}-${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.changeYear = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.addDriver = driver;
//     }
// }
//
//
// let newCar = new car(`lada`, `Ukraine`, 2000, 210, 1.6);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(30);
// newCar.changeYear(2100);
// newCar.addDriver('paul')
// console.log(newCar)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class car {
//     constructor(model, producer, year, maxspeed, volume,) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо з швидкістю ${this.maxspeed} на год`)
//         };
//         this.info = function () {
//             for (let item in this) {
//                 console.log(`${item}-${this[item]}`);
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed;
//         };
//         this.changeYear = function (newValue){
//             this.changeYear = newValue;
//         };
//         this.addDriver = function (driver){
//             this.addDriver = driver;
//         }
//     }
// }
//
// let newCar = new car(`lada`, `Ukraine`, 2000, 210, 1.6);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(30);
// newCar.changeYear(2100);
// newCar.addDriver('paul')
// console.log(newCar)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function cinderella(name,age,sizefoot){
//     this.name = name;
//     this.age = age;
//     this.sizefoot = sizefoot;
// }
// let array = [
//     new cinderella('Olya',21,36),
//     new cinderella('Masha',22,37),
//     new cinderella('Olesya',23,38),
//     new cinderella('Anna',24,39),
//     new cinderella('Kira',25,40),
//     new cinderella('Olena',26,35),
//     new cinderella('Diana',27,41),
//     new cinderella('Karina',28,42),
//     new cinderella('Vika',29,43),
//     new cinderella('Nastya',31,34),
//     new cinderella('Ulyana',30,44)
// ];
// function Prince(name,age,sizefoot){
//     this.name = name;
//     this.age = age;
//     this.sizefoot = sizefoot;
// }
// let newPrince = new Prince('Nazar',22,42);
//
// let find = (array,prince) =>{
//     for (const item of array) {
//         if(item.sizefoot === prince.sizefoot){
//             return `${item.name}`;
//         }
//
//     }
// }
// console.log(find(array,newPrince));
