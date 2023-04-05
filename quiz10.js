$(document).ready(function() {
    var questions = ["Question 1:Which is the west side of the KZ?", "Question 2:What sea is located in Aktau?"];
	var answers = ["Aktau",	"Caspian Sea"];
	var choiceOptions = [["Aktau", "Almaty", "Taraz", "Astana"], ["Red Sea", "Pacific Ocean", "Caspian Sea", "Balkash Sea"]];

	// To generate quiz questions
	function generateQuestions() {
		var output = "";
		for(var i=0; i<questions.length; i++) {
			output += "<h3>" + questions[i] + "</h3>";
			output += "<div>";
			for(var j=0; j<choiceOptions[i].length; j++) {
				output += "<label><input type='radio' name='question" + i + "' value='" + choiceOptions[i][j] + "'>" + choiceOptions[i][j] + "</label><br>";
			}
			output += "</div>";
		}
		$("#questions").html(output);
	}

	// To check quiz answers
	function checkAnswers() {
		var score = 0;
		for(var i=0; i<questions.length; i++) {
			var selected = $("input[name='question" + i + "']:checked").val();
			if(selected == answers[i]) {
				score++;
			}
		}
		$("#score").html("Score: " + score + " out of " + questions.length);
	}

	
	generateQuestions();

	$("#submit").click(function(event) {
		event.preventDefault();
		checkAnswers();
	});

});
