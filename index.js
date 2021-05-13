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

var counter = 0
var score = 0

function init(){
  document.getElementById('start').remove()
  var question = document.createElement('h1')
  question.innerHTML = questions[counter].title
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
  counter++
  document.getElementById('title').innerHTML = questions[counter].title
  var buttons = document.getElementsByClassName("answer")
  Array.from(buttons).forEach((el, i) => {
    el.innerHTML = questions[counter].choices[i]
  })
}

function checkAnswer(event){
  if(this.innerHTML === questions[counter].answer){
    score++
  }
  if(counter === questions.length - 1){
    end()
  }

  setTimeout(() => {
      nextQuestion()
  }, 50);
}

function end(){
  document.getElementById('title').remove()
  Array.from(document.getElementsByClassName('answer')).forEach(el => el.remove())

  var title = document.createElement('h1')
  var subtitle  = document.createElement('h2')
  var playerScore = document.createElement('p')

  title.innerHTML = 'Game Over'
  subtitle.innerHTML = 'Your score'
  playerScore.innerHTML = score

  document.body.appendChild(title)
  document.body.appendChild(subtitle)
  document.body.appendChild(playerScore)
}

document.getElementById('start').addEventListener('click',init)
