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
