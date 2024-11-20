const starsArray = document.querySelectorAll(".starsDiv img")

//ciclo array di immagini delle stelle
for (let i = 0; i < starsArray.length; i++) {
    //evento dell'hover del mouse sulle stelle
    starsArray[i].addEventListener("mouseenter", function () {
        //ciclo che va dalla prima alla stella puntata dal mouse
        for (let j = 0; j <= i; j++) {
            starsArray[j].classList.remove("star")
        }
    })
    //evento di quando il mouse va via dalle stelle
    starsArray[i].addEventListener("mouseleave", function () {
        for (let j = 0; j <= i; j++) {
            //le stelle clickate hanno una classe per non diventare grigie di nuovo
            if (!starsArray[j].classList.contains("clickedStars"))
                starsArray[j].classList.add("star")
        }
    })
    //evento per la selezione delle stelle
    starsArray[i].addEventListener("click", function () {
        //reset ad ogni click cosi da poter scegliere un voto più basso di quello selezionato prima
        starsArray.forEach(e => e.classList.remove("clickedStars"))
        starsArray.forEach(e => e.classList.add("star"))
        //ciclo che va dalla prima alla stella clickata
        for (let j = 0; j <= i; j++) {
            starsArray[j].classList.remove("star")
            starsArray[j].classList.add("clickedStars")//classe usata sopra per evitare tornino grigie
        }
    })
}

