// creat click event to start timer and quiz


var startButton = document.getElementById('start')
var questions = document.getElementById('questions')
var qAnswers = document.getElementById('answers')
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
        question: "You son of a b****...",
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
        question: "Umm, okay last one. Just make like 5 three-pointers and we're good",
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
        console.log(allQuestions[i]);
            // assign questions/answers to respective html
    };

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

// show ending results after timer finishes or "done" button is selected

function showResults() {


}


submitButton.addEventListener('click', showResults);