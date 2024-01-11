window.addEventListener('load', (event) => {

    const Characters = [
        'heisenberg',
        'jessie',
        'gustavofringman',
        'cillianmurphy',
        'paulanderson',
        'tomhardy',
        'joecole',
        'deannorris',
    ];
    const draws = [
        'gallows',
        'head',
        'body',
        'leftArm',
        'rightArm',
        'leftLeg',
        'rightLeg',
        'leftFoot',
        'rightFoot',
    ]
    const drawing = document.getElementById('stickman');
    const context = drawing.getContext('2d');
    let step = 0;
    let answer = '';
    let livesElem = document.getElementById('lives');
    let guessed = [];
    let charArray = [];
    let lives = 9;

    randomWord = () => {
        answer = Characters[Math.floor(Math.random() * Characters.length)];
        charArray = answer.split('');
    }

    updateLives = () => {
        livesElem.innerHTML = 'You have <span style="color: yellowgreen">' + lives + '</span> lives left';
        if (lives === 1) {
            livesElem.innerHTML = 'You have <span style="color: yellowgreen">' + lives + '</span> life left!';
        } else if (lives === 0) {
            livesElem.innerHTML = 'Game Over :(';
        }
    }

    processGuess = (selectedElem, selectedLetter) => {
        if (guessed.indexOf(selectedLetter.toLowerCase()) === -1) {
            guessed.push(selectedLetter.toLowerCase());
        };
        selectedElem.setAttribute('disabled', true);

        if (answer.indexOf(selectedLetter.toLowerCase()) >= 0) {
            guessedWord();
        } else {
            lives--;
            updateLives();
            Draw(draws[step++]);
            if (undefined === draws[step]) this.disabled = true;
        }
    }

    guessedWord = () => {
        let wordStatus = '';

        for (let i = 0; i < charArray.length; i++) {
            let letter = charArray[i];

            if (guessed.indexOf(letter.toLowerCase()) >= 0) {
                wordStatus += letter.toLowerCase();
            } else {
                wordStatus += ' _ ';
            }
        }
        document.getElementById('word').innerHTML = wordStatus;
    }

    toggleKeyboardState = (state) => {
        let keys = document.querySelectorAll('.key');
        keys.forEach(function (e) {
            e.disabled = state;
        });
    }

    reset = () => {
        cleardrawing();
        toggleKeyboardState(false);
        step = 0;
        lives = 9;
        guessed = [];
        updateLives();
        randomWord();
        guessedWord();
    }

    cleardrawing = () => {
        context.clearRect(0, 0, drawing.width, drawing.height);
    }

    Draw = (part) => {
        switch (part) {
            case 'gallows':
                context.strokeStyle = 'yellowgreen';
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(150, 225);
                context.lineTo(5, 225);
                context.moveTo(25, 225);
                context.lineTo(25, 5);
                context.lineTo(100, 5);
                context.lineTo(100, 25);
                context.stroke();
                break;

            case 'head':
                context.lineWidth = 5;
                context.beginPath();
                context.arc(100, 50, 25, 0, Math.PI * 2, true);
                context.closePath();
                context.stroke();
                break;

            case 'body':
                context.beginPath();
                context.moveTo(100, 75);
                context.lineTo(100, 110);
                context.stroke();
                break;

            case 'leftArm':
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(140, 100);
                context.stroke();
                break;

            case 'rightArm':
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(60, 100);
                context.stroke();
                break;

            case 'leftLeg':
                context.beginPath();
                context.moveTo(100, 110);
                context.lineTo(125, 190);
                context.stroke();
                break;

            case 'leftFoot':
                context.beginPath();
                context.moveTo(122, 190);
                context.lineTo(135, 185);
                context.stroke();
                break;

            case 'rightLeg':
                context.beginPath();
                context.moveTo(100, 110);
                context.lineTo(80, 190);
                context.stroke();
                break;

            case 'rightFoot':
                context.beginPath();
                context.moveTo(82, 190);
                context.lineTo(70, 185);
                context.stroke();
                break;
        }
    };

    randomWord();
    guessedWord();
    document.querySelector('#Letter').addEventListener('click', function (e) {
        if (e.target.localName === 'button') {
            processGuess(e.target, e.target.innerText);
            let check = (currentValue) => {
                return guessed.includes(currentValue)
            }
            let winner = charArray.every(check);
            if (winner) {
                const winDialog = document.querySelector('#dialog-backdrop')
                winDialog.setAttribute('popup', 'true')
                document.getElementById('dialog-content').innerHTML = '<span>You Win!<br>The answer was: ' + answer + '</span><button>Play Again</button>';
                const winDialogResetBtn = document.querySelector('#dialog-backdrop>dialog>button')
                winDialogResetBtn.addEventListener('click', function () {
                    reset()
                    winDialog.setAttribute('popup', 'false')
                })
            }
            if (lives <= 0) {
                const loseDialog = document.querySelector('#dialog-backdrop')
                loseDialog.setAttribute('popup', 'true')
                document.getElementById('dialog-content').innerHTML = '<span>You Lose!<br> The answer was: ' + answer + '</span><button>Play Again</button>';
                const loseDialogResetBtn = document.querySelector('#dialog-backdrop>dialog>button')
                loseDialogResetBtn.addEventListener('click', function () {
                    reset()
                    loseDialog.setAttribute('popup', 'false')
                })
            }
        }
    });

    document.getElementById('reset').addEventListener('click', reset);
});