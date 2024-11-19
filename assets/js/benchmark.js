const questions = [
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

// Dichiaro le constanti

const questionContainer = document.getElementById('questionContainer');
const btnSubmit = document.getElementById('btnSubmit');
const result = document.getElementById('result');
const questionNumber = document.getElementById('questionNumber');
let currentQuestionIndex = 0;
let score = 0;

// Mostrare una domanda alla volta

function showQuestions(i) {
  questionContainer.innerHTML = '';
  const question = questions[i];
  const options = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question-container', 'active');
  questionDiv.innerHTML = `
      <h1>${question.question}</h1>
      ${options
        .map(
          (option) => `
        <label>
          <input type="radio" name="question-${index}" value="${option}">
          ${option}
        </label><br>
      `
        )
        .join('')}
    `;
  questionContainer.appendChild(questionDiv);

  // Aggiorno il footer con il numero della domanda
  footer.innerText = `QUESTION ${index + 1} / ${questions.length}`;

  // Abilito il pulsante dopo aver scelto una risposta
  const inputs = questionDiv.querySelectorAll("input[type='radio']");
  inputs.forEach((input) =>
    input.addEventListener('change', () => {
      btnSubmit.disabled = false;
    })
  );
}

// Mostra la prima domanda all'inizio
showQuestions(currentQuestionIndex);
