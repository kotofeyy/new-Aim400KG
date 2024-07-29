let svg = document.querySelector('.demo');
let circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
);
console.log(svg)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const colorList = [
    '#9933FF',
    '#6633FF',
    '#00CCFF',
    '#00CC99',
    '#FF0066',
    '#FF6666',
    '#FF6600',
];

function spawnCircle() {
    circle.setAttribute('cx', getRandomInt(svg.clientWidth))
    circle.setAttribute('cy', getRandomInt(svg.clientHeight))
    circle.setAttribute('fill', colorList[getRandomInt(6)]);
    circle.setAttribute('r', 40);
}

circle.addEventListener('click', () => {
    spawnCircle();
});
spawnCircle();
document.querySelector('.demo').appendChild(circle);