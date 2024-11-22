//js della prima pagina
const welcomeCheck = document.getElementById('welcomeCheck');
const btnWelcomeProceed = document.getElementById('btnWelcomeProceed');
const errorCheck = document.getElementById('errorCheck');

document.addEventListener('load', init());
//funzione attiva al caricamento della pagina
function init() {
  btnWelcomeProceed.disabled = true;
  errorCheck.style.display = 'none';
  btnWelcomeProceed.style.display = "none";
}

//controlla se la box è checkata o meno
function boxCheck() {
  if (welcomeCheck.checked) {
    btnWelcomeProceed.disabled = false;
    errorCheck.style.display = 'none';
    btnWelcomeProceed.style.display = "block"
    btnWelcomeProceed.classList.remove("btnDisabled")
  } else {
    btnWelcomeProceed.disabled = true;
    errorCheck.style.display = 'block';
    btnWelcomeProceed.style.display = "block"
    btnWelcomeProceed.classList.add("btnDisabled")
  }
}

//disattiva box prima di procedere
btnWelcomeProceed.addEventListener("click", function(){
  welcomeCheck.checked = false;
})

//al click del check attiva la funzione sopra
welcomeCheck.onclick = boxCheck;
