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

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante 
// allora realizzeremo un form in pagina in cui l’utente potrà inserire 
// i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca.

// 1 - Programma che chiede distanza in chilometri ed età al passeggero




const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    const distance = document.getElementById("distance");
    const age = document.getElementById("age");
    //
    const pName = document.getElementById("name");
    const pSurn = document.getElementById("surname");
    //
    event.preventDefault();
    //
    const pricePerKm = 0.21;
    //
    let ticketKm = parseInt(distance.value);
    let ticketPrice = ticketKm * pricePerKm;
    //
    const maxJuniorAge = 17;
    const minSeniorAge = 65;
    //
    const juniorDiscount = 20;
    const seniorDiscount = 40;
    //
    let userAge = parseInt(age.value);
    //
    if (!isNaN(userAge) && !isNaN(ticketKm)) {
        if (userAge <= maxJuniorAge) {
            ticketPrice -= (ticketPrice * juniorDiscount) / 100;
        } else if (userAge >= minSeniorAge) {
            ticketPrice -= (ticketPrice * seniorDiscount) / 100;
        } else {
            ticketPrice;
        }
    }

    firstname.innerHTML = `Nome del passeggero: <strong>${pName.value}</strong>`;
    lastname.innerHTML = `Cognome del passeggero: <strong>${pSurn.value}</strong>`;
    price.innerHTML = `Il prezzo del biglietto è di: <strong>${ticketPrice.toFixed(2) + "€"}</strong>`;
    message.innerHTML = "Grazie per aver viaggiato con noi! Arrivederci";

    this.reset()
})




