export class Arrows {
    constructor(arrowElement, scoreElement) {
        this.arrowElement = arrowElement;
        this.scoreElement = scoreElement;
        this.score = 0;
        this.touchStartX = 0; // Начальная позиция касания по оси X

        this.directions = ['←', '→'];
        this.colors = ['blue', 'pink'];

        // Обработка свайпов
        document.addEventListener('touchstart', (event) => {
            this.touchStartX = event.touches[0].clientX; // Запоминаем начальную позицию касания
        });

        document.addEventListener('touchend', (event) => {
            const touchEndX = event.changedTouches[0].clientX; // Конечная позиция касания
            const deltaX = touchEndX - this.touchStartX; // Разница между начальной и конечной позицией
        
            if (Math.abs(deltaX) > 50) { // Минимальная длина свайпа для регистрации
                if (deltaX > 0) {
                    this.checkAnswer('ArrowRight'); // Свайп вправо
                } else {
                    this.checkAnswer('ArrowLeft'); // Свайп влево
                }
            }
        });

        // Обработка нажатий клавиш
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                this.checkAnswer(event.key);
            }
        });

        
        // Инициализация игры
        this.updateArrow();
    }

    getRandomDirection() {
        return this.directions[Math.floor(Math.random() * this.directions.length)];
    }
    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    updateArrow() {
        const direction = this.getRandomDirection();
        const color = this.getRandomColor();
        this.arrowElement.textContent = direction;
        this.arrowElement.style.color = color;
    }
    checkAnswer(key) {
        const currentDirection = this.arrowElement.textContent;
        const currentColor = this.arrowElement.style.color;
    
        if (currentColor === 'blue') {
            if ((currentDirection === '←' && key === 'ArrowLeft') || (currentDirection === '→' && key === 'ArrowRight')) {
                this.score++;
            } else {
                this.score = Math.max(0, this.score - 1);
            }
        } else if (currentColor === 'pink') {
            if ((currentDirection === '←' && key === 'ArrowRight') || (currentDirection === '→' && key === 'ArrowLeft')) {
                this.score++;
            } else {
                this.score = Math.max(0, this.score - 1);
            }
        }
    
        this.scoreElement.textContent = `Счёт: ${this.score}`;
        this.updateArrow();
    }
    
}















