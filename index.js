// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var counter = 1
var score = 0

function init(){
  var question = document.createElement('h1')
  question.innerHTML = questions[0].title
  question.setAttribute('id', 'title')
  document.body.appendChild(question)

  questions[0].choices.forEach((el, i) => {
    var button = document.createElement('button')
    button.innerHTML = el
    button.setAttribute('class', 'answer')
    button.addEventListener('click', checkAnswer)
    document.body.appendChild(button)
  })
}

function nextQuestion(){
  document.getElementById('title').innerHTML = questions[counter].title
  var buttons = document.getElementsByClassName("answer")
  Array.from(buttons).forEach((el, i) => {
    el.innerHTML = questions[counter].choices[i]
  })
  counter++
}

function checkAnswer(event){
  console.log(this)

  setTimeout(() => {
      nextQuestion()
  }, 50);
}

document.getElementById('start').addEventListener('click',init)

// document.addEventListener('click', function (event) {
//   if (event.target.matches('.answer')) {
//     var currentQuestion = questions[counter - 1];
//     console.log('event.target.dataset.choice', event.target.dataset.choice, currentQuestion.answer)
//     if (currentQuestion.answer === event.target.dataset.choice) {
//       console.log('Correct answer')
//     nextQuestion()
//     } else {
//       console.log('Wrong answer')
//     }
//   }
// })