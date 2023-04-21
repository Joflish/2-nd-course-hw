let a = prompt(`Введите первое число`); //Задание 1
let b = prompt(`Введите второе число`);
let number = min(a, b);
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(number); 

let n = prompt(`Введите число`); //Задание 2
let comparison = even_or_odd(n);
function even_or_odd(n) {
    if(n % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
};
console.log(comparison);

let i = prompt(`Введите число`); //Задание 3.1
let sqr = sqrNubmer(i)
function sqrNubmer(i) {
    return i**2;
}
console.log(sqr);

let e = prompt(`Введите число`); //Задание 3.2
let sqr2 = sqrNubmer2(e)
function sqrNubmer2(e) {
    return e**2;
}

let age = prompt(`Введите свой возраст`);//Задание 4
function userAge(age) {
    if (age < 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if ((age > 0) && (age <= 12)) {
        console.log(`Привет, друг!`);
    }
    else {
        console.log(`Добро пожаловать!`);
    }
}

let firstNumber = prompt(`Введите первое число`); // Задание 5
let secondNumber = prompt(`Введите второе число`);
let check = twoNumbers(firstNumber, secondNumber);
function twoNumbers(firstNumber, secondNumber) {
    if ((Number(firstNumber)) && (Number(secondNumber))) {
        return firstNumber * secondNumber;
    } else {
        return `Одно или оба значения не являются числом`;
    }
}
console.log(check);

let x = prompt(`Введите число`); //Задание 6
let userSquare = square(x);
function square(x) {
    if (Number(x)) {
        return `${x} в кубе равняется ${x**3}`
    } else {
        return `Переданный параметр не является числом`
    }
}
console.log(userSquare);

let circle1 = {
	radius1: prompt(`Введите радиус первой окружности`),
}

let circle2 = {
	radius2: prompt(`Введите радиус второй окружности`),
}

let giveArea = getArea(circle1)
function getArea(circle1) {
    return  `${3.14 * circle1(radius1)**2} Площадь`
}
console.log(giveArea);

let givePerimetr = getPerimetr(circle2) 
function getPerimetr(circle2) {
    return  `${(3.14 * 2) * circle2(radius2)} Периметр`
}
console.log(givePerimetr);