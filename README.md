# BW1
# BENCHMARK EPICODE
---
Un'applicazione che simula il benchmark di epicode per testare le conoscenze teoriche nel campo della programmazione e sviluppo web, attraverso delle domande a risposta multipla o vero e falso che saranno selezionate dall'utente e poi valutate dal sistema con un punteggio finale.
Oltre al quiz sarà possibile simulare la valutazione e la recensione dell'applicazione.

## Caratteristiche dell'applicazione
---
L'applicazione si compone di 4 HTML, 4 JS e 1 CSS.<br /> 
Nel primo file HTML, chiamato index.html, è contenuta la prima pagina introduttiva del benchmark con le regole base del test e una box da spuntare per "accettare" le condizioni e poter iniziare il test, tutto questo reso possibile tramite il collegamento ad un file JS.<br />
Nel secondo file HTML, chiamato benchmark.html, è contenuta la seconda pagina del benchmark in cui sono presenti le domande a risposta multipla e il timer ad orologio, alla cui scadenza, nel caso in cui non venga selezionata alcuna scelta, la domanda sarà considerata sbagliata e si passerà alla successiva. Invece, nel caso in cui, si effettui una scelta senza procedere attraverso il bottone, allo scadere del timer la risposta verrà comunque salvata. Anche qui un file JS si occupa di tutte le funzionalità e dell'esperienza utente, salvando inoltre le risposte selezionate in un local storage, così che possano essere visualizzate nella successiva pagina dei risultati.<br />
Nel terzo file HTML, chiamato result.html, è contenuta la terza pagina del benchmark dove l'utente potrà visualizzare un chart con le percentuali sbagliate e corrette del suo test e rispettivo numero di risposte sbagliate e corrette. Il file JS collegato a questa pagina si occupa di recuperare le risposte dell'utente salvate nel local storage e di tradurle nelle statistiche e nel doughnut chart.<br />
Il quarto ed ultimo file HTML, chiamato feedbackPage.html, è la pagina di commento e valutazione dell'applicazione e della sua esperienza utente. Il file JS è stato utilizzato per rendere dinamiche le stelline della valutazione, in modo che siano responsive a qualsiasi input dell'utente.<br />
