//JSnack 1
//L’utente inserisce due numeri in successione, con due
//prompt. Il software stampa il maggiore.

// Inserimento numeri
var primoNumero = parseInt(prompt("Inserisci il primo numero, Grazie"));
var secondoNumero = parseInt(prompt("Inserisci il secondo numero, Grazie"));
var messaggio;

// Calcolo del numero maggiore
if ( primoNumero > secondoNumero) {
  alert('Il numero maggiore è ' + primoNumero);
}
else if( primoNumero < secondoNumero) {
  alert('Il numero maggiore è ' + secondoNumero);
}
else {
  alert('Hai inserito due volte lo stesso numero!');
}
