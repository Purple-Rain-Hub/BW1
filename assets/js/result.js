const myChart = document.getElementById("myChart");
const chartText = document.getElementById('chartText');

const correctAnswers = 5;
const wrongAnswers = 5;

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        label: "Risultati quiz",
        data: [correctAnswers, wrongAnswers],
        backgroundColor: ["#01FFFF", "#C2138D"],
        //borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
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
