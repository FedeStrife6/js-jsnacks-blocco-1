//JSnack 2
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedi le parole da inserire
var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

if (primaParola.length > secondaParola.length) {
    alert('La parola più corta è ' + secondaParola + ' mentre la parola più lunga è: ' + primaParola);

  } else if (primaParola.length < secondaParola.length) {
    alert('La parola più corta è ' + primaParola + ' mentre la parola più lunga è: ' + secondaParola);

  } else {
    alert('Le due parole hanno la stessa lunghezza');
}
