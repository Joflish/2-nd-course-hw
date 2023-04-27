let taskFo = game();
function game() {
    let arrayWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrayWord = arrayWord.sort(() => Math.random() - 0.5);
    alert(arrayWord);
    let userAnswerFirst = prompt('Чему равнялся первый элемент массива?');
    let userAnswerSecond = prompt('Чему равнялся последний элемент массива?');

if ((userAnswerFirst === arrayWord[0]) && (userAnswerSecond === arrayWord[arrayWord.length - 1])) {
    alert('Поздравляем! Вы угадали оба элемента');
} else if ((userAnswerFirst === arrayWord[0]) || (userAnswerSecond === arrayWord[arrayWord.length - 1])) {
    alert('«Вы были близки к победе!»');
}
else {
    alert('Вы ничего не угадали');
}
}