$( document ).ready(function(){ 
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
    
})

// the following variable holds all of the items needed for the trivia game quiz including the question and answer choice options. Answer value is index to the correct answer in the array.
var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 40,
    timerOn: false,
    timerId : '',
    questions: {
        q1: "What was the name of the first Bond film?",
        q2: "SPECTRE stands for Special Executive For Counter-Intelligence, Terrorism, Revenge and ... what?",
        q3: "Which film featured London's Millenium Dome?",
        q4: "What is the codename of Goldfinger's plan to rob Fort Knox?",
        q5: "What does the 'oo' signify in 007?",
        q6: "What is Moonraker?",
        q7: "Who sang the title theme for DIAMONDS ARE FOREVER?",
        q8: "What famous landmark does Grace Jones jump from in A VIEW TO A KILL?",
        q9: "Which villain had a manservant called Nick Nack?",
    },   
    options: {
        q1: ["Dr. No", "Casino Royale", "On Her Majesty's Secret Service"],
        q2: ["Extinction", "Extortion", "Examination"],
        q3: ["Quantum of Solace", "The World Is Not Enough", "A View To A Kill"],
        q4: ["Hold The Fort", "Gold Run", "Operation Grand Slam"],
        q5: ["The rank of commander", "A license to kill", "A license to carry firearms"],
        q6: ["A space shuttle", "A laser telescope", "A plan to bomb the moon"],
        q7: ["Rita Coolidge", "Nancy Sinatra", "Shirley Bassey"],
        q8: ["Big Ben", "The Empire State Building", "The Eiffel Tower"],
        q9: ["Francisco Scaramanga, The Man With The Golden Gun", "Elektra King, The World Is Not Enough", "Rosa Klebb, From Russia With Love"],
    },
    answers: {
        q1: "Dr. No",
        q2: "Extortion",
        q3: "The World Is Not Enough",
        q4: "Operation Grand Slam",
        q5: "A license to kill",
        q6: "A space shuttle",
        q7: "Shirley Bassey",
        q8: "The Eiffel Tower",
        q9: "Francisco Scaramanga, The Man With The Golden Gun",
    },
    
// Game start
startGame: function(){
    // restarting game results
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    
    // show game section
    $('#game').show();
    
    // empty last results
    $('#results').html('');
    
    // show timer
    $('#timer').text(trivia.timer);
    
    // remove start button
    $('#start').hide();

    $('#remaining-time').show();
    
    // ask first question
    trivia.nextQuestion();   
},

// Loop through and display questions and options 
nextQuestion : function(){
    
    // set timer to 10 seconds for each question
    trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);
    
    if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
}
    
// gets all the questions then indexes the current questions
var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);
   
// an array of all the user options for the current question
var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
// creates all the trivia guess options in the html
$.each(questionOptions, function(index, key){
    $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
})
    
},
// method to decrement counter and count unanswered if timer runs out
timerRunning : function(){
    // if timer still has time left and there are still questions left to ask
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
      $('#timer').text(trivia.timer);
      trivia.timer--;
        if(trivia.timer === 4){
          $('#timer').addClass('last-seconds');
        }
    }
    // the time has run out and incremented question went unanswered, run result
    else if(trivia.timer === -1){
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Time is up! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
    }
    // if all the questions have been shown end the game, show results
    else if(trivia.currentSet === Object.keys(trivia.questions).length){
      
      // adds results of game (correct, incorrect, unanswered) to the page
      $('#results')
        .html('<h3>Well done!</h3>'+
        '<p>Correct: '+ trivia.correct +'</p>'+
        '<p>Incorrect: '+ trivia.incorrect +'</p>'+
        '<p>Unanswered: '+ trivia.unanswered +'</p>'+
        '<p>Play again!</p>');
      
      // hide game sction
      $('#game').hide();
      
      // show start button to begin a new game
      $('#start').show();
    }
    
  },
  // Checking for correct answers
    guessChecker : function() {
    
    // timer ID for gameResult setTimeout
    var resultId;
    
    // the answer to the current question being asked
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
    
    // if the text of the option picked matches the answer of the current question, increment correct
    if($(this).text() === currentAnswer){
      // turn button green for correct
      $(this).addClass('btn-success').removeClass('btn-info');
      
      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
    }
    // else the user picked the wrong option, increment incorrect
        else {
      // turn button clicked red for incorrect
      $(this).addClass('btn-danger').removeClass('btn-info');
      
      trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Try again! '+ currentAnswer +'</h3>');
    }
    
  },
  // method to remove previous question results and options
  guessResult : function(){
    
    // increment to next question set
    trivia.currentSet++;
    
    // remove the options and results
    $('.option').remove();
    $('#results h3').remove();
    
    // begin next question
    trivia.nextQuestion();
     
  }

}