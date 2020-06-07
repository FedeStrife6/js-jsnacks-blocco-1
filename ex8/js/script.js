//Crea due tag div con due id diversi: un div avrà il testo colorato di rosso
//mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in
//verde i numeri pari.

var arrayNumeri = [42, 99, 27, 12, 90, 16, 19, 3]
var divRosso = document.getElementById('rosso');
var divVerde = document.getElementById('verde');

for (var i = 0; i < arrayNumeri.length; i++) {
  if(arrayNumeri[i] % 2 === 0) { //numeri pari, div verde
    divVerde.innerHTML += arrayNumeri[i] + '<br>'; // br per andare a capo
  } else {
    divRosso.innerHTML += arrayNumeri[i] + '<br>';

  }
}
