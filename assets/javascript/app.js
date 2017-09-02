// Load jQuery 

$( document ).ready(function() {

var timer = 60;

var score = 0;

var clockRunning = false;

var questionLoaded = false;

// Link answers to selections

var answer1 = '<h3 id="option2">Mercedes Benz</h3>';

var answer2 = '<h3 id="option4">Aston Martin</h3>';

var answer3 = '<h3 id="option1">Ford F-150</h3>';

var answer4 = '<h3 id="option2">Cadillac Escalade</h3>';

// Run function beginning game
// Start button appears in front of users

$(".start").show();
$(".questions").hide();

$("#start").click(function(){
	$(".start").hide();
    $(".questions").show();
    $("#countdown").html(timer);
    var intervalID = setInterval(function() {timer--; $("#countdown").html(timer);}, 1000);
    setTimeout(timeUp, 60000);
    loadQuestion();
});

// Questions and corresponding themes

var questions = {

	question1: {
		script: "Which car company created the model nicknamed 'Gullwing'?",
		option1: "Fiat",
		option2: "Mercedes Benz",
		option3: "Ferrari",
		option4: "Porsche",
		answer: "Mercedes Benz",
		feedbackRight: "Correct! The answer was Mercedes Benz",
		feedbackWrong: "Incorrect. The answer was Mercedes Benz"
	},

	question2: {
		script: "Which brand is James Bond known for driving?",
		option1: "Porsche",
		option2: "Jaguar",
		option3: "Bentley",
		option4: "Aston Martin",
		answer: "Aston Martin",
		feedbackRight: "Correct! The answer was Aston Martin",
		feedbackWrong: "Incorrect. The answer was Aston Martin"
	},

	question3: {
		script: "Which of the following is the best selling model in the U.S.?",
		option1: "Ford F-150",
		option2: "Toyota Corolla",
		option3: "Volkswagen Jetta",
		option4: "Chevy Tahoe",
		answer: "Ford F-150",
		feedbackRight: "Correct! The answer was the Ford F-150",
		feedbackWrong: "Incorrect. The answer was the Ford F-150"
	},

	question4: {
		script: "Which car model is referenced most often in rap songs?",
		option1: "Rolls Royce Phantom",
		option2: "Cadillac Escalade",
		option3: "Bugatti Veyron",
		option4: "Range Rover Sport",
		answer: "Cadillac Escalade",
		feedbackRight: "Correct! The answer was the Cadillac Escalade",
		feedbackWrong: "Incorrect. The answer was the Cadillac Escalade"
	},
};

// Random question is selected from an array

var questionOptions = [questions.question1, questions.question2, questions.question3, questions.question4];
var questionUsed = questionOptions[Math.floor(Math.random() * questionOptions.length)];

// First question and answers are loaded
// If clock hits zero, user is out of time and is given feedback

function timeUp() { // NOT WORKING
	questionLoaded = false; // may not be necessary

	$("#question").html("Time Up! Game over");
	$("#countdown").html(0);
	timer = undefined;
	clearInterval(setTimeout);
	$("#option1").html("");
	$("#option2").html("");
	$("#option3").html("");
	$("#option4").html("");

};

function loadQuestion() {
	questionLoaded = true;  

	console.log(questionUsed.answer);

	$("#countdown").html(timer);
	$("#question").html(questionUsed.script);
	$("#option1").html(questionUsed.option1);
	$("#option2").html(questionUsed.option2);
	$("#option3").html(questionUsed.option3);
	$("#option4").html(questionUsed.option4);

	$("#option1, #option2, #option3, #option4").on('click', function() {
		var selection = $(this).text();	
		console.log(selection);
		console.log(questionUsed.answer);
		if (selection === questionUsed.answer) {
			correct();
		} else if (selection !== questionUsed.answer) {
			incorrect();
		};
	});

};

// User selects choice and is directed to answer for 3 seconds

function correct() {
	questionLoaded = false; // may not be necessary

	$("#question").html("Score!");
	$("#option1").html(questionUsed.feedbackRight);
	$("#option2").html("");
	$("#option3").html("");
	$("#option4").html("");
	$("#score").html(score += 1);
	setTimeout(nextQuestion, 3000);
};

function incorrect() {
	questionLoaded = false; // may not be necessary

	$("#question").html("Nope!");
	$("#option1").html(questionUsed.feedbackWrong);
	$("#option2").html("");
	$("#option3").html("");
	$("#option4").html("");
	$("#score").html(score);
	setTimeout(nextQuestion, 3000);
};

//Feedback slide shows responses and then gives reset option

function gameOver() {
	questionLoaded = false; // may not be necessary

	$("#question").html("Game Over!");
	$("#option1").html("");
	$("#option2").html("");
	$("#option3").html("");
	$("#option4").html("");
	$("#score").html("Your final score: " + score);

	setTimeout(nextQuestion, 3000);
};

// Clock resets and new question is loaded

function nextQuestion() {
	var indexQ = questionOptions.indexOf(questionUsed);
	questionOptions.splice(indexQ, 1);
	questionUsed = questionOptions[Math.floor(Math.random() * questionOptions.length)];
	console.log(questionOptions);
	if (questionOptions.length === 0) {
		gameOver();
	} else {
		loadQuestion();
	};
};

});

// Questions are not logging as correct after first selection
// Not running through each question in array
// Cause and solution for errors are unknown
