const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null; // Variabile per memorizzare la risposta selezionata

// Funzione per mescolare le domande
function shuffleQuestions() {
  // Mescolare l'array delle domande
  questions.sort(() => Math.random() - 0.5);
}

// Funzione per visualizzare la domanda
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionContainer = document.getElementById("questionContainer");
  const questionNumber = document.getElementById("questionNumber");

  // Mescolare le risposte
  const options = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  // Mark up domande e risposte
  const questionHTML = `
  <h1 class="questionTitle">${currentQuestion.question}</h1>
  <div id="options-container">
    ${options
      .map(
        (option, index) => `
      
        <button id="option-${index}" onclick="handleAnswerClick('${option}', this)">
          ${option}
        </button>
      
    `
      )
      .join("")}
  </div>
  <button id="next-button" onclick="nextQuestion()" disabled>PROCEED</button>
`;

  questionContainer.innerHTML = questionHTML;
  questionNumber.innerHTML = `QUESTION ${
    currentQuestionIndex + 1
  }/<span class="markQuestion">${questions.length}</span>`;
}

// Funzione per gestire il clic su un'opzione
function handleAnswerClick(answer, buttonElement) {
  // Evidenzia la risposta selezionata
  buttonElement.classList.add("selected");
  selectedAnswer = answer;

  // Abilita il bottone "Prossima domanda" se una risposta è selezionata
  document.getElementById("next-button").disabled = false;
}

// Funzione per passare alla domanda successiva
function nextQuestion() {
  //if (!selectedAnswer) return;

  const currentQuestion = questions[currentQuestionIndex];

  // Verifica se la risposta è corretta e salva nel localStorage
  const isCorrect = selectedAnswer === currentQuestion.correct_answer ? 1 : 0;
  saveAnswer(currentQuestionIndex, isCorrect);

  // Passa alla domanda successiva
  currentQuestionIndex++;

  // Se ci sono altre domande, mostra la successiva
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    timer(30, timerProgress); ///timer
  } else {
    // Se tutte le domande sono state risposte, collega alla pagina dei risultati
    showGoToResultsButton();
    clearInterval(interval);
    timerEnd();
  }
}

// Funzione per salvare la risposta nel localStorage
function saveAnswer(questionIndex, isCorrect) {
  const answers = JSON.parse(localStorage.getItem("quiz_answers")) || [];
  answers[questionIndex] = isCorrect;
  localStorage.setItem("quiz_answers", JSON.stringify(answers));
}
// Funzione per andare ai risultati
function showGoToResultsButton() {
  const nextButton = document.getElementById("next-button");
  nextButton.innerText = "GO TO RESULTS";
  nextButton.onclick = function () {
    location.href = "result.html";
  };
}

function timerEnd() {
  const questionText = document.getElementById("questionText");
  questionText.innerHTML = `<tspan class="staticTextTimer" x="50" dy="-5"> COMPLIMENTI!</tspan>      
                          <tspan class="staticTextTimer"x="50" dy="10">HAI FINITO!</tspan>`;
  
  const offset = circleCircumference; // stabilisco la formula
  timerProgress.style.strokeDashoffset = offset;
}

// Funzione per inizializzare il quiz
function initQuiz() {
  shuffleQuestions(); // Mescolare le domande
  showQuestion(); // Mostra la prima domanda
  timer(30, timerProgress);
}

// Avvia il quiz quando la pagina è caricata
window.onload = initQuiz;

const timerProgress = document.getElementById("timerProgress");
const timerText = document.getElementById("timerText");

const totalDuration = 30; // Durata totale in secondi DA CAMBIRE SE VOGLIAMO UN TIMER DINAMICO. Per farlo devo intercettare la difficoltà della domanda.
const difficulty = [30, 60]; //if facile 30 else 60
const intervalDuration = 1000; // Intervallo in millisecondi
const circleCircumference = 2 * Math.PI * 40;
//TIMER//
let interval;

function timer(totalDuration, circle) {
  let remainingTime = totalDuration;
  // Circonferenza del cerchio (2 * π * r)
  clearInterval(interval); //pulisce il timer prima di iniziarne uno nuovo

  timerText.innerHTML = `${remainingTime}`;
  // modo per avere un'animazione dinamica del valore di dashoffset settato sull'html. Dashoffset NASCONDE tutto il cerchio e con questo modo lo rivela a partire dall'alto (grazie allo 0)
  const offset = circleCircumference * (remainingTime / totalDuration); // stabilisco la formula
  timerProgress.style.strokeDashoffset = offset; //la rimando sullo stile!

  interval = setInterval(() => {
    remainingTime--;
    timerText.innerHTML = `${remainingTime}`; // Aggiorna il testo del timer
    const offset = circleCircumference * (remainingTime / totalDuration);
    timerProgress.style.strokeDashoffset = offset;

    if (remainingTime === 0) {
      nextQuestion();

      //e stampa una nuova domanda
    }
  }, intervalDuration);
}
