
function runCode(){

var timeEL = document.getElementById("timer")

var introEL = document.getElementById("quiz-intro")

var displayQuestionEl = document.getElementById("display-question")

var displayChoicesEl = document.getElementById("display-choices")

function sendMessage() {
    timeEL.textContent = ('Times up!');
}

function startTimer() {
    var secondsLeft = 30;
    var timerInterval = setInterval(function() {
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        } else { 
            timeEL.textContent='00:'+secondsLeft;
        }
        secondsLeft--;
    }, 1000);
}

function hideIntro() {
    introEL.classList.add("hide")
}

hideIntro();
startTimer();


var myQuestions = [
    {
        question: "What kinds of data types are the following: numbers, strings, booleans, and symbols?",
        
            answers: {
                a: 'primary',
                b: 'primitive',
                c: 'singular',
                d: 'major'
            },

            correctAnswer: 'b'
        
    },

    {
        question: "What are undeclared variables?",

        answers: {
        a: 'variables that do not exist in a program and are not declared',
        b: 'variables that are written in the wrong syntax',
        c: 'variables that return as false',
        d: 'variables that are too complex'
        },

        correctAnswer: 'a'

    },

    {
        question: "What are undefined variables?",

        answers: {
            a: 'variables that return as false',
            b: 'varaibles that are written in wrong syntax',
            c: 'variables that have been declared but have not been given any value',
            d: 'variables that do not exist in a program and are not declared'
        },

        correctAnswer: 'c'

    },

    {
        question: "What 'this' keywor din javascript?",

        answers: {
            a: ' this, refers to the variable it is next to',
            b: ' this, refers to a string saying this',
            c: ' this, refers to an array',
            d: ' this, refers to the object from where it was called'
        },

        correctAnswer: 'd'
    },

    {
        question: "Which symbol is used for single line comments in javascript?",

        answers: {
            a: '//',
            b: '/*',
            c: '*',
            d: '()'
        },

        correctAnswer: 'a'
    }

]

function displayQuestion (){
    let question = myQuestions[0].question
    displayQuestionEl.textContent = question
}

function displayChoices (){
    let choicea = myQuestions[0].answers.a
    let choiceb = myQuestions[0].answers.b
    let choicec = myQuestions[0].answers.c
    let choiced = myQuestions[0].answers.d
    
    let choiceabutton = document.createElement("button")
    choiceabutton.textContent = choicea

    let choicebbutton = document.createElement("button")
    choicebbutton.textContent = choiceb

    let choicecbutton = document.createElement("button")
    choicebbutton.textContent = choicec

    let choicedbutton = document.createElement("button")
    choicebbutton.textContent = choiced

    displayChoicesEl.append(choiceabutton)
    displayChoicesEl.append(choicebbutton)
    displayChoicesEl.append(choicecbutton)
    displayChoicesEl.append(choicedbutton)
}

displayChoices();

var choicebtn

displayQuestion();
}



document.getElementById('startBtn').addEventListener("click" , runCode);