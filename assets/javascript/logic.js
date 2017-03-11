//Variable Declarations


var wordList = ["barcelona", "sydney", "vancouver", "chicago", "geneva", "amsterdam"];
var pic = "airport"
var wins = 0;
var losses = 0;
//Number of guesses player can take
var guessAllow = 9;
//Array containing split game word
var splitWord =[];
//Array containing dashes for empty letters
var emptyWord =[];
//Array containing log of incorrect guesses
var wrongGuess = [];
//Tallies number of correct guesses to calculate win
var rightGuess = 0;
//Tallies if the user guessed letter does not match each word letter
//If var = length of word, the user guess is considered wrong
var wrongCounter = 0;

//Functions		

var getWin = document.getElementById("getWin");
			var winUpdate = document.createElement("div");
			getWin.innerHTML = "Wins: "+wins;
			getWin.appendChild(winUpdate);

var getLoss = document.getElementById("getLoss");
			var lossUpdate = document.createElement("div");
			getLoss.innerHTML = "Losses: "+ losses;
			getLoss.appendChild(lossUpdate);

var guess1 = document.getElementById("guess1");
			var guessUpdate = document.createElement("div");
			guess1.innerHTML = "Guesses Left: "+ guessAllow;
			guess1.appendChild(guessUpdate);

var usedLetters = document.getElementById("usedLetters");
			var letterUpdate = document.createElement("div");
				if ( wrongGuess = []){
					usedLetters.innerHTML = "Used Letters: None";
			}
				else {
					usedLetters.innerHTML = "Used Letters: "+ wrongGuess;
			}	
			usedLetters.appendChild(letterUpdate);

//Function to select and display word for game
document.onkeyup = function startgame(event) {

	var starterLetter = event.key;
	var gameWord = wordList[Math.floor(Math.random() * wordList.length)];
    pic = gameWord;
    var splitWord = gameWord.split("");

    for (i = 0; i < splitWord.length; i++) {
    	emptyWord.push(" _ ");
    }	
    	//Displays dashed word on screen
    	var wordDisp = document.getElementById("wordDisp");
			var wordUpdate = document.createElement("div");
			wordDisp.innerHTML =  emptyWord;
			wordDisp.appendChild(wordUpdate);

		//Function begin actual game play
    	document.onkeyup = function playgame(event) {

					var userGuess = event.key;
					//Determines if pressed key is contained in the game word

							for (i = 0; i < emptyWord.length; i++) {

								if (userGuess === splitWord[i] && rightGuess === (emptyWord.length-1))
								{	
									wins++;
									emptyWord.splice(i, 1, userGuess);
									rightGuess++;
									document.getElementById("getPic").src = "assets/images/"+pic+".jpg";
									alert("You win! Click Play Again");
									
								}
								else if(userGuess === splitWord[i]) {
									emptyWord.splice(i, 1, userGuess);
									rightGuess++;
									}
								else {
									wrongCounter++;
									}		
							}

					if(wrongCounter===splitWord.length && guessAllow === 1) {
							losses++;
							document.getElementById("getPic").src = "assets/images/loss.jpg";
							alert("Sorry, you lose! Click Play Again");		
					}

					if(wrongCounter===splitWord.length){
							guessAllow--;
							wrongGuess.push(userGuess);
							wrongCounter = 0;
					}
					else {
							wrongCounter=0;
					}
					

				var getWin = document.getElementById("getWin");
							var winUpdate = document.createElement("div");
							getWin.innerHTML = "Wins: "+wins;
							getWin.appendChild(winUpdate);

				var getLoss = document.getElementById("getLoss");
							var lossUpdate = document.createElement("div");
							getLoss.innerHTML = "Losses: "+ losses;
							getLoss.appendChild(lossUpdate);

				var guess1 = document.getElementById("guess1");
							var guessUpdate = document.createElement("div");
							guess1.innerHTML = "Guesses Left: "+ guessAllow;
							guess1.appendChild(guessUpdate);

				var usedLetters = document.getElementById("usedLetters");
							var letterUpdate = document.createElement("div");
							usedLetters.innerHTML = "Used Letters: "+ wrongGuess;
							usedLetters.appendChild(letterUpdate);

				var wordDisp = document.getElementById("wordDisp");
							var wordUpdate = document.createElement("div");
							wordDisp.innerHTML =  emptyWord;
							wordDisp.appendChild(wordUpdate);
	}	
}
   



	


		
		

		



		


		

	    	   




//Function for game play


