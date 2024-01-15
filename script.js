
function runCode(){

var timeEL = getElementById("timer")

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
            timeEl.textContent='00:'+secondsLeft;
        }
        secondsLeft--;
    }, 1000);
}

startTimer();


var myQuestions = [
    {
        question: "What kinds of data types are the following: numbers, strings, booleans, and symbols?",
        
            answers: {
                a: 'primary'
                b: 'primitive'
                c: 'singular'
                d: 'major'
            },

            correctAnswer: 'b'
        
    }
    {
        question: "What are undeclared variables?",

        answers: {
        a: 'variables that do not exist in a program and are not declared'
        b: 'variables that are written in the wrong syntax'
        c: 'variables that return as false' 
        d: 'variables that are too complex'
        },

        correctAnswer: 'a'

    }
    {
        question: "What are undefined variables?",

        answers: {
            a: 'variables that return as false'
            b: 'varaibles that are written in wrong syntax'
            c: 'variables that have been declared but have not been given any value'
            d: 'variables that do not exist in a program and are not declared'
        },

        correctAnswer: 'c'

    }
    {
        question: "What 'this' keywor din javascript?",

        answers: {
            a: ' this, refers to the variable it is next to'
            b: ' this, refers to a string saying this'
            c: ' this, refers to an array'
            d: ' this, refers to the object from where it was called'
        },

        correctAnswer: 'd'
    }
    {
        question: "Which symbol is used for single line comments in javascript?",

        answers: {
            a: '//'
            b: '/*'
            c: '*'
            d: '()'
        },

        correctAnswer: 'a'
    }

]
}

document.getElementById('startBtn').addEventListener("click" , runCode);