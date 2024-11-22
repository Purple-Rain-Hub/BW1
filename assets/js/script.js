const welcomeCheck = document.getElementById('welcomeCheck');
const btnWelcomeProceed = document.getElementById('btnWelcomeProceed');
const errorCheck = document.getElementById('errorCheck');

document.addEventListener('load', init());
function init() {
  btnWelcomeProceed.disabled = true;
  errorCheck.style.display = 'none';
  btnWelcomeProceed.style.display = "none";
}

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

btnWelcomeProceed.addEventListener("click", function(){
  welcomeCheck.checked = false;
})

welcomeCheck.onclick = boxCheck;
