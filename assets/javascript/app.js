window.onload = function(){
	$("#start").click(trivia.begin);
	$("#reset").click(trivia.reset);
}

var counter = 0;
var timeCounnt;
var l=0;


var trivia = {
	questions: [
	{
		question:"What is the correct placement of this element?",
		rightAnswer: "once more with feeling!",
		answers: ["not here!","not here either!","once more with feeling!","too bad!"]
	},
	{
		question:"try this one now.",
		rightAnswer: "bingo!",
		answers: ["cold.", "getting warmer.", "bingo!", "red hot!"]
	},
	{
		question:"How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
		rightAnswer: "way too much!",
		answers: ["way too much!", "just enough to last.", "what were we talking about?", "julius ceaser!"]
	}
	],

	begin: function(){
		// console.log(counter);
		var currentQ = trivia.questions[0].question;
		// counter ++;
		$(".main-body").html("<h3>"+currentQ+"</h3>");
		var multipleChoice = $("<div>");
		$(".main-body").append(multipleChoice);
		var continueGame = $("<button>");
		continueGame.attr("id","continue");
		continueGame.text("next question");
		multipleChoice.addClass("col-md-6", "answers");
		var qSpace = $("<ol>");
		qSpace.addClass("col-md-12");
		for (i=0;i<=3;i++){
			qSpace.append("<li>" + trivia.questions[0].answers[i]+ "</li>");
			multipleChoice.append(qSpace);
			// console.log(i);
		}
		multipleChoice.append(continueGame);
		// console.log(counter);
		$("#continue").click(trivia.continue);
		$("li").on("click", trivia.selection);
		console.log("booyah");
		// $("li").click(trivia.selection);
	},

	continue: function(){
		if (l<trivia.questions.length-1){
			l++;
			var multipleChoice = $("<div>");
			console.log(l);
			counter ++;
			var currentQ = trivia.questions[counter].question;
			$(".main-body").html("<h3>"+currentQ+"</h3>");
			// console.log(counter);
			$(".main-body").append(multipleChoice);
			var continueGame = $("<button>");
			continueGame.attr("id","continue");
			continueGame.text("next question");
			multipleChoice.addClass("col-md-6", "answers");
			var qSpace = $("<ol>");
			qSpace.addClass("col-md-12");
			for (i=0;i<=3;i++){
				// console.log(i);
				// console.log(counter);
				qSpace.append("<li>" + trivia.questions[counter].answers[i]+ "</li>");
				multipleChoice.append(qSpace);
			}
			multipleChoice.append(continueGame);
		// console.log(counter);
		$("#continue").click(trivia.continue);
	}
},

selction: function(){
	console.log(this);
	if ($(this).text() === questions[counter].rightAnswer){
		console.log(this);
	}
},

generateWin: function(){

},

generateLoss: function(){

},

clock: function(){

},

reset: function(){

},

timeUp: function(){

}
}