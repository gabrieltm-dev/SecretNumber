let drawnNumbers = []; // drawnNumbersList
let attemptNumber = 1; // Numbers of attempt
let lastNumber = 10; // Range of random numbers
randomNumber = generateRandomNumber(lastNumber); // Generate a random number

displayWelcomeMessage();

// generate a random number between 1 and 10
function generateRandomNumber(maxNumber){
    let randomNumber = parseInt((Math.random()*maxNumber)+1);
    let drawnNumbersLength = drawnNumbers.length;
    if(drawnNumbersLength > 3){
        drawnNumbers.shift();
    };
    if(drawnNumbers.includes(randomNumber)){
        return generateRandomNumber(maxNumber);
    }else{
        drawnNumbers.push(randomNumber);
        return randomNumber;
    }
    return randomNumber;
};

// function onclick from the button guess
function verifyGuess(){
    let guess = parseInt(document.querySelector('input').value);
    console.log(drawnNumbers);
    console.log(randomNumber);
    if(guess == randomNumber){
        displayTextOnScreen('h1', 'Acertou');
        let attemptWord = attemptNumber > 1 ? 'tentativas' : 'tentativa';
        displayTextOnScreen('p', `O número secreto é ${randomNumber} e você acertou com ${attemptNumber} ${attemptWord}!`);
        cleanInput();
        document.getElementById('restart').removeAttribute('disabled');
        document.getElementById('guess').setAttribute('disabled', true);
        document.getElementById('guessInput').setAttribute('disabled', true);
    }else{
        if(guess > randomNumber){
            displayTextOnScreen('p', 'O número secreto é menor que o número escolhido!');
            attemptNumber++;
        }else{
            displayTextOnScreen('p', 'O número secreto é maior que o número escolhido!');
            attemptNumber++;
        }
        displayTextOnScreen('h1', 'Errou');
        cleanInput();
    };
};

// function onclick from the buttom restart
function restartGame(){
    randomNumber = generateRandomNumber(lastNumber);
    attemptNumber = 1;
    displayWelcomeMessage();
    document.getElementById('restart').setAttribute('disabled', true);
    cleanInput();
    document.getElementById('guess').removeAttribute('disabled');
    document.getElementById('guessInput').removeAttribute('disabled');
};

// display the first welcome message
function displayWelcomeMessage(){
    displayTextOnScreen('h1', 'Jogo do número secreto');
    displayTextOnScreen('p', `Escolha um número entre 1 e ${lastNumber}`);
}

// display the html text on screen
function displayTextOnScreen(tag, text){
    let variable = document.querySelector(tag);
    variable.innerHTML = text;
};

// clean input field
function cleanInput(){
    guess = document.querySelector('input');
    guess.value = '';
};
