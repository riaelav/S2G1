/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* - Una stringa è una sequenza di caratteri, come i numeri o le lettere dell'alfabeto, contenute tra due apici (virgolette)
 uno all'inizio e uno alla fine della parola o della sequenza numerica. Ad esempio, "ciao" è una stringa.

 -Un numero è un valore numerico, come 1, 2, 3, 4, 5, ecc. Può essere intero (senza decimali) o un numero decimale. 
 Un numero a differenza di una stringa non ha bisogno di essere racchiuso tra virgolette. 
 Un numero può essere utilizzato per eseguire operazioni matematiche come addizioni, sottrazioni, moltiplicazioni e divisioni.


 - Un boolean è un tipo di dato che può avere solo due valori: vero o falso.
  Ad esempio se chiedo "hai un età maggiore di 5 anni?" la risposta sarà no (falso) . Invece se chiedo "hai un'età uguale a 5 anni?"" la risposta sarà si (vero).

  -Undefined è un tipo di dato che indica che una variabile è stata dichiarata ma non è stata assegnata a nessun valore. 
  In pratica è come se ci fosse una scatola e quando la apriamo non c'è nulla dentro.

  -Null è un tipo di dato che indica che una variabile è stata dichiarata e assegnata a un valore nullo. 
  Anche in questo caso è come se ci fosse una scatola, però abbiamo deciso noi di lasciarla vuota e ci abbiamo messo un post-it dentro con scritto "vuota". */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Valeria";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12;
console.log(num1);
let num2 = 20;
console.log(num2);
let addiction = num1 + num2;
console.log(addiction);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const. 

*/
myName = "Pagliarini";
console.log(myName);
/* non posso riassegnare un valore ad una variabile dichiarata con il costrutto const perché è una costante e non può essere modificata.
Infatti mi restituisce l'errore: Uncaught TypeError: Assignment to constant variable. Ho rimesso a "myName" il costrutto let */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let num3 = 4;
console.log(num3);
let subtraction = num3 - x;
console.log(subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
const check = name1 === name2 ? "yes" : "no";
console.log(check);
console.log(name2.toLowerCase());
const check2 = name1.toLowerCase() === name2.toLowerCase() ? "yes" : "no";
console.log(check2);
