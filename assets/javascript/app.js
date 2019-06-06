$( document ).ready(function() {

// this is for the on click function (button) that starts the game
$("#startButton").on("click", function (){

// clicking the start button will trigger the questions div to display
    $(".container").show();
    console.log("Im here!");

    // $(this).hide();
});

// this sets the timer in seconds for how long the player has to complete the game
var number = 30
$("#timeRemaining").on("click", run);
    // Add a decrement function to decrease the number of seconds
    // Display the time remaining until time is up 
    // Use the #timeRemaining div
    // When the timer reaches 0 seconds, stop the function
    // Alert the user that the time is up. Show an html message with "Good job!"
    // Check the player choices for corrent and incorrect reponses and unanswered questions


// this sets the message shown to the player once time is up
var timeUpMessage = "Good job!";

// Set the run function to specify the time interval for the decrement function to equal one second per decrement
function run (){
    counter = setInterval(decrement, 1000);
}

    // Set the stop function



// the following triviaGame object holds all of the items needed for the trivia game quiz including the question and answer choice options. Answer value is index to the correct answer in the array.
var triviaGame = {
    questionsText: [
    {
        question: "What was the name of the first Bond film?",
        answerOptions: ["Dr. No", "Casino Royale", "On Her Majesty&rsquo;s Secret Service"],
        id: "question-one",
        answer: 0
    }, {
        question: "SPECTRE stands for Special Executive For Counter-Intelligence, Terrorism, Revenge and ... what?",
        answerOptions: ["Extinction", "Extortion", "Examination"],
        id: "question-two",
        answer: 1
    }, {
        question: "Which film featured London&rsquo;s Millenium Dome?",
        answerOptions: ["Quantum of Solace", "The World Is Not Enough", "A View To A Kill"],
        id: "question-three",
        answer: 1
    }, {
        question: "What is the codename of Goldfinger&rsquo;s plan to rob Fort Knox?",
        answerOptions: ["Hold The Fort", "Gold Run", "Operation Grand Slam"],
        id: "question-four",
        answer: 2
    }, {
        question: "What does the &ldquo;oo&rdquo; signify in 007?",
        answerOptions: ["The rank of commander", "A license to kill", "A license to carry firearms"],
        id: "question-five",
        answer: 1
    }, {
        question: "What is Moonraker?",
        answerOptions: ["A space shuttle", "A laser telescope", "A plan to bomb the moon"],
        id: "question-six",
        answer: 0
    }, {
        question: "Who sang the title theme for <em>Diamonds Are Forever</em>?",
        answerOptions: ["Rita Coolidge", "Nancy Sinatra", "Shirley Bassey"],
        id: "question-seven",
        answer: 2
    }, {
        question: "What famous landmark does Grace Jones jump from in <em>A View To A Kill</em>?",
        answerOptions: ["Big Ben", "The Empire State Building", "The Eiffel Tower"],
        id: "question-eight",
        answer: 2
    }, {
        question: "Which villain had a manservant called Nick Nack?",
        answerOptions: ["Francisco Scaramanga, <em>The Man With The Golden Gun</em>", "Elektra King, <em>The World Is Not Enough</em>", "Rosa Klebb, <em>From Russia With Love</em>"],
        id: "question-nine",
        answer: 0
    }, {
        question: "Alongside Bernard Lee and Dame Judi Dench, who else has played &ldquo;M&rdquo;?",
        answerOptions: ["Pedro Armendariz", "Anthony Dawson", "Robert Brown"],
        id: "question-ten",
        answer: 2
    }
    ]}


    // The following results variables will be presented to the user once the game session is over
        var totalScoreHTML = " ";
        var toatlGuessed = [];
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var notAnswered = 0;


    // for loop will traverse the triviaGame object for each question and determine 
    // if the player answers match the indices for the correct answers
    // Increment the correctAnswers score by 1



    // else run the questions at each index and checkForAnswer function
    // this will provide update numbers for incorrect and notAnswered variables.


    // Display the results of the above function in the gameResults div
    // Build results using html and text strings
    $(".gameResults").html("Correct Answers: " + correctAnswers + "<br />" + "Incorrect Answers: " + incorrectAnswers + "<br />" + "Unanswered Questions: " + notAnswered);












// add a function with  onclick event for the finishedButton that will check the player answer choices
// and stops the timer when "Finsihed" button is pressed
$("#finishedButton").on("click", function() {
	checkAnswers();
	stop();
	$("#playerEndMessage").html("Well done! Try again.");
	})

});


//pseudocode
// Game starts with background [display background art, logo art, instruction text] and Start screen [button]

// When player clicks Start, the Main Text screen displays [Show titling, time remaining stopwatch, and question/answer text]

// Player can select radio buttons for each question

// Game ends when the time runs out

// Player is presented with a splash screen displaying:
//   All Done!

//   Correct Answers total
//   Incorrect Answers total
//   Unanswered total

//   TOTAL === 10 [number of questions]