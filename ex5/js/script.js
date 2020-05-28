//JSnack 5
//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt('Digita un numero di 4 cifre');

while (numero.length != 4) {
  numero = prompt('Digita un numero di 4 cifre')
}

numeroSplit = numero.split('');
  console.log(numeroSplit);

somma = 0;
for (var i = 0; i < numeroSplit.length; i++) {
  console.log(numeroIntero.length);
  somma+= parseInt(numeroSplit[i]);
}
console.log(somma);
