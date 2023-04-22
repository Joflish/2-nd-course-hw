let password = 'пароль'; //задание 1
let data = prompt(`Введите пароль`);
if (data === 'пароль') {
    console.log('Пароль верный');
}

else {  
    console.log('Пароль неверный');
}
    
let u = prompt(`Введите число`); // задание 2
if (u > 0 && u < 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

let e = prompt(`Введите первое число`); // задание 3
let c = prompt(`Введите второе число`);
if (e > 100 || c > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

let a = '2'; //задание 4
let b = '3';
console.log(Number(a) + Number(b));

let monthNumber = String(prompt(`Введите номер месяца`)) //5 задание
switch (monthNumber) {
 case `1`:
 console.log(`Зима`);
 break;
 case `2`:
 console.log(`Зима`);
 break;
 case `3`:
 console.log(`Весна`);
 break;
 case `4`:
 console.log(`Весна`);
 break;
 case `5`:
 console.log(`Весна`);
 break;
 case `6`:
 console.log(`Лето`);
 break;
 case `7`:
 console.log(`Лето`);
 break;
 case `8`:
 console.log(`Лето`);
 break;
 case `9`:
 console.log(`Осень`);
 break;
 case `10`:
 console.log(`Осень`);
 break;
 case `11`:
 console.log(`Осень`);
 break;
 case `12`:
 console.log(`Зима`);
 break;

 default:
  console.log(`Ввел что-то не то`);
   break;
}

let number = prompt(`Введите любое число`); //Задание 7
if (number < 0 || number > 0) {
    console.log(number);
} else {
    console.log(`NaN`);
}
if (number % 2 === 0) {
    console.log(`Число четное`);
} else {
    console.log(`Число нечетное`);
}

let clientOS = prompt(`Какая у вас операционная система?`);
if (clientOS === `Android`) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else if (clientOS === `IOS`) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} else {
    console.log(`К сожалению для данной ОС у нас нет приложения`);
}



