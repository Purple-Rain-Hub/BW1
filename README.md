# BW1
# BENCHMARK EPICODE

Un'applicazione che simula il benchmark di Epicode per testare le conoscenze teoriche nel campo della programmazione e sviluppo web. <br />
Ciò avviene attraverso una serie di domande a risposta multipla o vero/falso che saranno selezionate dall'utente e poi valutate dal sistema con un punteggio finale. <br />
Oltre al quiz sarà possibile simulare la valutazione e la recensione dell'applicazione.

---
## Caratteristiche dell'applicazione

L'applicazione si compone di 4 HTML, 4 JS e 1 CSS.<br /> 
Nel primo file HTML, chiamato index.html, è contenuta la pagina introduttiva del benchmark con le regole base del test e una box da spuntare per "accettare" le condizioni e poter iniziare il test, tutto questo reso possibile tramite il collegamento ad un file JS.<br />
Nel secondo file HTML, chiamato benchmark.html, è contenuta la pagina del benchmark in cui sono presenti la scelta della difficoltà del test, le domande ed il timer ad orologio, alla cui scadenza, nel caso in cui non venga effettuata alcuna scelta, la domanda sarà considerata sbagliata e si passerà alla successiva. Invece, nel caso in cui si effettui una scelta senza procedere attraverso il bottone, allo scadere del timer la risposta verrà comunque registrata. Anche qui un file JS si occupa di tutte le funzionalità e dell'esperienza utente, salvando inoltre le risposte selezionate nel local storage, cosicché possano essere visualizzate nella successiva pagina.<br />
Nel terzo file HTML, chiamato result.html, è contenuta la pagina dei risultati del benchmark all'interno della quale verrà fornito un feedback circa la prestazione del test. Quest'ultimo verrà fornito attraverso un chart che rappresenta le percentuali di risposte corrette e sbagliate, anch'esse visualizzate ai lati del grafico. Nella sezione sottostante sono presenti due bottoni: il primo permette di visualizzare un resoconto dei propri risultati con eventuali correzioni; il secondo gestisce il passaggio alla pagina successiva. Il file JS collegato a questo documento si occupa di recuperare le risposte dell'utente salvate nel local storage, tradurle nelle statistiche e nel doughnut chart, e stamparle in forma di lista.<br />
Il quarto ed ultimo file HTML, chiamato feedbackPage.html, è la pagina di commento e valutazione dell'applicazione e della sua esperienza utente. Il file JS è stato utilizzato per rendere dinamiche le stelline della valutazione, in modo che siano responsive a qualsiasi input dell'utente.<br />

---
## Funzionalità principali
* **Domande:** le domande del benchamark, pescate randomicamente e con difficoltà scelta dall'utente, riguardano la programmazione, principalmente a livello teorico.
* **Risposte:** le risposte possono essere multiple o Vero/Falso e, come le domande, la loro disposizione viene generata randomicamente.
* **Punteggio:** il punteggio verrà visualizzato al completamento del test attraverso un grafico e percentuali. È inoltre presente un bottone con riassunto del test fatto.
* **Feedback:** l'utente potrà valutare la propria esperienza e lasciare una recensione.
---
## Guida all'installazione e esecuzione del test
1. Clonare o scaricare la repository sul proprio computer tramite github
2. Aprire il file index.html sul proprio browser
3. Leggere e spuntare la casella ed iniziare il test tramite bottone "PROCEED"
4. Scegliere la difficoltà desiderata per il test
5. Fare attenzione alle domande e selezionare la risposta che si ritiene corretta prima dello scadere del tempo
6. Cliccare il tasto "PROCEED" per passare alla domanda successiva
7. Dopo l'ultima domanda premere il tasto "GO TO RESULTS"
8. Visualizzati i risultati del proprio test premere "RESUME" per controllare le proprie risposte e poi "RATE US" per continuare
9. Inserire un voto da 0 a 10 tramite le apposite stelline cantanterine
10. Inserire un'eventuale recensione del test
11. Premere il tasto "TRY AGAIN" e continuare all'infinito
---
## Tecnologie Utilizzate
* **HTML:** utilizzato per morfologia e struttura della pagina;
* **CSS:** utilizzato per stilizzare le pagine;
* **JavaScript:** utilizzato le funzioni interattive;
* **SVG (Scalable Vector Graphics):** utilizzato per la creazione delle stelle di valutazione;
* **Chart JS:** utilizzato per la creazione del doughnut chart;
* **Canvas Confetti:** utilizzato per la creazione dei coriandoli.
---
## Requisiti di Sistema
1. Un computer che si accende
2. Un sistema operativo privo di virus
3. Connesione ad internet
4. Browser web (NON SAFARI)
---
## Licenza
Questo progetto è distribuito sotto la licenza del TEAM1© Corso full-stack Epicode

---
## Developers
Camilla Zicari<br />
Manuel Palmieri<br />
Ninfa Lissette Carreno Jacho<br />
Tommaso Di Berto Mancini<br />
Klajdi Kollcaku
