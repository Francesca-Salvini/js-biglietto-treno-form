// Funzionalità del bottone "Genera"

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function () {

    //Operazioni da svolgere al click su button Genera
    var prezzoPerKm = 0.21;

    //Nome passeggero: leggo l'input generator-user-name
    var generatorUserNameElement = document.getElementById('generator-user-name');
    var userName = generatorUserNameElement.value;
    console.log(userName); 

    //Offerta: leggo l'input generator-age, faccio una if 
    //         se minorenne/maggiorenne/over65

    var generatorUserAge = document.getElementById('generator-age');
    var userAge = generatorUserAge.value;
    console.log(userAge);
    var userOffer = 'Prezzo Standard';
    if(userAge == 'minorenne') {
        userOffer = 'Sconto minorenni';
    } else if (userAge == 'over') {
        userOffer = 'Sconto Silver';
    } 

    console.log(userOffer);

    //Carrozza

    //Codice CP 

    //Prezzo biglietto

    var generatorKm = document.getElementById('generator-km');
    var userKm = generatorKm.value;
    var userKmAsInt = parseInt(userKm);
    console.log(userKmAsInt);

    var finalPrice = prezzoPerKm * userKmAsInt; 
    

    if( userAge == 'minorenne') {
        finalPrice = finalPrice - (finalPrice * 0.2);
    } else if ( userAge == 'over') {
        finalPrice = finalPrice - (finalPrice * 0.4);
    }

    console.log(finalPrice);

    //STAMPARE
    //Nome utente (userName)
    document.getElementById('result-user-name').innerHTML = userName;

    //Offerta (userOffer)
    document.getElementById('result-offer').innerHTML = userOffer;

    //Prezzo biglietto (finalPrice)
    document.getElementById('result-price').innerHTML = finalPrice.toFixed(2) + ' euro';

});

//Funzionalità del bottone Annulla
var cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener('click', function( ) {

    document.getElementById('generator-user-name').value = '';
    document.getElementById('generator-km').value = '';
    document.getElementById('generator-age').value = '';

    
});