// -Create array of available choices to the computer.

// -Create variables: wins, losses, guessesLeft, lettersGuessed.

// -Computer randomly selects choice from array - this becomses a variable called "computerGuess."

// -User selects letter - this becomes a variable called "userGuess."

// -If userGuess != computerGuess, then:
  // -Decrease guessesLeft by 1
  // -Add letter guessed to the lettersGuessed array

// -If userGuess === computerGuess, Then:
  // -Increase wins by 1
  // -Reset letters guessed

// -If guessesLeft = 0 then reset game.

// Questions:
  // -How do I make sure that the computerGuess function is not resetting after each guess and instead allows the user 9 guesses before picking a new letter?
  // 

  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Creating variables to hold the number of wins, losses, guesses left, letters guessed.
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var lettersGuessed = [];
  
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  
  
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
  
    // Determines which key was pressed.
    var userGuess = event.key;

  

    if (computerGuess === userGuess) {
          wins++;
          guessesLeft=9;
          lettersGuessed.length=0;

    }
      
      else{
          guessesLeft--;
          lettersGuessed.push(userGuess);
        if (lettersGuessed.length === 9) {
          losses++;
          guessesLeft=9;
          lettersGuessed.length=0;
        }
        }

          if (userGuess) {
        reWriteStats();
      }
  
    // Only run the following code block if the user presses any letter.
  
      // if (event.key) {
      //   lettersGuessed.push;
      // }
  

      
  
    
      // I want to create a while loop that runs so long as the computer guess does not equal the user guess

      // IF computer guess does not equal user guess DO guesses left -- lettersGuessed.push(userGuess); and nest {if (guessesLeft === 0){losses++;} 
          
        }
        
      
          // how would i push letters guessed to letterGuessed array?
      
      // if (guessesLeft < 1) {
      //   losses++;
      //   }
  
      
  
  
  
  function reWriteStats() {
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses left: " + guessesLeft);
    console.log("Letters guessed: " + lettersGuessed);
    console.log("------------------------------");
  }