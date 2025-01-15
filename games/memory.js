const memoryWrapper = document.querySelector('.memoryDiv');
const child = memoryWrapper.children;
const btRotate = document.querySelector('.mem');
const text = document.querySelector('.text')
const scoreHTML = document.querySelector('.score')
let score = 0;
let result

let countSuccess = 0;

function clickBlock(block) {
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
    
function rotateBlocks() {
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

function generate() {
    for(i = 0; i < child.length; i++){
        child[i].style.backgroundColor = 'darkgray'
    }
    const values = [...Array(9)].map((_, i) => i);
    result = [...Array(3)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
    console.log('result - ', result)
    result.map((i) => child[i].style.backgroundColor = '#00CC99')
}
generate()
