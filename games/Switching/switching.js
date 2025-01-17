const left = document.querySelector('.left');
const right = document.querySelector('.right');
const question = document.querySelector('.question');
const switchWrapper = document.querySelector('.switchWrapper');
const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const vowel = ['И','А','О','У','Ы','Э','Я','Ё','Е','Ю'];
const numbers = '123456789';


let randomIndexNumbers = Math.floor(Math.random() * numbers.length);
let randomNumber = numbers[randomIndexNumbers];
let randomIndexAlphabet = Math.floor(Math.random() * alphabet.length);
let randomLetter = alphabet[randomIndexAlphabet];

left.textContent = ''
right.textContent = randomLetter + ' / ' + randomNumber

let mode = 'right'


switchWrapper.addEventListener("animationstart", listener, false);
switchWrapper.addEventListener("animationend", listener, false);
switchWrapper.addEventListener("animationiteration", listener, false);

function listener(e) {
    if(e.type === 'animationend') {
        switchWrapper.classList.remove('shadowOk')
        switchWrapper.classList.remove('shadowBad')
    }
}

function answer(answ) {
    if(mode === 'right') {
        if(answ === 'yes') {
            if(vowel.includes(randomLetter)) switchWrapper.classList.add('shadowOk');
            else switchWrapper.classList.add('shadowBad')
        }
        if(answ === 'no') {
            if(vowel.includes(randomLetter)) switchWrapper.classList.add('shadowBad');
            else switchWrapper.classList.add('shadowOk')
        }

        randomIndexNumbers = Math.floor(Math.random() * numbers.length);
        randomNumber = numbers[randomIndexNumbers];
        randomIndexAlphabet = Math.floor(Math.random() * alphabet.length);
        randomLetter = alphabet[randomIndexAlphabet];
        mode = 'left'
        left.style.visibility = 'visible'
        left.textContent = randomLetter + ' / ' + randomNumber
        right.style.visibility = 'hidden'
        question.textContent = 'Является ли число четным?'
        
    }
    else if(mode === 'left') {
        if(answ === 'yes') {
            if(randomNumber % 2 === 0) switchWrapper.classList.add('shadowOk');
            else switchWrapper.classList.add('shadowBad')
        }
        if(answ === 'no') {
            if(randomNumber % 2 === 0) switchWrapper.classList.add('shadowBad');
            else switchWrapper.classList.add('shadowOk')
        }
        randomIndexNumbers = Math.floor(Math.random() * numbers.length);
        randomNumber = numbers[randomIndexNumbers];
        randomIndexAlphabet = Math.floor(Math.random() * alphabet.length);
        randomLetter = alphabet[randomIndexAlphabet];
        mode = 'right'
        right.style.visibility = 'visible'
        right.textContent = randomLetter + ' / ' + randomNumber
        left.style.visibility = 'hidden'
        question.textContent = 'Является ли буква гласной?'
    }
}