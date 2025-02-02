export class wrongColor {
    constructor(blockWrapper){
        this.blockWrapper = blockWrapper;
        this.arrayOfColoredBlocks = [];


        this.init();
    }
    init() {
        this.generateArrayOfColoredBlocks()
        this.generateHtml()
    }
    clickBlock(id) {
        if(id === 'bad') console.log('URAA');
        else console.log('HUIII')
        this.generateArrayOfColoredBlocks()
        this.generateHtml()
    }
    generateArrayOfColoredBlocks() {
        const combine = [
            {
                "color":'black',
                "text":'Черный',
                "status":'ok'
            },
            {
                "color":'gold',
                "text":'Желтый',
                "status":'ok'
            },
            {
                "color":'green',
                "text":'Зеленый',
                "status":'ok'
            },
            {
                "color":'blue',
                "text":'Синий',
                "status":'ok'
            },
        ]
        const values = [...Array(4)].map((_, i) => i);
        const result = [...Array(4)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
        this.arrayOfColoredBlocks.splice(0)
        while (this.blockWrapper.firstChild) {
            this.blockWrapper.removeChild(this.blockWrapper.firstChild);
          }
        for(let i = 0; i < 4; i++) {
            this.arrayOfColoredBlocks.push(combine[result[i]]);
        }
    
        const val = [...Array(4)].map((_, i) => i);
        const randdd = [...Array(2)].map(() => val.splice(Math.floor(Math.random() * val.length), 1)[0]);
        const bad = {
            "color": combine[randdd[0]].color,
            "text": combine[randdd[1]].text,
            "status": "bad"
        }
        const rrrr = Math.floor(Math.random() * 4);
        this.arrayOfColoredBlocks[rrrr] = bad
    }
    generateHtml() {
        for(let i = 0; i < this.arrayOfColoredBlocks.length; i++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.onclick = () => this.clickBlock(block.id);
            block.style.backgroundColor = this.arrayOfColoredBlocks[i].color;
            block.textContent = this.arrayOfColoredBlocks[i].text;
            block.id = this.arrayOfColoredBlocks[i].status
            this.blockWrapper.append(block)
        }
    }
}

            







