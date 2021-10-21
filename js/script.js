// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// valori base
const elemento = document.getElementById("calcolobiglietto")
const diciotto = 18
const over60 = 60
const prezzo = 0.21




// chiedi all'utente quanti km deve percorrere
let km = prompt("Quanti km dovrai percorrere?")

// // calcola il prezzo
 const calcolo = km * prezzo




// chiedi quanti anni ha
let age = prompt("Quanti anni hai?")

// calcolo il prezzo del biglietto in base all'età
if (age < diciotto){
    let discount = ((km * prezzo) * 20) / 100
    let totale = calcolo - discount
    totale = totale.toFixed(2)
    elemento.innerHTML = `il prezzo totale è: ${totale}`
    
} else if (age > over60){
    let discount = ((km * prezzo) * 40) / 100
    let totale = calcolo - discount
    totale = totale.toFixed(2)
    elemento.innerHTML = `il prezzo totale è: ${totale}`

} else {
    const calcolo = km * prezzo
    calcolo = calcolo.toFixed(2)
    elemento.innerHTML = `il prezzo totale è: ${calcolo}`
}

