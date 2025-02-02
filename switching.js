
export class SwitchingGame {
    constructor(left, right, question, switchWrapper, btNo, btYes) {
        this.btNo = btNo;
        this.btYes = btYes
        this.left = left;
        this.right = right;
        this.question = question;
        this.switchWrapper = switchWrapper;

        this.alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        this.vowel = ['И','А','О','У','Ы','Э','Я','Ё','Е','Ю'];
        this.numbers = '123456789';


        this.randomIndexNumbers = Math.floor(Math.random() * this.numbers.length);
        this.randomNumber = this.numbers[this.randomIndexNumbers];
        this.randomIndexAlphabet = Math.floor(Math.random() * this.alphabet.length);
        this.randomLetter = this.alphabet[this.randomIndexAlphabet];

        this.left.textContent = ''
        this.right.textContent = this.randomLetter + ' / ' + this.randomNumber

        this.mode = 'this.right'


        this.switchWrapper.addEventListener("animationstart", this.listener, false);
        this.switchWrapper.addEventListener("animationend", (e) => this.listener(e), false);
        this.switchWrapper.addEventListener("animationiteration", this.listener, false);

        this.btNo.addEventListener('click', () => this.answer('no'));
        this.btYes.addEventListener('click', () => this.answer('yes'));
    }

    listener(e) {
        if(e.type === 'animationend') {
            this.switchWrapper.classList.remove('shadowOk')
            this.switchWrapper.classList.remove('shadowBad')
        }
    }

    answer(answ) {
        console.log('answer')
        if(this.mode === 'this.right') {
            if(answ === 'yes') {
                if(this.vowel.includes(this.randomLetter)) this.switchWrapper.classList.add('shadowOk');
                else this.switchWrapper.classList.add('shadowBad')
            }
            if(answ === 'no') {
                if(this.vowel.includes(this.randomLetter)) this.switchWrapper.classList.add('shadowBad');
                else this.switchWrapper.classList.add('shadowOk')
            }
        
            this.randomIndexNumbers = Math.floor(Math.random() * this.numbers.length);
            this.randomNumber = this.numbers[this.randomIndexNumbers];
            this.randomIndexAlphabet = Math.floor(Math.random() * this.alphabet.length);
            this.randomLetter = this.alphabet[this.randomIndexAlphabet];
            this.mode = 'this.left'
            this.left.style.visibility = 'visible'
            this.left.textContent = this.randomLetter + ' / ' + this.randomNumber
            this.right.style.visibility = 'hidden'
            this.question.textContent = 'Является ли число четным?'

        }
        else if(this.mode === 'this.left') {
            if(answ === 'yes') {
                if(this.randomNumber % 2 === 0) this.switchWrapper.classList.add('shadowOk');
                else this.switchWrapper.classList.add('shadowBad')
            }
            if(answ === 'no') {
                if(this.randomNumber % 2 === 0) this.switchWrapper.classList.add('shadowBad');
                else this.switchWrapper.classList.add('shadowOk')
            }
            this.randomIndexNumbers = Math.floor(Math.random() * this.numbers.length);
            this.randomNumber = this.numbers[this.randomIndexNumbers];
            this.randomIndexAlphabet = Math.floor(Math.random() * this.alphabet.length);
            this.randomLetter = this.alphabet[this.randomIndexAlphabet];
            this.mode = 'this.right'
            this.right.style.visibility = 'visible'
            this.right.textContent = this.randomLetter + ' / ' + this.randomNumber
            this.left.style.visibility = 'hidden'
            this.question.textContent = 'Является ли буква гласной?'
        }
    }

}
                    
                    
            
                    
            
                    