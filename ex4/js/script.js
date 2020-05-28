//JSnack 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Array lista invitati
var listaInvitati = ['Francis', 'Scott' ,'Daisy' ,'Strife' ,'Gatz' ,'Fitzgerald'];

//Chidere all'utente il suo nome
var nomeUtente = prompt('Inserisci il tuo nome');

// Partire dal concetto che l'utente non sia in elenco
var nomeTrovato = false;

// Controllare se l'utente è nella lista
for (var i = 0; i < listaInvitati.length; i++) {
    if ( nomeUtente === listaInvitati[i]) {
    nomeTrovato = true;
  }
 }
 if ( nomeTrovato == true ) {
    alert('Sig. ' + nomeUtente + ' prego, può entrare, da quella parte');
} else {
    alert('Mi spiace, ma non è sulla lista');
}
