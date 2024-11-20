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

## Funzionalità principali
---
* **Domande:** le domande del benchamark, pescate randomicamente, riguardano la programmazione, principalmente a livello teorico.
* **Risposte:** le risposte possono essere multiple o Vero/Falso e, come le domande, la loro disposizione viene generata randomicamente
* **Punteggio:** il punteggio verrà visualizzato al completamento del test attraverso un grafico e percentuali.
* **Feedback:** l'utente potrà valutare la propria esperienza e lasciare una recensione. 

## Guida all'installazione e esecuzione del test
---
1. Clonare o scaricare la repository sul proprio computer tramite github
2. Aprire il file index.html sul proprio browser
3. Leggere e spuntare la casella ed iniziare il test tramite bottone "PROCEED"
4. Fai attenzione alle domande e seleziona la risposta che ritieni corretta prima dello scadere del tempo
5. Clicca il tasto "PROCEED" per passare alla domanda successiva
6. Dopo l'ultima domanda premere il tasto "GO TO RESULTS"
7. Visualizzati i risultati del proprio test premere "RATE US"
8. Inserire un voto da 1 a 10 tramite le apposite stelline
9. Inserire un eventuale recensione del test
10. Premere il tasto "TRY AGAIN" e continuare all'infinito

## Tecnologie Utilizzate
---
* **HTML:** utilizzato per morfologia e struttura della pagina
* **CSS:** utilizzato per stilizzare le pagine
* **JavaScript:** utilizzato le funzioni interattive
* **SVG (Scalable Vector Graphics):** utilizzato per la creazione delle stelle di valutazione
* **Chart JS:** utilizzato per la creazione del doughnut chart

## Requisiti del Sistema
---
1. Un computer che si accende
2. Un sistema operativo privo di virus
3. Connesione ad internet
4. Browser web (NON SAFARI)

## Licenza
---
Questo progetto è distribuito sotto la licenza del TEAM1© Corso full-stack Epicode

## Developers
---
Camilla Zicari
Manuel Palmieri
Ninfa Carreno
Tommaso Di Berto Mancini
Klajdi Kollcaku
