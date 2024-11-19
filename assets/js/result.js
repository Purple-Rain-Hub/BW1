const resultChart = document.getElementById("resultChart");
const chartText = document.getElementById('chartText');
const correctPercentage = document.getElementById('correctPercentage')
const wrongPercentage = document.getElementById('wrongPercentage');
const correctQuestions = document.getElementById('correctQuestions');
const wrongQuestions = document.getElementById('wrongQuestions');


const correctAnswers = 9;
const wrongAnswers = 1;
const total = correctAnswers+wrongAnswers;

new Chart(resultChart, {
  type: "doughnut",
  data: {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        label: "Risultati quiz",
        data: [correctAnswers, wrongAnswers],
        backgroundColor: ["#01FFFF", "#C2138D"],
        borderColor: 'none',
        borderWidth: 0,
      },
    ],
  },
  options: { //impostazioni del grafico
    responsive: true, //rende il grafico adattabile ad ogni tipo di schermo
    cutout: '70%',
    plugins: { //funzionalità extra
      legend: { //legenda per distinguere i dati del grafico
        position: "none",
      },
      tooltip: { //appaiono quando si passa il mouse su un elemento grafico
        callbacks: { //personalizza i testi che appaiono nel tooltip
          label: function (context) {
            const label = context.label || ""; //nome del dato
            const value = context.raw || 0; //valore del dato
            return `${label}: ${value}`; //stringa finale da mostrare
          },
        },
      },
    },
  },
});

function textInChart() {
    if (correctAnswers>wrongAnswers) {
        return chartText.innerHTML = `<h3>Congratulations!</h3><p class="correctAnswers">You passed the exam.</p><br/><p>We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)</p>`
    } else {
        return chartText.innerHTML = `<h3>Try Again!</h3><p class="wrongAnswers">You failed the exam</p>`
    }
}
textInChart();

function sideText() {
    const percentualeCorrette = ((correctAnswers / total)* 100);
    const percentualeSbagliate = ((wrongAnswers / total)* 100);
     correctPercentage.innerText = `${percentualeCorrette}%`;
     correctQuestions.innerText = `${correctAnswers}/${total} questions`
    wrongPercentage.innerText = `${percentualeSbagliate}%`;
    wrongQuestions.innerText = `${wrongAnswers}/${total} questions`;
    return;
}
sideText();