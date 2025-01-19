
let mode = 'games'
function openPage(page) {
    console.log("PAGE -", page)
    mode = page
    let el = document.getElementsByTagName('section')
    for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'none'
    }
    document.getElementById(page).style.display = 'block'
    if(mode === "memory") {
        const memoryWrapper = document.querySelector('.memoryDiv');
        for(i=0; i < 9; i++) {
            const block = document.createElement('div');
            block.id = i
            block.addEventListener('click', () => clickBlock(block))
            memoryWrapper.append(block)
        }
        const child = memoryWrapper.children;
        // const btRotate = document.querySelector('.mem');
        // const text = document.querySelector('.text')
        const scoreHTML = document.querySelector('.score')
        let score = 0;
        let result
    
        let countSuccess = 0;
    
        function clickBlock (block) {
            if(result.includes(Number(block.id))) {
                block.style.backgroundColor = '#00CC99'
                countSuccess+=1;
                console.log('count - ', countSuccess)
                if(countSuccess === 3) {
                    score++;
                    scoreHTML.textContent = `${
                        score
                    } ОЧКОВ`;
                    countSuccess = 0;
                    generate();
                }
            }
        
            else {
                score--;
                    scoreHTML.textContent = `${
                        score
                    } ОЧКОВ`;
                countSuccess = 0;
                for(i = 0; i < child.length; i++){
                    child[i].style.backgroundColor = 'darkgray'
                }
                generate()
            }
        }
    
        rotateBlocks = () => {
            const rand = Math.floor(Math.random() * 2);
            if(rand === 1) {
                memoryWrapper.style.transition = 'all 0.5s ease';
                memoryWrapper.style.transform = `rotate(${this.d = (this.d | 0) + 90}deg)`;
            }
            else {
                memoryWrapper.style.transition = 'all 0.5s ease';
                memoryWrapper.style.transform = `rotate(${this.d = (this.d | 0) - 90}deg)`;
            }
    
            for(i = 0; i < child.length; i++){
                child[i].style.backgroundColor = 'darkgray'
            }
        }
    
        generate = () => {
            for(i = 0; i < child.length; i++) 
                child[i].style.backgroundColor = 'darkgray'
            
            const values = [...Array(9)].map((_, i) => i);
            result = [...Array(3)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
            console.log('result - ', result)
            result.map((i) => child[i].style.backgroundColor = '#00CC99')
        }
        generate()

    }
    if(mode === "aim") {
        /*  AIM ZONE  */
        const colorList = [
    '#9933FF',
    '#6633FF',
    '#00CCFF',
    '#00CC99',
    '#FF0066',
    '#FF6666',
    '#FF6600',
        ];
        const CIRCLE_RADIUS = 40;
        function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
        }

        let timerStart, timerEnd;
        let isFirst = true;

        let averageArr = [];

        function timer() {
    if (isFirst) {
        timerStart = new Date().valueOf();
        isFirst = false;
    } else {
        timerEnd = new Date().valueOf();
        document.querySelector('.seconds').textContent = `${
            timerEnd - timerStart
        } ms`;
        averageArr.push(timerEnd - timerStart);
        timerStart = new Date().valueOf();
    }
        }

        function showAverage() {
    document.querySelector('.average').textContent = `${Math.floor(
        averageArr.reduce((acc, number) => acc + number, 0) / averageArr.length
    )} ms`;
        }

        let svg = document.querySelector('.demo');
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        function spawnCircle() {
    circle.setAttribute(
        'cx',
        getRandomInt(CIRCLE_RADIUS * 2, svg.clientWidth - CIRCLE_RADIUS * 2)
    );
    circle.setAttribute(
        'cy',
        getRandomInt(CIRCLE_RADIUS * 2, svg.clientHeight - CIRCLE_RADIUS * 2)
    );
    circle.setAttribute('fill', colorList[getRandomInt(0, 6)]);
    circle.setAttribute('r', CIRCLE_RADIUS);
        }

        circle.addEventListener('click', () => {
    timer();
    spawnCircle();
    showAverage();
        });
        spawnCircle();
        document.querySelector('.demo').appendChild(circle);
    }
    if(mode === 'wrongColor') {
        const values = [...Array(4)].map((_, i) => i);
        const result = [...Array(4)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])

        const ARR = []

        const wordList = ['Black', 'Yellow', 'Green', 'Blue'];
        const colorList = ['black', 'gold', 'green', 'blue'];
        const combine = [
    {
        "color":'black',
        "text":'Black',
        "status":'ok'
    },
    {
        "color":'gold',
        "text":'Yellow',
        "status":'ok'
    },
    {
        "color":'green',
        "text":'Green',
        "status":'ok'
    },
    {
        "color":'blue',
        "text":'Blue',
        "status":'ok'
    },
        ]
        const blockWrapper = document.querySelector('.blockWrapper')

        function clickBlock(id) {
    if(id === 'bad') console.log('URAA');
    else console.log('HUIII')
    generateARR()
    htmlAppend()
        }

        function generateARR() {
    const values = [...Array(4)].map((_, i) => i);
    const result = [...Array(4)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
    ARR.splice(0)
    while (blockWrapper.firstChild) {
        blockWrapper.removeChild(blockWrapper.firstChild);
      }
    for(i = 0; i < 4; i++) {
        ARR.push(combine[result[i]]);
    }

    const val = [...Array(4)].map((_, i) => i);
    const randdd = [...Array(2)].map(() => val.splice(Math.floor(Math.random() * val.length), 1)[0]);
    const bad = {
        "color": combine[randdd[0]].color,
        "text": combine[randdd[1]].text,
        "status": "bad"
    }
    const rrrr = Math.floor(Math.random() * 4);
    ARR[rrrr] = bad
        }

        function htmlAppend() {
    for(i = 0; i < ARR.length; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.onclick = () => clickBlock(block.id);
        block.style.backgroundColor = ARR[i].color;
        block.textContent = ARR[i].text;
        block.id = ARR[i].status
        blockWrapper.append(block)
    }
        }
        generateARR()
        htmlAppend()

    }
    if(mode === 'switching') {
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

        answer = (answ) => {
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
    }
}

window.onload = () => {
    
    
}

