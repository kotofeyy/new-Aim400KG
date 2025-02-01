export class v2Memory {
    constructor(grid, rememberButton, checkButton, restartButton, message) {
        this.grid = grid;
        this.rememberButton = rememberButton;
        this.checkButton = checkButton;
        this.restartButton = restartButton;
        this.message = message;

        this.selectedCells = [];
        this.playerSelection = [];
        this.isGameActive = false;

        this.init();
    }

    init() {
        this.createGrid();
        this.addEventListeners();
        this.startGame();
    }

    createGrid() {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', () => this.toggleCellSelection(cell));
            this.grid.appendChild(cell);
        }
    }

    addEventListeners() {
        this.rememberButton.addEventListener('click', () => this.onRememberClick());
        this.checkButton.addEventListener('click', () => this.onCheckClick());
        this.restartButton.addEventListener('click', () => this.restartGame());
    }

    startGame() {
        this.isGameActive = true;
        this.resetGrid();
        this.selectRandomCells();
        this.rememberButton.disabled = false;
        this.checkButton.disabled = true;
        this.restartButton.style.display = 'none';
        this.message.textContent = '';
    }

    stopGame() {
        this.isGameActive = false;
        this.rememberButton.disabled = true;
        this.checkButton.disabled = true;
    }

    restartGame() {
        this.stopGame();
        this.startGame();
    }

    selectRandomCells() {
        this.selectedCells = [];
        while (this.selectedCells.length < 3) {
            const randomIndex = Math.floor(Math.random() * 9);
            if (!this.selectedCells.includes(randomIndex)) {
                this.selectedCells.push(randomIndex);
            }
        }
        this.selectedCells.forEach(index => {
            this.grid.children[index].style.backgroundColor = 'blue';
        });
    }

    rotateGrid() {
        const directions = [
            // { x: 90, y: 0, z: 0 },
            // { x: 0, y: 90, z: 0 },
            // { x: 0, y: 0, z: 90 },
            { x: 180, y: 0, z: 0 },
            { x: 0, y: 180, z: 0 },
            { x: 0, y: 0, z: 180 },
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        this.grid.style.transform = `rotateX(${randomDirection.x}deg) rotateY(${randomDirection.y}deg) rotateZ(${randomDirection.z}deg)`;
    }

    resetGrid() {
        this.grid.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
        Array.from(this.grid.children).forEach(cell => {
            cell.style.backgroundColor = '#ccc';
            cell.classList.remove('selected');
        });
        this.playerSelection = [];
    }

    toggleCellSelection(cell) {
        if (!this.isGameActive) return;

        const index = parseInt(cell.dataset.index);

        if (this.playerSelection.includes(index)) {
            this.playerSelection = this.playerSelection.filter(i => i !== index);
            cell.classList.remove('selected');
        } else {
            if (this.playerSelection.length < 3) {
                this.playerSelection.push(index);
                cell.classList.add('selected');
            }
        }
    }

    onRememberClick() {
        this.resetGrid();
        this.rotateGrid();
        this.rememberButton.disabled = true;
        this.checkButton.disabled = false;
    }

    onCheckClick() {
        const correct = this.playerSelection.every(index => this.selectedCells.includes(index));
        if (correct && this.playerSelection.length === 3) {
            this.message.textContent = 'Правильно!';
        } else {
            this.message.textContent = 'Неправильно, попробуйте еще раз.';
        }
        this.restartButton.style.display = 'block';
        this.stopGame();
    }
}