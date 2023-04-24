const numberMas = [1,5,4,10,0,3]; //Задание 1 

for ( let i = 0; i < numberMas.length; i++) {
  if (numberMas[i] === 0) break;
  console.log(numberMas[i]);
}


const numberPos = [1, 5, 4, 10, 0, 3]; //Задание 2

for (const el of numberPos) {
    if (el === 4)
    console.log(numberPos.indexOf(el));
}


let numberJoin = [1, 3, 5, 10, 20]; //Задание 3
numberJoin = numberJoin.join(' ');
console.log(numberJoin);


let arr = []; //Задание 4

for (let i = 0; i < 3; i++) {  
  let subArr = [];  

  for (let j = 0; j < 3; j++) {  
    subArr.push(1); 
  }
  arr.push(subArr);  
}
console.log(arr);


let arrAdding = [1,1,1]; //Задание 5
arrAdding.push(2,2,2);
console.log(arrAdding);


let arrSort = [9, 8, 7, 'a', 6, 5] //Задание 6
arrSort = arrSort.sort()
console.log(arrSort.pop());
console.log(arrSort);


let arrSearch = [9, 8, 7, 6, 5];    // Задание 7
let answerNumber = +prompt('Введите число от 1 до 10');
let search = arrSearch.includes(answerNumber);
console.log(search);


let arrString = 'abcdef'; //Задание 8
let arrStringReversed = arrString.split("").reverse().join("");
console.log(arrStringReversed );


let arrStart = [  //Задание 9
    [1, 2, 3],
    [4, 5, 6],
];
for (let arrIn of arrStart) {
    for (const el of arrIn) {
        console.log(el);
    }
}


let numbers = [2, 5, 1, 8, 4, 9, 3, 7, 6, 10]; //Задание 10

for (let i = 0; i < numbers.length - 1; i++) {
  let sum = numbers[i] + numbers[i + 1];
  console.log(sum);
}


function squareArray(numbers) { // Задание 11
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i]);
  }
  return result;
}



let str = String(prompt('Введите любые слова')); //Задание 12
let strMas = Array.from(str);
strMas = strMas.map((nm) => nm.lenght); 
console.log(strMas);

let string = prompt('Введите любые числа'); //Задание 13
let stringMas = Array.from(string);
strMas = stringMas.map(nm => (nm * -1));
console.log(stringMas)


