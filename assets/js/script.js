const welcomeCheck = document.getElementById('welcomeCheck');
const btnWelcomeProceed = document.getElementById('btnWelcomeProceed');
const errorCheck = document.getElementById('errorCheck');

document.addEventListener('load', init());
function init() {
  btnWelcomeProceed.disabled = true;
  errorCheck.style.display = 'none';
}

function boxCheck() {
  if (welcomeCheck.checked) {
    btnWelcomeProceed.disabled = false;
    errorCheck.style.display = 'none';
  } else {
    btnWelcomeProceed.disabled = true;
    errorCheck.style.display = 'block';
  }
}

welcomeCheck.onclick = boxCheck;
