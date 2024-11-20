const timerProgress = document.getElementById("timerProgress");
const timerText = document.getElementById("timerText");

const totalDuration = 30; // Durata totale in secondi DA CAMBIRE SE VOGLIAMO UN TIMER DINAMICO. Per farlo devo intercettare la difficoltà della domanda. 
const difficulty = [30, 60]; //if facile 30 else 60

const intervalDuration = 1000; // Intervallo in millisecondi





function timer(totalDuration, circle) {
  let remainingTime = totalDuration; 

  const circleCircumference = 2 * Math.PI * 40; // Circonferenza del cerchio (2 * π * r)
  const timerInterval = setInterval(() => {
    remainingTime--;
    timerText.innerHTML = `${remainingTime}`; // Aggiorna il testo del timer

    // modo per avere un'animazione dinamica del valore di dashoffset settato sull'html. Dashoffset NASCONDE tutto il cerchio e con questo modo lo rivela a partire dall'alto (grazie allo 0)
    const offset = circleCircumference * (remainingTime / totalDuration); // stabilisco la formula
    timerProgress.style.strokeDashoffset = offset; //la rimando sullo stile!

    if (remainingTime == 0) {
      clearInterval(timerInterval);
      //e stampa una nuova domanda
      timer(30, timerProgress); //in questo modo ricomincia, sarebbe da impostare come clear la ristampa della domanda e nuovo timer
    }
  }, intervalDuration);
}

timer(30, timerProgress);
