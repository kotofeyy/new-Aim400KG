const colorList = [
    '#9933FF',
    '#6633FF',
    '#00CCFF',
    '#00CC99',
    '#FF0066',
    '#FF6666',
    '#FF6600',
];
const memoryWrapper = document.querySelector('.memoryDiv');
const btRotate = document.querySelector('.mem');

btRotate.addEventListener('click', function () {
    memoryWrapper.classList.add('memoryRotate');
});

var counter = 0;
for (i = 0; i <= 8; i++) {
    let block = document.createElement('div');
    block.style.width = '100px';
    block.style.height = '100px';
    var rand = getRandomInt(0, 2);
    if (rand === 0) {
        counter++;
    }
    block.style.backgroundColor = ['#9933FF', '#00CC99'][rand];
    if (counter > 3) {
        block.style.backgroundColor = '#00CC99';
    }
    memoryWrapper.appendChild(block);
}

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
