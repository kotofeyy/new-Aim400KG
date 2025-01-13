const values = [...Array(4)].map((_, i) => i);
const result = [...Array(4)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])


const wordList = ['Black', 'Yellow', 'Green', 'Blue'];
const colorList = ['black', 'yellow', 'green', 'blue'];
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
for(i = 0; i <= result.length-1; i++) {
    
    const block = document.createElement('div');
    const rand = Math.floor(Math.random() * 4)
    block.className = 'block';
    block.style.backgroundColor = combine[result[i]].color
    block.textContent = combine[result[i]].text

    blockWrapper.append(block)
}