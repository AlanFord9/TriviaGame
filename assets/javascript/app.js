// creat click event to start timer and quiz

var clockRunning = false
var timer = 30
var allQuestions = [
    {
        question: "What does Rick's catchphrase 'wubba lubba dub dub' mean?",
        answers: [
            "I'm a genius",
            "I'm in great pain",
            "Let's party!"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the name of Morty's crush?",
        answers: [
            "Jessica",
            "Heather",
            "Summer"
        ],
        correctAnswer: 1
    },
    {
        question: "What vegetable did Rick famously turn himself into?",
        answers: [
            "Cucumber",
            "Tomato",
            "Pickle"
        ],
        correctAnswer: 3
    },
    {
        question: "Who killed bird person?",
        answers: [
            "Tammy",
            "Beth",
            "Summer"
        ],
        correctAnswer: 1
    },
    {
        question: "Which theme park ride was Rick's idea for anatomy park?",
        answers: [
            "Its a Small Intestine",
            "Spleen Mountain",
            "Pirates of the Pancreas"
        ],
        correctAnswer: 3
    },
    {
        question: "You son of a b****...",
        answers: [
            "I'm out",
            "You got me",
            "I'm in"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the name of the epic movie with gladiator grandmas and giant cat monsters?",
        answers: [
            "Jetpack Grandmas",
            "Two Brothers...?",
            "Space Wars"],
        correctAnswer: 2
    },
    {
        question: "Umm, okay last one. Just make like 5 three-pointers and we're good",
        answers: [
            "1 three-pointer",
            "4 three-pointers",
            "5 three-pointers"
        ],
        correctAnswer: 3
    },
]

$("#start").on("click", startQuiz)


function startQuiz() {

}

// create questions to show up on button click

// creat logic for if the correct/incorrect answer was chosen

// show ending results after timer finishes or "done" button is selected

function showResults() {}


submitButton.addEventListener('click', showResults);