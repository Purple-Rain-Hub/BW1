const resultChart = document.getElementById("resultChart");
const chartText = document.getElementById('chartText');

const correctAnswers = 6;
const wrongAnswers = 4;

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
        return chartText.innerHTML = `<h3>Congratulations!</h3><p>You passed the exam</p>`
    } else {
        return chartText.innerHTML = `<h3>Try Again!</h3><p>You failed the exam</p>`
    }
}
textInChart();

