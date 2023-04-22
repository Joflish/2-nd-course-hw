let a = Number (20); //Задание 1
alert(a);

const year = Number (2007); //Задание 2
alert(`Первый iphone вышел в продажу ${year} года`);

const creator = String `Брендан Эйх`; //Задание 3
alert(`Создателем Java Script является ${creator}`);

let x = Number (10); //Задание 4
let y = Number (2);
alert(`Cложение ${x+y} \nВычитание ${x-y} \nУмножение ${x*y} \nДеление ${x/y}`);

let result = 2**5; //Задание 5
alert(result);

let u = 9; //Задание 6
let b = 2;
alert(`Остаток от деления = ${u%b}`);

let num = 1; //Задание 7
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num--;
num = num--;
alert(num);

let age = prompt(`Сколько вам лет?`); //Задание 8
alert(age);

const user =  { // Задание 9
        name: `Matvei`,
        age: 19,
        isAdmin: true,
}

    user[`city of residence`] = `Perm`;
user.age = 20;
delete user[`city of residence`]
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user[info]);

let question = prompt(`Как вас зовут?`); //Задание 10
alert(`Привет, ${question}!`);
