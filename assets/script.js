function startTimer() {
    var timeEL = document.getElementById("timer")

    var secondsLeft = 30;
    var timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEL.textContent = 'Times up!';
        } else {
            timeEL.textContent = "Time: " + secondsLeft;
            secondsLeft--;
        }
    }
}

function askQuestions(currentScore) {
    var displayQuestionEl = document.getElementById("display-question")
    var displayChoicesEl = document.getElementById("display-choices")
    
    var myQuestions = [
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

    var questionOn = 0;
    var score = 0;

    function checkAnswer(element){
        valueSelected = element.target.innerText;

        if (myQuestions[questionOn].correctAnswer === valueSelected[0]) {
            score++;  
        } 

        questionOn++;   

        if (questionOn < 5) {
            displayQuestion();
            displayChoices();
        }
    }

    function displayQuestion() {
        displayQuestionEl.textContent = myQuestions[questionOn].question
    }

    function displayChoices() {
        var letterChoices = ["A", "B", "C", "D"];

        for (let letterChoiceOn = 0; letterChoiceOn < letterChoices.length; letterChoiceOn++) {
            
            var elementId = "choice"+ letterChoices[letterChoiceOn]
            if(document.getElementById(elementId)) {
                var choiceElement = document.getElementById(elementId);
                choiceElement.remove();
            }

            var choiceButton = document.createElement("button")
            choiceButton.setAttribute('id', elementId)
            choiceButton.textContent = myQuestions[questionOn].answers[letterChoices[letterChoiceOn]]
            choiceButton.onclick = checkAnswer;

            displayChoicesEl.append(choiceButton)
        }
    };

    displayQuestion();
    displayChoices();
}

function runCode() {
    startTimer();
    askQuestions();

    var introEL = document.getElementById("quiz-intro")
    var topScoresEl = document.getElementById("scores-section")

    function hideIntro() {
        introEL.classList.add("hide")
    }
    hideIntro();

    // function hideScores() {
    //     topScoresEL.classList.add("hide")
    // }
    // hideScores();
};



function gameOver() {
    if (secondsLeft === 0) {
        // TODO
    }
}

function storeHighScores(event) {
    // TODO
}

function showHighScores() {
    // TODO
}

document.getElementById('startBtn').addEventListener("click", runCode);