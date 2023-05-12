let str = 'js'; // Задание 1
console.log(str.toUpperCase());


function animals(a) // Задание 2
{
const search = 'ко';
let arr = [];
a.forEach((a) => {
 if (a.toLowerCase().startsWith(search.toLowerCase())) arr.push(a); 
 
});console.log(arr);}; animals(['Кошка', 'Кит', 'Комар', 'Носорог']);


let minRounding = Math.floor(32.58884); // Задание 3.1
let maxRouding = Math.ceil(32.58884); // Задание 3.2
let nextRouding = Math.round(32.58884); // Задание 3.3
console.log(minRounding, maxRouding, nextRouding);


let arrNumbers = [52, 53, 49, 77, 21, 32]; // Задание 4
console.log("Min:", Math.min(...arrNumbers));
console.log("Max:", Math.max(...arrNumbers));


let random =  Math.floor(Math.random() * 10); //Задание 5
console.log(random);
   

let taskSix = getRandomArrNubmers(12); //Задание 6
function getRandomArrNubmers(num) {
	let userArray = [];
	for (let i = 0; i < num / 2; i++) {
		userArray.push(Math.floor(Math.random() * Math.floor(num)));
	}
	return userArray;
}
console.log(taskSix);



let number1 = prompt('Введите первое число'); //Задание 7
let number2 = prompt('Введите второе число');
let taskSeven =  randomOfTwo(number1, number2)
function randomOfTwo(number1, number2) {
	return (Math.round(Math.random() * (number1 - number2) + number2));
}
console.log(taskSeven);


let newDate = new Date(); //Задание 8
console.log(newDate);

let currentDate = new Date(); //Задание 9
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]; //Задание 10
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", это " + days[myDate.getDay()] + 
" " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(fullDate); 
