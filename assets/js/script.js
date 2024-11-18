let welcomeCheck = document.getElementById("welcomeCheck");
let btnWelcomeProceed = document.getElementById("btnWelcomeProceed");
let errorCheck = document.getElementById("errorCheck");
errorCheck.style.display = "none";

document.addEventListener("load", init)

function init(){
    btnWelcomeProceed.setAttribute("disabled", "true");
}


btnWelcomeProceed.addEventListener("click", function(e){
    e.preventDefault;
    if (welcomeCheck.checked)
        console.log("evviva");
    else if(!welcomeCheck.checked)
        errorCheck.style.display = "block";
})

