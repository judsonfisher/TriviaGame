$( document ).ready(function() {

// Insert "Start Game" functionality (hides div of regular content until Start is clicked)
// Insert question data onto page, begin countdown

$(".start").show();
$(".questions").hide();

$("#start").click(function(){
	$(".start").hide();
    $(".questions").show();
    populate(question1);
});

// Create variables (score, time)

var timer = 30;

var score = 0;

// Create foundational questions and functions
var question1 = {
	question: "Which car company created the model nicknamed 'Gullwing'?",
	option1: "Fiat",
	option2: "Mercedes Benz",
	option3: "Ferrari",
	option4: "Porsche",
	// correct: question1.option2,
}

var question2 = {
	question: "Which brand is James Bond known for driving?",
	option1: "Porsche",
	option2: "Jaguar",
	option3: "Bentley",
	option4: "Aston Martin",
	// correct: question2.option4,
}

var question3 = {
	question: "Which of the following is the best selling model in the U.S.?",
	option1: "Ford F-150",
	option2: "Toyota Corolla",
	option3: "Volkswagen Jetta",
	option4: "Chevy Tahoe",
	// correct: question3.option1,
}

var question4 = {
	question: "Which car model is referenced most often in rap songs?",
	option1: "Rolls Royce Phantom",
	option2: "Cadillac Escalade",
	option3: "Bugatti Veyron",
	option4: "Range Rover Sport",
	// correct: question4.option2,
}

// unsure if this is useful.. var questionOrder = [question1, question2, question3, question4];

function populate(x) {
	$("#question").html(x.question);
	$("#option1").html(x.option1);
	$("#option2").html(x.option2);
	$("#option3").html(x.option3);
	$("#option4").html(x.option4);
	countdown();
}

function countdown() { // This shit needs tweaking
	timer = 30;
	$("#countdown").html(timer);
	setTimeout(function(){ 
		timer--;
		$("#countdown").html(timer);
		console.log(timer);
	}, 1000);
}

// Insert "Start Game" functionality (hides div of regular content until Start is clicked)
// Insert question data onto page, begin countdown

// Link correct answer to options within objects

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).





});