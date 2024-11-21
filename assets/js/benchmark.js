const questionsEasy = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
];

const questionsHard = [
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.',
    correct_answer: 'Binary',
    incorrect_answers: ['JavaScript', 'C++', 'Python'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'Which computer language would you associate Django framework with?',
    correct_answer: 'Python',
    incorrect_answers: ['C#', 'C++', 'Java'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question: 'In computing, what does MIDI stand for?',
    correct_answer: 'Musical Instrument Digital Interface',
    incorrect_answers: [
      'Musical Interface of Digital Instruments',
      'Modular Interface of Digital Instruments',
      'Musical Instrument Data Interface',
    ],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'The programming language &#039;Swift&#039; was created to replace what other programming language?',
    correct_answer: 'Objective-C',
    incorrect_answers: ['C#', 'Ruby', 'C++'],
  },
  {
    type: 'boolean',
    difficulty: 'hard',
    category: 'Science: Computers',
    question: 'The Windows ME operating system was released in the year 2000.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'Which computer hardware device provides an interface for all other connected devices to communicate?',
    correct_answer: 'Motherboard',
    incorrect_answers: [
      'Central Processing Unit',
      'Hard Disk Drive',
      'Random Access Memory',
    ],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
    correct_answer: 'Apple',
    incorrect_answers: ['Microsoft', 'Atari', 'Commodore'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'In &quot;Hexadecimal&quot;, what color would be displayed from the color code &quot;#00FF00&quot;?',
    correct_answer: 'Green',
    incorrect_answers: ['Red', 'Blue', 'Yellow'],
  },
  {
    type: 'boolean',
    difficulty: 'hard',
    category: 'Science: Computers',
    question: '&quot;HTML&quot; stands for Hypertext Markup Language.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    type: 'boolean',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null; // Variabile per memorizzare la risposta selezionata
let questions;
let difficultyBtn = document.getElementsByClassName("difficultyBtn");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const wordAnwers = [];
let currentQuestion;
let ESPLODI;

// Funzione per mescolare le domande
function shuffleQuestions() {
  // Mescolare l'array delle domande
  questions.sort(() => Math.random() - 0.5);
}

// Funzione per visualizzare la domanda
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionContainer = document.getElementById('questionContainer');

  // Mescolare le risposte
  const options = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  // Mark up domande e risposte
  const questionHTML = `
    <h1 id='questionTitle' class="questionTitle">${
      currentQuestion.question
    }</h1>
    <div id="options-container">
      ${options
        .map(
          (option, index) => `
        
          <button id="option-${index}" onclick="handleAnswerClick('${option}', this)">
            ${option}
          </button>
        
      `
        )
        .join('')}
    </div>
        <button id="next-button" class="blueBtn" onclick="nextQuestion()" disabled>PROCEED</button>
    
  `;

  const questionNumber = ` <div class = 'questionNumber'> QUESTION ${
    currentQuestionIndex + 1
  }/<span class="markQuestion">${questions.length}</span>
  </div>`;
  questionContainer.innerHTML = `<div class="questionsDiv"> ${questionHTML} ${questionNumber} </div>`;
  fontSize();
}

function fontSize() {
  const fontTitle = document.getElementById('questionTitle');
  const titleLength = fontTitle.innerText.length;
  if (titleLength > 70) {
    fontTitle.style.fontSize = `2.3em`;
  }
}

// Funzione per gestire il clic su un'opzione
function handleAnswerClick(answer, buttonElement) {
  // Toglie la classe selected ai bottoni precedentemente selezionati
  const buttons = document.querySelectorAll('#options-container button');
  buttons.forEach((button) => button.classList.remove('selected'));
  // Evidenzia la risposta selezionata
  ESPLODI = buttonElement;
  ESPLODI.classList.add('selected');
  selectedAnswer = answer;
  
  // Abilita il bottone "Prossima domanda" se una risposta è selezionata
  document.getElementById('next-button').disabled = false;
}

// Funzione per passare alla domanda successiva
function nextQuestion() {

  currentQuestion = questions[currentQuestionIndex];

  secondStorage(ESPLODI, currentQuestion, selectedAnswer, currentQuestionIndex);
  
  // Verifica se la risposta è corretta e salva nel localStorage
  const isCorrect = selectedAnswer === currentQuestion.correct_answer ? 1 : 0;
  saveAnswer(currentQuestionIndex, isCorrect);

  // Passa alla domanda successiva
  currentQuestionIndex++;

  // Se ci sono altre domande, mostra la successiva
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    timer(difficulty, timerProgress); ///timer
  } else {
    // Se tutte le domande sono state risposte, collega alla pagina dei risultati
    showGoToResultsButton();
  }
}

// Funzione per salvare la risposta nel localStorage
function saveAnswer(questionIndex, isCorrect) {
  const answers = JSON.parse(localStorage.getItem('quiz_answers')) || []; //al primo giro il json.parse non funziona, quindi answers=[]
  answers[questionIndex] = isCorrect;
  localStorage.setItem('quiz_answers', JSON.stringify(answers));
}

function secondStorage (ESPLODI, currentQuestion, selectedAnswer, questionIndex) {
  if (ESPLODI.classList.contains('selected')) { //se hai selezionato qualcosa, stampa nel secondo local storage la domanda + la risposta selezionata
  wordAnwers[questionIndex] = currentQuestion.question + ' ' + selectedAnswer + '. Correct answer: ' + currentQuestion.correct_answer;
  const buttons = document.querySelectorAll('#options-container button');
  buttons.forEach((button) => button.classList.remove('selected'));
} else {  //se non selezioni nulla, stampa nel secondo local storage la domanda + 'empty answer'
  wordAnwers[questionIndex] = currentQuestion.question + ' empty answer. Correct answer: ' + currentQuestion.correct_answer;
  const buttons = document.querySelectorAll('#options-container button');
  buttons.forEach((button) => button.classList.remove('selected'));
}
  localStorage.setItem('polloAnswers', JSON.stringify(wordAnwers)); // crea 'polloAnswers' nel local storage e riempilo con l'array wordAnswers
}

// Funzione per andare ai risultati
function showGoToResultsButton() {
  const questionContainer = document.getElementById('questionContainer');
  const questionNumber = document.querySelector('.questionNumber');

  // Rimuove il numero della domanda
  questionNumber.innerHTML = '';

  // Sostituisce il contenuto con il messaggio finale
  questionContainer.innerHTML = `
              <h1 class='finalTitle'>Congratulations!<br/> You have completed the exam.</h1>
        <button class='blueBtn centerBtn' onclick="goToResults()">GO TO RESULT</button>
          `;
  clearInterval(interval);
  timerContainer.innerText = '';
}

// Funzione per andare alla pagina dei risultati
function goToResults() {
  location.href = 'result.html';
}

function timerEnd() {
  const questionText = document.getElementById('questionText');
  questionText.innerHTML = `<tspan class="staticTextTimer" x="50" dy="-5"> COMPLIMENTI!</tspan>      
                          <tspan class="staticTextTimer"x="50" dy="10">HAI FINITO!</tspan>`;

  const offset = circleCircumference; // stabilisco la formula
  timerProgress.style.strokeDashoffset = offset;
}

// Funzione per inizializzare il quiz
function startQuiz() {
  timerContainer.style.display = 'block';
  shuffleQuestions(); // Mescolare le domande
  showQuestion(); // Mostra la prima domanda
  timer(difficulty, timerProgress);
}

// Avvia il quiz quando la pagina è caricata
window.onload = chooseDifficulty;

const timerProgress = document.getElementById('timerProgress');
const timerText = document.getElementById('timerText');

//const totalDuration = 30; // Durata totale in secondi DA CAMBIRE SE VOGLIAMO UN TIMER DINAMICO. Per farlo devo intercettare la difficoltà della domanda.
let difficulty; //if facile 30 else 60
const intervalDuration = 1000; // Intervallo in millisecondi
const circleCircumference = 2 * Math.PI * 40;
//TIMER//
let interval;
const timerContainer = document.getElementById('timer');

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

//funzione init per la scelta della difficoltà
function chooseDifficulty() {
  timerContainer.style.display = 'none';
  easyBtn.addEventListener('click', function () {
    questions = questionsEasy;
    document.getElementById('difficultyContainer').style.display = 'none';
    difficulty = 30;
    startQuiz();
  });
  hardBtn.addEventListener('click', function () {
    questions = questionsHard;
    document.getElementById('difficultyContainer').style.display = 'none';
    difficulty = 60;
    startQuiz();
  });
}
