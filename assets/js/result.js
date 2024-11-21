const resultChart = document.getElementById("resultChart").getContext("2d");
const chartText = document.getElementById("chartText");
const correctPercentage = document.getElementById("correctPercentage");
const wrongPercentage = document.getElementById("wrongPercentage");
const correctQuestions = document.getElementById("correctQuestions");
const wrongQuestions = document.getElementById("wrongQuestions");
const resumeContainer = document.getElementById("resumeContainer");

let correctAnswers;
let wrongAnswers;
let total;

//funzione x recuperare risultati da local storage
function getAnswers() {
  const storeData = localStorage.getItem("quiz_answers");
  return JSON.parse(storeData);
}

//funzione per calcolare il risultato
function calcolateResults() {
  const answers = getAnswers();
  const correctAnswers = answers.filter((answer) => answer === 1).length;
  const wrongAnswers = answers.filter((answer) => answer === 0).length;
  return { correctAnswers, wrongAnswers };
}

function createChart(wrong, correct) {
  new Chart(resultChart, {
    type: "doughnut",
    data: {
      labels: ["Wrong Answers", "Correct Answers"],
      datasets: [
        {
          data: [wrong, correct],
          backgroundColor: ["#C2138D", "#01FFFF"],
          borderColor: "none",
          borderWidth: 0,
        },
      ],
    },
    options: {
      //impostazioni del grafico
      rotation: 0, //fa girare il grafico in senso orario in modo da vedere wrong e correct nel lato giusto
      responsive: false, //rende il grafico adattabile ad ogni tipo di schermo
      maintainAspectRatio: false,
      cutout: "72%",
      plugins: {
        //funzionalità extra
        legend: {
          //legenda per distinguere i dati del grafico
          position: "none",
        },
        tooltip: {
          //appaiono quando si passa il mouse su un elemento grafico
          enabled: false,
        },
      },
    },
  });
}

const results = calcolateResults();
createChart(results.wrongAnswers, results.correctAnswers);

function textInChart() {
  if (results.correctAnswers > results.wrongAnswers) {
    return (chartText.innerHTML = `<h3>Congratulations!</h3><p id="correctAnswers">You passed the exam.</p><br/><p>We'll send you the certificate in few minutes. <br/> Check your email (including promotions / spam folder)</p>`);
  } else {
    return (chartText.innerHTML = `<h3>Try Again!</h3><p id="wrongAnswers">You failed the exam</p>`);
  }
}
textInChart();

function sideText() {
  total = results.correctAnswers + results.wrongAnswers;
  const percentualeCorrette = (results.correctAnswers / total) * 100;
  const percentualeSbagliate = (results.wrongAnswers / total) * 100;
  correctPercentage.innerText = `${percentualeCorrette}%`;
  correctQuestions.innerText = `${results.correctAnswers}/${total} questions`;
  wrongPercentage.innerText = `${percentualeSbagliate}%`;
  wrongQuestions.innerText = `${results.wrongAnswers}/${total} questions`;
  return;
}
sideText();

function getQuestions() {
  const paperino = localStorage.getItem("polloAnswers");
  return JSON.parse(paperino);
}

function print() {
  const resumeArray = getQuestions();
  for (let i = 0; i < resumeArray.length; i++) {
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h4");
    newTitle.innerText = `${resumeArray[i].questionTitle}`;
    newDiv.appendChild(newTitle);
    const newDl = document.createElement("dl");
    const newDt = document.createElement('dt');
    newDt.innerText = 'Your answer:'
    newDl.appendChild(newDt);
    if (resumeArray[i].hasOwnProperty("correct")) {
      const newDd = document.createElement("dd");
      newDd.innerHTML = `<ion-icon name="close-sharp" class="wrongIcon"></ion-icon> ${resumeArray[i].selected}`;
      newDl.appendChild(newDd);
      const correctDt = document.createElement('dt');
      correctDt.innerText = 'Correct answer:';
      newDl.appendChild(correctDt);
      const correctDd = document.createElement("dd");
      correctDd.innerHTML = `<ion-icon name="checkmark-sharp" class="correctIcon"></ion-icon> ${resumeArray[i].correct}`;
      newDl.appendChild(correctDd);
    } else {
      const newDd = document.createElement("dd");
      newDd.innerHTML = `<ion-icon name="checkmark-sharp" class="correctIcon"></ion-icon> ${resumeArray[i].selected}`;
      newDl.appendChild(newDd);
    }
    newDiv.appendChild(newDl);
    resumeContainer.appendChild(newDiv);
  }
}
print();

function dropDownMenu() {
  resumeContainer.classList.toggle("show");
}