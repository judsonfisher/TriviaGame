$( document ).ready(function() {

var timer = 5;

var score = 0;

var intervalID;

var clockRunning = false;

// Run function beginning game
// Start button appears in front of users

$(".start").show();
$(".questions").hide();

$("#start").click(function(){
	$(".start").hide();
    $(".questions").show();
    // Include function to load questions
    loadQuestion();
});

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

console.log(questionUsed);

// First question and answers are loaded

function timeUp() { // NOT WORKING
	setInterval(function() {timer = 0; $("#countdown").html(timer); });
	$("#question").html("Time Up! YOU LOSE");
	$("#option1").html(questionUsed.feedbackWrong);
	$("#option2").html("");
	$("#option3").html("");
	$("#option4").html("");

	setTimeout(nextQuestion, 3000);
};

function loadQuestion() {
	timer = 5;
	setInterval(function() {timer--; $("#countdown").html(timer); }, 1000);
	setTimeout(timeUp, 5000);

	$("#countdown").html(timer);
	$("#question").html(questionUsed.script);
	$("#option1").html(questionUsed.option1);
	$("#option2").html(questionUsed.option2);
	$("#option3").html(questionUsed.option3);
	$("#option4").html(questionUsed.option4);
};

function nextQuestion() {
	var indexQ = questionOptions.indexOf(questionUsed);
	questionOptions.splice(indexQ, 1);
	questionUsed = questionOptions[Math.floor(Math.random() * questionOptions.length)];
	loadQuestion();
}



// User selects choice and is directed to answer for 3 seconds, stops clock

// Clock rests and new question is loaded

// If clock hits zero, user is out of time and is given feedback

//Feedback slide shows responses and then gives reset option


});





// for later?

// setTimeout(function(){ 
		// 	if (timer === 0) {
		// 	$("#option1").html("you lose");
		// };
		// }, 30000);