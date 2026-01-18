const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which country is home to the kangaroo?",
    options: ["New Zealand", "Australia", "South Africa", "Brazil"],
    correctAnswer: 1
  }
];

let score = 0;

function showQuestion() {
  const quizBox = document.getElementsByClassName("quizbox")[0];
  const answerBox = document.createElement("div");
  answerBox.classList.add("answers");

  quizBox.innerHTML = ""

  let currQues = getQuestion();
  if (!currQues) return;
  let currAns = currQues.correctAnswer

  const headQues = document.createElement("h2");
  headQues.classList.add("question");
  headQues.textContent = currQues.question;

  currQues.options.forEach((option, index) => {
    createLabels(option, index, answerBox);
  });

  quizBox.appendChild(headQues);

  quizBox.appendChild(answerBox);

  const btnNext = document.createElement("button");
  btnNext.type = "button";
  btnNext.textContent = "Next";

  btnNext.addEventListener("click", () => goNext(currAns))

  quizBox.append(btnNext);
}

let i = 0;
function getQuestion() {
  if (i >= questions.length) {
    showResult();
    return null;
  }
  return questions[i++];
}

function createLabels(option, index, answerBox) {


  const optionInp = document.createElement("input");
  optionInp.type = "radio"
  optionInp.name = "answer"
  optionInp.id = "answer" + index;
  optionInp.value = index;

  const lbl = document.createElement("label")
  lbl.appendChild(optionInp)

  const text = document.createTextNode(option);
  lbl.appendChild(text);

  answerBox.appendChild(lbl);
}

function goNext(currAns) {
  let ans = document.querySelector("input[type='radio']:checked")
  const quizBox = document.getElementsByClassName("quizbox")[0];
  if (!ans) {
    let error = document.querySelector(".error");
    if (!error) {
      error = document.createElement("p");
      error.className = "error";
      error.textContent = "Select any one option to continue!";
      quizBox.appendChild(error);
    }
    return;
  }
  if (Number(ans.value) === currAns) {
    score++;
  }
  showQuestion();

}

function showResult() {
  const quizBox = document.querySelector(".quizbox");
  quizBox.innerHTML = `
    <h2>Quiz Finished 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.addEventListener("click", restartQuiz);
  quizBox.appendChild(restartBtn);
}

function restartQuiz() {
  score = 0; 
  i = 0;     
  showQuestion(); 
}

showQuestion();
