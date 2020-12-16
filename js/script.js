// inizio prompt 
var nome = prompt('Ciao, Inserisci il tuo nome')
var primaLettera = nome.charAt(0).toUpperCase();
var restoNome = nome.substring(1).toLowerCase();
var nomeFinale = primaLettera + restoNome;

// stampo nome 
document.getElementById('ciao').innerHTML += nomeFinale;

// inizio azione con click sul tasto gioca
var conferma = document.getElementById('gioca');

conferma.addEventListener('click', function(){ 

    // dichiaro le variabili 
    var numGiocatore = Math.floor(Math.random()*6) +1;
    var numPc = Math.floor(Math.random()*6) +1;
    console.log(numGiocatore, numPc);
    var vincita = 'Parita' + ' ' + 'i nostri numeri' + ' ' + numGiocatore + '-' + numPc + ' ' + 'sono uguali, giochiamo ancora';

    // inizio if su dadi 
    if(numPc < numGiocatore) {
        vincita = 'Complimenti' + ' ' + nomeFinale + ',' + ' ' + 'hai Vinto perchè il tuo numero' + ' ' + numGiocatore + ' ' + 'è più alto del mio' + ' ' + numPc;
    } else if (numPc > numGiocatore){
        vincita = 'Mi dispiace' + ' ' + nomeFinale + ',' + ' ' +  'hai perso perchè il mio numero' + ' ' + numPc + ' ' + 'è più alto del tuo' + ' ' + numGiocatore;
    }
    // fine if su dadi 

    // stampo risultato 
    document.getElementById('risultato').innerHTML = vincita;
    console.log(vincita);
});
    
