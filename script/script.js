"use strict";

console.clear();

// Consegna esercizio.

// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.


// 1 - Programma che chiede distanza in chilometri ed età al passeggero

// Variabili calcolo prezzo del biglietto 

const pricePerKm = 0.21;

const juniorDiscount = 20;  // percentage
const maxJuniorAge = 17;    // max age; needs <=

const seniorDiscount = 40;  // percentage
const minSeniorAge = 65;    // min age; needs >=

let ticketKm;
let userAge;

let ticketPrice = ticketKm * pricePerKm;

// Calcolo del prezzo del biglietto

// if (!isNaN(userAge) && !isNaN(ticketKm)) {
//     if (userAge <= maxJuniorAge) {
//         ticketPrice -= (ticketPrice * juniorDiscount) / 100;
//         //
//         console.log(`Applicazione sconto junior del ${juniorDiscount}%.`);
//         console.log(`Il prezzo del tuo biglietto scontato è: ${ticketPrice.toFixed(2)}€.`);
//         //
//     } else if (userAge >= minSeniorAge) {
//         ticketPrice -= (ticketPrice * seniorDiscount) / 100;
//         //
//         console.log(`Applicazione sconto senior del ${seniorDiscount}%.`);
//         console.log(`Il prezzo del tuo biglietto scontato è: ${ticketPrice.toFixed(2)}€.`);
//         //
//     } else {
//         console.log(`Il prezzo del tuo biglietto è: ${ticketPrice.toFixed(2)}€.`);
//     }
// } else {
//     alert("Inserisci valori validi");
// }
