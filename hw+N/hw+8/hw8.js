const people = [ //Задание 1
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((x, y) => x.age - y.age);
console.log(people);


function isPositive(arr) { //Задание 2
    return arr.filter((a => a >= 0))
}

function isMale(arr2) {
    return arr2.filter(a => (a.gender == 'male'))
}

function filter(array, instr) {
    return instr(array)
};

const peopleNameAndGender = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(peopleNameAndGender, isMale));


let newDate = new Date(); //Задание 3
let timerId = setInterval(() => console.log(newDate), 3000);
setTimeout(() => {
    clearInterval(timerId);
    console.log('30секунд прошло')
  }, 30000);

console.log(timerId);


function delayForSecond(callback) { //Задание 4
    const interval = setInterval(() => {
	}, 1000);
	clearInterval(interval);
  callback();
}

delayForSecond(function () { 
  console.log('Привет, Глеб!');
})


function delayForSecond2(cb) {//Задание 5
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2(() => { 
    sayHi('Глеб')
});

