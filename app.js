document.addEventListener('DOMContentLoaded', () => {

    let intervalVariable = undefined;  
    let timeleft = 0;  
    let totaltime = 0;  

    const startTimer = () => {  
       // Создаем интервал, который будет считать нам время
       intervalVariable = setInterval(updateTime, 10);  
    }  

     const resetTimer = () => {  
       // Останавливаем таймер
       stopTimer();
       timeleft = -10;
    
       // Обновляем значение в ui
       updateTime();  
    }  

    const stopTimer = () => {
       // Производим очистку интервала
       clearInterval(intervalVariable);  
    } 

    const updateTime = () => {
        if(Math.floor(timeleft / 1000) > 29) stopTimer()
       // Шаг 10 миллисекунд
       timeleft = timeleft + 10;  
    
       // Получаем нужные нам элементы
       const timers = document.getElementById("timers");  
       const timerms = document.getElementById("timerms"); 
       const milli = timeleft % 1000;  
    
       // Устанавливаем значения
       timers.innerHTML = Math.floor(timeleft / 1000);  
       timerms.innerHTML = Math.floor(milli / 10);  
       timers.style.color = "green";  
       timerms.style.color = "red";  
    }  


    function handleHashChange() {
        let route = window.location.hash.substring(1);
        console.log('route - ', route)
        const parentRoute = route.split('/')[0];
        console.log('parentRoute - ', parentRoute)
        if(parentRoute === 'games') {
            
            const childRoute = route.slice(parentRoute.length + 1);
            console.log('childRoute - ', childRoute)
            if(childRoute) {
                console.log('childRoute - ', childRoute)


                if(childRoute === "memory") {
                    startTimer()
                    const memoryWrapper = document.querySelector('.memoryDiv');
                    
                    const children = memoryWrapper.children;
                  
                    const btRotate = document.getElementById('btRotate')
                    btRotate.addEventListener("click", rotateBlocks)
                    
                    const scoreHTML = document.querySelector('.score')
                    scoreHTML.textContent = '0 очков'
                    let score = 0;
                    let result
            
                    let isRemember = false
                
                    let countSuccess = 0;
                
                    function clickBlock (block) {
                        if(!isRemember) return
                        if(result.includes(Number(block.id))) {
                            block.style.backgroundColor = '#00CC99'
                            countSuccess+=1;

                            if(countSuccess === 3) {
                                score++;
                                scoreHTML.textContent = `${
                                    score
                                } ОЧКОВ`;
                                countSuccess = 0;
                                btRotate.disabled = false
                                btRotate.classList.remove('btDis')
                                isRemember = false
                                generate();
                            }
                        }
                    
                        else {
                            score--;
                                scoreHTML.textContent = `${
                                    score
                                } ОЧКОВ`;
                            countSuccess = 0;
                            btRotate.disabled = false
                            btRotate.classList.remove('btDis')
                            isRemember = false
                            for(i = 0; i < children.length; i++){
                                children[i].style.backgroundColor = 'darkgray'
                            }
                            generate()
                        }
                    }
                
                    function rotateBlocks() {
                        isRemember = true
                        btRotate.disabled = true
                        btRotate.classList.add('btDis')
                        const rand = Math.floor(Math.random() * 2);
                        if(rand === 1) {
                            memoryWrapper.style.transition = 'all 0.5s ease';
                            memoryWrapper.style.transform = `rotate(${this.d = (this.d | 0) + 90}deg)`;
                        }
                        else {
                            memoryWrapper.style.transition = 'all 0.5s ease';
                            memoryWrapper.style.transform = `rotate(${this.d = (this.d | 0) - 90}deg)`;
                        }
                
                        for(i = 0; i < children.length; i++){
                            children[i].style.backgroundColor = 'darkgray'
                        }
                    }
                
                    function generate() {
                        for(i = 0; i < children.length; i++) 
                            children[i].style.backgroundColor = 'darkgray'
                        
                        const values = [...Array(9)].map((_, i) => i);
                        result = [...Array(3)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
                        console.log('result - ', result)
                        result.map((i) => children[i].style.backgroundColor = '#00CC99')
                    }
                    function generateHtml() {
                        let child = memoryWrapper.lastElementChild;
                        while (child) {
                            memoryWrapper.removeChild(child);
                            child = memoryWrapper.lastElementChild;
                        }
                        for(i=0; i < 9; i++) {
                            const block = document.createElement('div');
                            block.id = i
                            block.addEventListener('click', () => clickBlock(block))
                            memoryWrapper.append(block)
                        }
                    }
                    generateHtml()
                    generate()
            
                }
                if(childRoute === "aim") {
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
            
                    let averagearrayOfColoredBlocks = [];
            
                    function timer() {
                        if (isFirst) {
                            timerStart = new Date().valueOf();
                            isFirst = false;
                        } else {
                            timerEnd = new Date().valueOf();
                            document.querySelector('.seconds').textContent = `${
                                timerEnd - timerStart
                            } ms`;
                            averagearrayOfColoredBlocks.push(timerEnd - timerStart);
                            timerStart = new Date().valueOf();
                        }
                    }
            
                    function showAverage() {
                        document.querySelector('.average').textContent = `${Math.floor(
                            averagearrayOfColoredBlocks.reduce((acc, number) => acc + number, 0) / averagearrayOfColoredBlocks.length
                        )} ms`;
                    }
            
                    let svg = document.querySelector('.demo');
                    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            
                    function spawnCircle() {
                        // document.querySelector('circle')?.remove()
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
                    timer();
                    spawnCircle();
                    document.querySelector('.demo').appendChild(circle);
                }
                if(childRoute === 'wrongColor') {
            
                    const arrayOfColoredBlocks = []
            
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
                    const blockWrapper = document.querySelector('.blockWrapper')
                    function clickBlock(id) {
                        if(id === 'bad') console.log('URAA');
                        else console.log('HUIII')
                        generateArrayOfColoredBlocks()
                        generateHtml()
                    }
            
                    function generateArrayOfColoredBlocks() {
                        const values = [...Array(4)].map((_, i) => i);
                        const result = [...Array(4)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0])
                        arrayOfColoredBlocks.splice(0)
                        while (blockWrapper.firstChild) {
                            blockWrapper.removeChild(blockWrapper.firstChild);
                          }
                        for(i = 0; i < 4; i++) {
                            arrayOfColoredBlocks.push(combine[result[i]]);
                        }
            
                        const val = [...Array(4)].map((_, i) => i);
                        const randdd = [...Array(2)].map(() => val.splice(Math.floor(Math.random() * val.length), 1)[0]);
                        const bad = {
                            "color": combine[randdd[0]].color,
                            "text": combine[randdd[1]].text,
                            "status": "bad"
                        }
                        const rrrr = Math.floor(Math.random() * 4);
                        arrayOfColoredBlocks[rrrr] = bad
                    }
            
                    function generateHtml() {
                        for(i = 0; i < arrayOfColoredBlocks.length; i++) {
                            const block = document.createElement('div');
                            block.className = 'block';
                            block.onclick = () => clickBlock(block.id);
                            block.style.backgroundColor = arrayOfColoredBlocks[i].color;
                            block.textContent = arrayOfColoredBlocks[i].text;
                            block.id = arrayOfColoredBlocks[i].status
                            blockWrapper.append(block)
                        }
                    }
                    generateArrayOfColoredBlocks()
                    generateHtml()
            
                }
                if(childRoute === 'switching') {
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
                if(childRoute === 'v2') {
                    const grid = document.getElementById('grid');
                    const rememberButton = document.getElementById('rememberButton');
                    const checkButton = document.getElementById('checkButton');
                    const restartButton = document.getElementById('restartButton');
                    const message = document.getElementById('message');

                    let selectedCells = [];
                    let playerSelection = [];

                    function createGrid() {
                        let child = grid.lastElementChild;
                        while (child) {
                            grid.removeChild(child);
                            child = grid.lastElementChild;
                        }
                        for (let i = 0; i < 9; i++) {
                            const cell = document.createElement('div');
                            cell.classList.add('cell');
                            cell.dataset.index = i;
                            cell.addEventListener('click', () => toggleCellSelection(cell));
                            grid.appendChild(cell);
                        }
                    }

                    function selectRandomCells() {
    selectedCells = [];
    while (selectedCells.length < 3) {
        const randomIndex = Math.floor(Math.random() * 9);
        if (!selectedCells.includes(randomIndex)) {
            selectedCells.push(randomIndex);
        }
    }
    selectedCells.forEach(index => {
        grid.children[index].style.backgroundColor = 'blue';
    });
                    }

                    function rotateGrid() {
    const directions = [
        // { x: 90, y: 0, z: 0 },   // Вращение по оси X
        // { x: 0, y: 90, z: 0 },   // Вращение по оси Y
        // { x: 0, y: 0, z: 90 },   // Вращение по оси Z
        { x: 180, y: 0, z: 0 },  // Вращение по оси X на 180°
        { x: 0, y: 180, z: 0 },  // Вращение по оси Y на 180°
        { x: 0, y: 0, z: 180 },  // Вращение по оси Z на 180°
    ];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    grid.style.transform = `rotateX(${randomDirection.x}deg) rotateY(${randomDirection.y}deg) rotateZ(${randomDirection.z}deg)`;
                    }

                    function resetGrid() {
                        grid.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
                        Array.from(grid.children).forEach(cell => {
                            cell.style.backgroundColor = '#ccc';
                            cell.classList.remove('selected');
                        });
                        playerSelection = [];
                        message.textContent = '';
                        restartButton.style.display = 'none';
                        rememberButton.disabled = false;
                        checkButton.disabled = true;
                    }

                    function toggleCellSelection(cell) {
                        const index = parseInt(cell.dataset.index);
                    
                        if (playerSelection.includes(index)) {
                            playerSelection = playerSelection.filter(i => i !== index);
                            cell.classList.remove('selected');
                        } else {
                            if (playerSelection.length < 3) {
                                playerSelection.push(index);
                                cell.classList.add('selected');
                            }
                        }
                    }

                    function checkSelection() {
                        const correct = playerSelection.every(index => selectedCells.includes(index));
                        if (correct && playerSelection.length === 3) {
                            message.textContent = 'Правильно!';
                        } else {
                            message.textContent = 'Неправильно, попробуйте еще раз.';
                        }
                        restartButton.style.display = 'block';
                    }

                    function restartGame() {
                        resetGrid();
                        selectRandomCells();
                    }

                    rememberButton.addEventListener('click', () => {
                        resetGrid();
                        rotateGrid();
                        rememberButton.disabled = true;
                        checkButton.disabled = false;
                    });

                    checkButton.addEventListener('click', () => {
                        checkSelection();
                        rememberButton.disabled = true;
                        checkButton.disabled = true;
                    });

                    restartButton.addEventListener('click', restartGame);

                    // Инициализация игры
                    createGrid();
                    selectRandomCells();
                }
            }
        }
    }
    // handleHashChange()
    window.addEventListener('hashchange', handleHashChange);
})
