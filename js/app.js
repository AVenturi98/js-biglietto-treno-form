/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/



// DICHIARAZIONE VARIABILI

// form
const formUtente = document.getElementById('form_utente');

// km 
const kmUtente = document.getElementById('km_utente');

// eta
const etàUtente = document.getElementById('età_utente');

const bullet = document.getElementById('biglietto_generato');

// costo km
const costoKm = document.getElementById('km_percorsi');

// info sconto
const sconto = document.getElementById('sconto_disponibile');

//costo totale
const costoTOT = document.getElementById('costo_totale');

// button refresh
const btnRefresh = document.getElementById('refresh_button');





//-----------------------------------------------------------------------------------------//




//funzione calcolo input 
formUtente.addEventListener('submit', function (event) {
    
    //default form
    event.preventDefault();
    
    console.log('KM: ' + kmUtente.value);
    console.log('Età: ' + etàUtente.value);
    
    //prezzo per km
    const prezzoPerKm = 0.21; // numb    
    const calcoloCosto = prezzoPerKm * kmUtente.value; // numb
    
    console.log('Questo è il costo totale per i tuoi km:', (calcoloCosto), '€');

    
    // condizione sconto
    function scontistica(e) {

        

        let infoSconto = '-';

        if (etàUtente.value < 18) {
            infoSconto = '20%';
        } else if (etàUtente.value >= 65) {
            infoSconto = '40%';
        }

        console.log(infoSconto);

        return infoSconto
    };

    const discount = scontistica(calcoloCosto);

    //condizione costo Totale
    function costoScontato(l, u) {

        // SE minorenne 
        const scontoVenti = calcoloCosto * 20 / 100; // numb
    
        // SE oever 65
        const scontoQuar = calcoloCosto * 40 / 100; // numb
        
        let costoCompleto = '';

        if (l === '20%') {
            costoCompleto = u - scontoVenti
        } else  if (l === '40%') {
            costoCompleto = u - scontoQuar
        } else costoCompleto = u
        
        return costoCompleto.toFixed(2) + '€'
    }
    
    const costoCOMP = costoScontato(discount ,calcoloCosto);
    // stampo in schermata

    // costo km
    const ticketInfoCosto = document.createElement('div');
    const costoSub = document.createTextNode('Costo base: ' + calcoloCosto.toFixed(2) + '€');
    
    costoKm.appendChild(ticketInfoCosto);
    ticketInfoCosto.appendChild(costoSub);
    ticketInfoCosto.classList.add('fw-normal');
    ticketInfoCosto.classList.add('border-top');


    // info sconto 
    const ticketInfoSconto = document.createElement('div');
    const discountText = document.createTextNode(discount);

    sconto.appendChild(ticketInfoSconto);
    ticketInfoSconto.appendChild(discountText);
    ticketInfoSconto.classList.add('fw-normal');
    ticketInfoSconto.classList.add('border-top');

    // costo totale 
    const ticketInfoCosTOT = document.createElement('div');
    const costo = document.createTextNode(costoCOMP);

    costoTOT.appendChild(ticketInfoCosTOT);
    ticketInfoCosTOT.appendChild(costo);
    ticketInfoCosTOT.classList.add('fw-normal');
    ticketInfoCosTOT.classList.add('border-top');


    
    
    // button refresh
    btnRefresh.classList.remove('d-none');

    
    
    btnRefresh.addEventListener('click', function () {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        location.reload()
        btnRefresh.classList.add('d-none');
    })
    
    
    // ritorno di valore default
    return kmUtente.value = '', etàUtente.value = ''
})




