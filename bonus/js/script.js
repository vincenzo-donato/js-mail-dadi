// click conferma 
var conferma = document.getElementById('confermaEmail');

conferma.addEventListener('click', function(){

// assegno valori var     
var passwordServer = ["Vince", "Luisa", "Giorgia", "Valerio", "Fil"];
var emailVisitatore = document.getElementById('email').value;
var passwordVisitatore = document.getElementById('password').value;
var consenzo = 'Bentornato' + ' ' + emailVisitatore;
var aiuto = '';

// if per password errata 
if(passwordServer[0] != passwordVisitatore && passwordServer[1] != passwordVisitatore && passwordServer[2] != passwordVisitatore && passwordServer[3] != passwordVisitatore && passwordServer[4] != passwordVisitatore){
    consenzo = 'Mi dispiace' + ' ' + emailVisitatore + ' ' + 'password errata.';
    aiuto = "Hai dimenticato la password? <p>Ti posso aiutare, eccone un paio: Vince, Luisa, Giorgia, Valerio, Fil</p>";
    document.getElementById('resetta').className = 'show';
} 




// stampo testo 
document.getElementById('esito').innerHTML = consenzo;
document.getElementById('help').innerHTML = aiuto;

})

// click riprova se password errata 
var riprova = document.getElementById('resetta');

riprova.addEventListener('click', function(){

    // stampo se password errata 
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('esito').innerHTML = '';
    document.getElementById('resetta').className = 'hidden';

})