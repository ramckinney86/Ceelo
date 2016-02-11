// Ceelo - Hot hand at a dice game
// Written in Javascript
// RM 2016

function diceRoll() {
	return Math.ceil(Math.random() * 6);
}

function purple() {
	document.getElementById("message").className = "purple";
}

function roll() {
	var roll1 = diceRoll();
	var roll2 = diceRoll();
	var roll3 = diceRoll();

	//Create score
	var score = ""+roll1+roll2+roll3;

	//Calculate score
	if(roll1 == roll2 && roll2 == roll3) {
		finalScore = "TRIP " + roll2 + "s!!!";
		document.getElementById("message").className = "trips";
	//make if statement for CONTAINS 123
	} else if (score.indexOf('1') >= 0 && score.indexOf('2') >=0 && score.indexOf('3') >= 0) {
		finalScore = "123 You LOSE!!!";
		document.getElementById("message").className = "lose";
	//make if statement for CONTAINS 456
	} else if (score.indexOf('4') >= 0 && score.indexOf('5') >=0 && score.indexOf('6') >= 0) {
		finalScore = "456 You WIN!!!";
		document.getElementById("message").className = "win";
	} else if(roll1 == roll2) {
		finalScore = roll3;
		purple();
	} else if(roll2 == roll3) {
		finalScore = roll1;
		purple();
	} else if(roll1 == roll3) {
		finalScore = roll2;
		purple();
	} else {
		finalScore = "Roll again!";
		document.getElementById("message").className = "black";
	};

	// displays roll on page
	document.getElementById("first-die").className = "dice dice-" + roll1;
	document.getElementById("second-die").className = "dice dice-" + roll2;
	document.getElementById("third-die").className = "dice dice-" + roll3;
	// displays score on page
  	document.getElementById("message").innerHTML = finalScore;
}

//cue animations for 123 and 456