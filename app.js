randomNumber = generateRandomNumber(10);
let attemptNumber = 1;
let newGame = document.getElementById('restart').value;
displayWelcomeMessage();

// display the first welcome message
function displayWelcomeMessage(){
    displayTextOnScreen('h1', 'Jogo do número secreto');
    displayTextOnScreen('p', 'Escolha um número entre 1 e 10');
}

// display the html text on screen
function displayTextOnScreen(tag, text){
    let variable = document.querySelector(tag);
    variable.innerHTML = text;
};

// generate a random number between 1 and 10
function generateRandomNumber(maxNumber){
    return parseInt((Math.random()*maxNumber)+1);
};

// clean input field
function cleanInput(){
    chute = document.querySelector('input');
    chute.value = '';
};

// function onclick from the button chute
function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    console.log(newGame);
    if(chute == randomNumber){
        displayTextOnScreen('h1', 'Acertou!');
        let attemptWord = attemptNumber > 1 ? 'tentativas' : 'tentativa';
        displayTextOnScreen('p', `O número secreto é ${randomNumber} e você acertou com ${attemptNumber} ${attemptWord}`);
        cleanInput();
        document.getElementById('restart').removeAttribute('disabled');
    }else{
        if(chute > randomNumber){
            displayTextOnScreen('p', 'O número secreto é menor que o número escolhido!');
            attemptNumber++;
        }else{
            displayTextOnScreen('p', 'O número secreto é maior que o número escolhido!');
            attemptNumber++;
        }
        displayTextOnScreen('h1', 'Errou!');
        cleanInput();
    };
};

// function onclick from the buttom restart
function restartGame(){
    randomNumber = generateRandomNumber(10);
    attemptNumber = 1;
    displayWelcomeMessage();
    document.getElementById('restart').setAttribute('disabled', true);
    cleanInput();
};


