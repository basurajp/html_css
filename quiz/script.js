// defining the quiz data
const quizData = [
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["variable x;", "var x;", "x = var;", "declare x;"],
      correct: 1,
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["float", "boolean", "string[]", "void"],
      correct: 1,
    },
    {
      question: "What is the purpose of the `parseInt()` function in JavaScript?",
      options: [
        "Parse a string as a floating-point number",
        "Parse a string as an integer",
        "Convert a number to a string",
        "Round a number to the nearest integer",
      ],
      correct: 1,
    },
    {
      question: "What does the `===` operator do in JavaScript?",
      options: [
        "Checks for equality without type coercion",
        "Assigns a value to a variable",
        "Compares values with type coercion",
        "Checks for equality with type coercion",
      ],
      correct: 0,
    },
    {
      question: "Which keyword is used to declare a function in JavaScript?",
      options: ["function", "method", "func", "define"],
      correct: 0,
    },
  ];
  
  let radioButtons = document.querySelectorAll("input[type='radio']");
  let [questionElem, option1, option2, option3, option4] =
    document.querySelectorAll("#question, #option1, #option2, #option3, #option4");
  
  let btn = document.querySelector("#btn");
  
  let currentQuiz = 0;
  let score = 0;
  
  let loadQuiz = () => {
    let { question, options } = quizData[currentQuiz];
    questionElem.innerText = question;
    option1.innerText = options[0];
    option2.innerText = options[1];
    option3.innerText = options[2];
    option4.innerText = options[3];
  };
  
  loadQuiz();
  