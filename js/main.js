const nomeUtente = prompt ("Inserisci il tuo nome");
const cognomeUtente = prompt ("Inserisci il tuo cognome");
const colorePreferito = prompt ("Inserisci il tuo colore preferito");

const password = document.getElementById("password");
password.innerHTML = `<strong>${nomeUtente}</strong>${cognomeUtente}<span style= "color:purple">${colorePreferito}</span><em>21</em>`

// nomeUtente + cognomeUtente + colorePreferito + "21"
// sofiacitriniviola21