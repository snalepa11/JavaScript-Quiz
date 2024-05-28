let currentScore = 0;
let questionOn = 0;
let quizTimer = 0;

let highScoresArr = [];

const javascriptQuestions = [
    {
        question: "What kinds of data types are the following: numbers, strings, booleans, and symbols?",
        answers: {
            A: 'A: primary',
            B: 'B: primitive',
            C: 'C: singular',
            D: 'D: major'
        },
        correctAnswer: 'B'
    },
    {
        question: "What are undeclared variables?",
        answers: {
            A: 'A: variables that do not exist in a program and are not declared',
            B: 'B: variables that are written in the wrong syntax',
            C: 'C: variables that return as false',
            D: 'D: variables that are too complex'
        },
        correctAnswer: 'A'
    },
    {
        question: "What are undefined variables?",
        answers: {
            A: 'A: variables that return as false',
            B: 'B: varaibles that are written in wrong syntax',
            C: 'C: variables that have been declared but have not been given any value',
            D: 'D: variables that do not exist in a program and are not declared'
        },
        correctAnswer: 'C'
    },
    {
        question: "What 'this' keyword in javascript?",
        answers: {
            A: 'A: this, refers to the variable it is next to',
            B: 'B: this, refers to a string saying this',
            C: 'C: this, refers to an array',
            D: 'D: this, refers to the object from where it was called'
        },
        correctAnswer: 'D'
    },
    {
        question: "Which symbol is used for single line comments in javascript?",
        answers: {
            A: 'A: //',
            B: 'B: /*',
            C: 'C: *',
            D: 'D: ()'
        },
        correctAnswer: 'A'
    }
];

// Generic Functions
function updateTimerText(timerText) {
    var timeEL = document.getElementById("timer")
    timeEL.textContent = timerText
}

function removeClass(sectionId) {
    document.getElementById(sectionId).removeAttribute("class");
}

function addHideClass(sectionId) {
    document.getElementById(sectionId).setAttribute("class", "hide");
}

// Header Section
// ------------------------------------------------------------------
function viewHighScores() {
    addHideClass("header-section");
    addHideClass("intro-section");
    addHideClass("question-section")
    addHideClass("submit-initials-section")
    removeClass("high-scores-section");
}
document.getElementById('high-scores-link').addEventListener("click", viewHighScores)

// Quiz Intro Section
// ------------------------------------------------------------------
function viewScoresSection()  {
    addHideClass("header-section")
    addHideClass("intro-section")
    addHideClass("question-section")
    removeClass("submit-initials-section")
    addHideClass("high-scores-section")

    const yourScoreElement = document.getElementById("your-score");
    yourScoreElement.innerText = "Your final score is " + currentScore + "."
}
function startTimer() {
    var timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        if (quizTimer === 0) {
            updateTimerText('Times up!')
            viewScoresSection();

            clearInterval(timerInterval);
        } else {
            updateTimerText("Time: " + quizTimer)
            quizTimer--;
        }
    }
}
function validateQuestionAnswer(element) {
    if (javascriptQuestions[questionOn].correctAnswer === element.target.innerText[0]) {
        currentScore++;
    }

    questionOn++;
    if (questionOn === 5) {
        viewScoresSection();
    } else {
        displayQuestion();
    }
}
function displayQuestion() {
    var displayQuestionEl = document.getElementById("display-question")
    var displayChoicesEl = document.getElementById("display-choices")

    // Show Question
    displayQuestionEl.textContent = javascriptQuestions[questionOn].question

    // Show Choices
    let letterChoices = ["A", "B", "C", "D"];
    for (let letterChoiceOn = 0; letterChoiceOn < letterChoices.length; letterChoiceOn++) {
        let elementId = "choice"+ letterChoices[letterChoiceOn]
        if (document.getElementById(elementId)) {
            document.getElementById(elementId).remove();
        }

        let choiceButton = document.createElement("button")
        choiceButton.setAttribute('id', elementId)
        choiceButton.style.marginBottom = "10px"
        choiceButton.style.textAlign = "left"
        choiceButton.textContent = javascriptQuestions[questionOn].answers[letterChoices[letterChoiceOn]]
        choiceButton.onclick = validateQuestionAnswer;

        displayChoicesEl.append(choiceButton)
    }
}
function startQuiz() {
    // Always rest variables for new quiz
    currentScore = 0;
    questionOn = 0;
    quizTimer = 5;

    viewQuizQuestionSection();
    startTimer();
    displayQuestion();
}
document.getElementById('start-quiz-btn').addEventListener("click", startQuiz);

// Question Section
// ------------------------------------------------------------------
function viewQuizQuestionSection() {
    removeClass("header-section")
    addHideClass("intro-section")
    removeClass("question-section")
    addHideClass("submit-initials-section")
    addHideClass("high-scores-section")
}

// Submit Initials Section
// ------------------------------------------------------------------
function submitInitialsToHighScores () {
    let usersInitials = document.getElementById('users-initials-input').value

    highScoresArr.push(
        {
            initials : usersInitials,
            score: currentScore
        }
    );

    let highScoresArrayDisplaySection = document.getElementById("display-high-scores")
    while(highScoresArrayDisplaySection.firstChild) {
        highScoresArrayDisplaySection.removeChild(highScoresArrayDisplaySection.firstChild)
    }

    // We need to add <p> with the objects.
    highScoresArr.map((highScore, index) => {
        const para = document.createElement("p");
        const node = document.createTextNode(`${index}. ${highScore.initials} - ${highScore.score}`);
        para.appendChild(node);

        const element = document.getElementById("display-high-scores");
        element.appendChild(para);
    })

    viewHighScores();
}
document.getElementById('submit-users-initials').addEventListener("click", submitInitialsToHighScores)

// High Scores Section
function viewQuizIntroSection() {
    removeClass("header-section");
    removeClass("intro-section");
    addHideClass("question-section");
    addHideClass("submit-initials-section");
    addHideClass("high-scores-section");

    updateTimerText("Time: " + quizTimer)
}
function clearHighScores() {
    highScoresArr = []
    let highScoresArrayDisplaySection = document.getElementById("display-high-scores")
    while(highScoresArrayDisplaySection.firstChild) {
        highScoresArrayDisplaySection.removeChild(highScoresArrayDisplaySection.firstChild)
    }
}
document.getElementById('go-back-btn').addEventListener("click", viewQuizIntroSection)
document.getElementById('clear-highscores-btn').addEventListener("click", clearHighScores)

// ------------------------------------------------------------------
// Hide sections not needed as soon as page is loaded.
addHideClass("question-section");
addHideClass("submit-initials-section");
addHideClass("high-scores-section");