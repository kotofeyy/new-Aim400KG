import { Arrows } from "./Arrows";
import { SwitchingGame } from "./switching";
import { v2Memory } from "./v2";
import { WrongColor } from "./wrongColor";

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
                if(childRoute === 'wrongcolor') {
                    const blockWrapper = document.querySelector('.blockWrapper');
                    const game = new WrongColor(blockWrapper)
                    // code
            
                }
                if(childRoute === 'switching') {
                    const left = document.querySelector('.left');
                    const right = document.querySelector('.right');
                    const question = document.querySelector('.question');
                    const switchWrapper = document.querySelector('.switchWrapper');
                    const btNo = document.getElementById('bt-no');
                    const btYes = document.getElementById('bt-yes');
                    const game = new SwitchingGame(left, right, question, switchWrapper, btNo, btYes)
                    // code
                }
                if(childRoute === 'v2') {
                    // Получаем элементы DOM
                    const grid = document.getElementById('grid');
                    const rememberButton = document.getElementById('rememberButton');
                    const checkButton = document.getElementById('checkButton');
                    const restartButton = document.getElementById('restartButton');
                    const message = document.getElementById('message');

                    // Создаем экземпляр игры
                    const game = new v2Memory(grid, rememberButton, checkButton, restartButton, message);
                  // code
                }
                if(childRoute === 'arrows') {
                    const arrowElement = document.getElementById('arrow');
                    const scoreElement = document.getElementById('score');

                    const game = new Arrows(arrowElement, scoreElement);
                    // code
                }
            }
        }
    }
    // handleHashChange()
    window.addEventListener('hashchange', handleHashChange);
})
