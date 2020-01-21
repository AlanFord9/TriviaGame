var startButton = document.getElementById('start')
var questions = document.getElementById('questions')
var submitButton = document.getElementById('submit')
var clockRunning = false
var clock = 30
var timer = document.getElementById('timer')
var allQuestions = [
    {
        question: "What does Rick's catchphrase 'wubba lubba dub dub' mean?",
        answers: [
            "I'm a genius",
            "I'm in great pain",
            "Let's party!"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the name of Morty's crush?",
        answers: [
            "Jessica",
            "Heather",
            "Summer"
        ],
        correctAnswer: 0
    },
    {
        question: "What vegetable did Rick famously turn himself into?",
        answers: [
            "Cucumber",
            "Tomato",
            "Pickle"
        ],
        correctAnswer: 2
    },
    {
        question: "Who killed bird person?",
        answers: [
            "Tammy",
            "Beth",
            "Summer"
        ],
        correctAnswer: 0
    },
    {
        question: "Which theme park ride was Rick's idea for anatomy park?",
        answers: [
            "Its a Small Intestine",
            "Spleen Mountain",
            "Pirates of the Pancreas"
        ],
        correctAnswer: 2
    },
    {
        question: "You son of a b****   ........",
        answers: [
            "I'm out",
            "You got me",
            "I'm in"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the name of the epic movie with gladiator grandmas and giant cat monsters?",
        answers: [
            "Jetpack Grandmas",
            "Two Brothers...?",
            "Space Wars"],
        correctAnswer: 1
    },
    {
        question: "Umm, okay last one. Just make like 5 three-pointers and we're good..",
        answers: [
            "1 three-pointer",
            "4 three-pointers",
            "5 three-pointers"
        ],
        correctAnswer: 2
    },
]

$("#start").on("click", startQuiz) 



function startQuiz() {


    for(i = 0; i < allQuestions.length; i++) {

        $(questions).append("<h3>" + allQuestions[i].question + "</h3>");
        
        for(j = 0; j < allQuestions[i].answers.length; j++){

            $(questions).append("<div class=form-check form-check-inline>" + 
            "<input id=answer name=one class=form-check-input type=checkbox data-value="+[j]+">" +
            "<label class=form-check-label>" + allQuestions[i].answers[j] + "</label>"
            + "</div>");

        }


        // show questions and answer options

    }

    var timerId = setInterval(countdown, 1000);
    function countdown(){
        if (clock == 0) {
            clearTimeout(timerId);
            showResults();
        } else {
            timer.innerHTML = 'Timer: ' + clock;
            clock--;
        }
        }

}

// creat logic for if the correct/incorrect answer was chosen

function userAnswer() {
    if ($('input.form-check-input').prop('checked')){        
        console.log($('input.form-check-input').val());
    }
}

submitButton.addEventListener('click', showResults);

function showResults() {
    userAnswer()
    alert("All Done!");
    var correct = 0;
    var wrong = 0;
    var noAnswer = 0;

    // change from text to html, add header inside
    $("#congrats").text("Congrats, you finished or whatever..");
    $("#correct").text("Correct Answers: " + correct);
    $("#wrong").text("Incorrect Answers: " + wrong);
    $("#unanswered").text("Unanswered: " + noAnswer);
}

// show results and end timer after button click