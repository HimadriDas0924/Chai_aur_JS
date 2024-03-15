## Self Practice JS code link (html + css already present)

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 

## All Projects link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-mxdwud?file=index.html)

# Solution Code

## Project 1 : color Changer

``` javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

// now attach click eventlisteners to each of the buttons
// after attaching the event listerner: what to do ? : for that set up a cb fn(pass the event obj) which has different properties regarding the event.

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // element on which event was performed

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## Project 2: BMI calculator

``` javascript
  const form = document.querySelector('form');

  // a form once submitted (method: get/post): data is sent to the url/server
  // so stop the default action of form.

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // form values are in form of strings
    const height = parseInt(document.querySelector('#height').value); // .value to get the value of the form element.
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // checks
    // NOTE: to check NaN: use isNaN method
    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
      // formula
      const BMI = (weight / ((height * height) / 10000)).toFixed(2); // limit to 2 decimal places

      let ans;
      if (BMI < 18.6) ans = 'Under Weight';
      else if (BMI < 24.9) ans = 'Normal Weight';
      else ans = 'Over Weight';

      results.innerHTML = `<span>${BMI}</span><br><span>${ans}</span>`;
    }
});

```  

## Project 3: Digital Clock

``` javascript 

  const clock = document.getElementById('clock');
  const center = document.querySelector('.center');

  const stopButton = document.createElement('button');
  stopButton.innerHTML = 'START / STOP';

  stopButton.style.padding = '5px';
  stopButton.style.margin = '5px';
  center.appendChild(stopButton);

  // we want the clock to show the live time

  // so above date.toLocaleTimeString() has to be calculated every moment OR at some interval and display in clock. We may stop it when we want to to.

  // use: setInterval(bc fn, time in ms)

  let intervalId;

  function toggleClock() {
    intervalId = setInterval(function () {
      const date = new Date();
      // console.log(date.toLocaleTimeString()); // time

      clock.innerText = date.toLocaleTimeString();
    }, 1000);
  }

  toggleClock();

  // event listener on the STOP button
  stopButton.addEventListener('click', function (e) {
    clearInterval(intervalId);
  });

  // currently: can stop clock but can't restart it.
  // setInterval will be taught later


```

## Guess the Number

``` javascript 

// generalized approach to code a game
  // distribute work into different functions

let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true // to check if we can play the game

if(playGame) {
  // if can play game: work on values provided by the user
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGame(guess)
  })
}

function validateGame(guess) {
  // if guess within constraints
  if(isNaN(guess)) {
    alert('Please enter a valid number')
  }
  else if(guess < 1) {
    alert('Please enter a number more than 1')
  }
  else if(guess > 100) {
    alert('Please enter a number less than 100')
  }
  else {
    prevGuess.push(guess)

    if(numGuess > 10) {
      cleanUpGuess(guess)
      displayMessage(`Game over, Radom Number was ${randomNumber}`)
      endGame()
    }
    else {
      cleanUpGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  // to print message regarding guess
  if(guess === randomNumber) {
    displayMessage('You Guessed it right')
    endGame()
  }
  else if(guess < randomNumber) {
    displayMessage('Number is TOO low')
  }
  else if(guess > randomNumber) {
    displayMessage('Number is TOO high')
  }
}

function cleanUpGuess(guess) {
  // update variables 
  userInput.value = '' // reset the user value

  guessSlot.innerHTML += `${guess}, ` // update guess array
  
  numGuess++

  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  // DOM manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  // clear all input fields
  userInput.value = ''

  // userInput : make sure no of more values can be entered unless we start the game
  userInput.setAttribute('disabled', '');

  // new created start/stop button
  p.classList.add('button') // add a class to an element

  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`

  startOver.appendChild(p)

  playGame = false // to not start unless we want to 

  newGame()
}

function newGame() {
  // variable and DOM re-set on starting a new Game

  const newGameButton = document.querySelector('#newGame')

  newGameButton.addEventListener('click', function(e) {

    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1

    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`

    // remove disabled from userInput && p child of startOver
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
 
  })
}

```