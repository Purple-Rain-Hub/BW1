const resultChart = document.getElementById("resultChart").getContext('2d');
const chartText = document.getElementById('chartText');
const correctPercentage = document.getElementById('correctPercentage')
const wrongPercentage = document.getElementById('wrongPercentage');
const correctQuestions = document.getElementById('correctQuestions');
const wrongQuestions = document.getElementById('wrongQuestions');

let correctAnswers;
let wrongAnswers;
let total;

//funzione x recuperare risultati da local storage
function getAnswers() {
    const storeData = localStorage.getItem('quiz_answers');
    return JSON.parse(storeData);
}

//funzione per calcolare il risultato
function calcolateResults () {
    const answers = getAnswers();
    const correctAnswers = answers.filter(answer => answer === 1).length;
    const wrongAnswers = answers.filter(answer => answer === 0).length;
    return {correctAnswers, wrongAnswers};
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
        borderColor: 'none',
        borderWidth: 0,
      },
    ],
  },
  options: { //impostazioni del grafico
    rotation: 0, //fa girare il grafico in senso orario in modo da vedere wrong e correct nel lato giusto
    responsive: false, //rende il grafico adattabile ad ogni tipo di schermo
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: { //funzionalità extra
      legend: { //legenda per distinguere i dati del grafico
        position: "none",
      },
      tooltip: { //appaiono quando si passa il mouse su un elemento grafico
        enabled: false,
        },
      },
    },
  })
}

const results = calcolateResults();
createChart(results.wrongAnswers, results.correctAnswers);

function textInChart() {
    if (results.correctAnswers>results.wrongAnswers) {
        return chartText.innerHTML = `<h3>Congratulations!</h3><p class="correctAnswers">You passed the exam.</p><br/><p>We'll send you the certificate in few minutes. <br/> Check your email (including promotions / spam folder)</p>`
    } else {
        return chartText.innerHTML = `<h3>Try Again!</h3><p class="wrongAnswers">You failed the exam</p>`
    }
}
textInChart();

function sideText() {
    total = results.correctAnswers+results.wrongAnswers;
    const percentualeCorrette = ((results.correctAnswers / total)* 100);
    const percentualeSbagliate = ((results.wrongAnswers / total)* 100);
     correctPercentage.innerText = `${percentualeCorrette}%`;
     correctQuestions.innerText = `${results.correctAnswers}/${total} questions`
    wrongPercentage.innerText = `${percentualeSbagliate}%`;
    wrongQuestions.innerText = `${results.wrongAnswers}/${total} questions`;
    return;
}
sideText();