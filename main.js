/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, 
provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

*/

//Il programma deve chiedere all'utente il numero di chilometri che vuole percorrere
//Età del passeggero
//Deve calcolare il prezzo totale del viaggio

//Definisci il prezzo base del biglietto per kilometro
const basic = 0.21;

//Richiesta di informazioni per applicare il prezzo
const kilometers = prompt('Quanti km vuole percorrere?');
const age = prompt('Quanti anni ha?');

//Calcola il prezzo senza sconti (Km moltiplica per il prezzo base della corsa)
 //Uso let, dato che const non è flessibile 
let finalPrice = kilometers * basic;

//Applica gli sconti (usiamo if, else if, else)
    if (age < 18){}
    //Prezzo per i minorenni scontato al 20%
    else if (age > 65){}
    //Prezzo per i over 65 anni scontato al 40%
    else {}

//Arrotonda il prezzo in due decimali per indicare i centesimi 

//Prezzo finale