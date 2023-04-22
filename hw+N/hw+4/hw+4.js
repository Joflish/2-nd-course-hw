let i = 0; //Задание 1
while (i < 2) {
    console.log(`Привет`);
    i++;
}

let number = 1; //Задание 2
while (number < 6) {
    console.log(number);
    number++;
}

let a = 7; //Задание 3
while (a <= 22) {
    console.log(a);
    a++;
}

const user = { // Задание 4
	Kolya: 200,
	Vasya: 300,
	Petya: 400, 
};
for (key in user) { 
        console.log(`Зарплата ${key} ${user[key]} долларов`);
}

let num = 0; // задание 5
for (let n = 1000; n>=50; n = n / 2) {
    console.log(n); console.log(num++); 
}

let friday = 6; 
for(let friday = 6; friday <=31; friday = friday + 7) 
console.log(`Сегодня пятница, ${friday} - е число. Необходимо подготовить отчет`);
