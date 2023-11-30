// defining the quiz data
const quizDB = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    ans: "ans3",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Mars",
    b: "Venus",
    c: "Jupiter",
    d: "Saturn",
    ans: "ans1",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    a: "Charles Dickens",
    b: "Jane Austen",
    c: "William Shakespeare",
    d: "Emily Brontë",
    ans: "ans3",
  },
  {
    question: "What is the largest mammal on Earth?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Hippopotamus",
    ans: "ans2",
  },
  {
    question: "In which year did the Titanic sink?",
    a: "1912",
    b: "1905",
    c: "1920",
    d: "1935",
    ans: "ans1",
  },
];

let question = document.querySelector(".question");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let opt4 = document.querySelector("#opt4");
let submit = document.querySelector("#submit");
let ans = document.querySelectorAll(".ans");
let showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
let loadQuestion = () => {
  let questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  opt1.innerHTML = questionList.a;
  opt2.innerHTML = questionList.b;
  opt3.innerHTML = questionList.c;
  opt4.innerHTML = questionList.d;
};

loadQuestion();

let getCheckAnswer = () => {
  let answer;
  ans.forEach((currentElem) => {
    if (currentElem.checked) {
      answer = currentElem.id;
    }
  });
  return answer;
};

let deselectAll = () => {
  ans.forEach((currentElem) => (currentElem.checked = false));
};

submit.addEventListener("click", () => {
  let checkdAnswer = getCheckAnswer();
  console.log(checkdAnswer);

  if (checkdAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
<h3>You Score ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()"> Play again </button>  
    `;
    showScore.classList.remove("scoreArea");
  }
});
