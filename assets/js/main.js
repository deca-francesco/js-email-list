/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)
*/

// preparazione variabili
const emailListEl = document.getElementById("emailList");
const btnGenerateEl = document.getElementById("btnGenerate");
const h2El = document.querySelector(".row > .col:first-child > h2");


// funzione per generare 10 email
function generate10randomEmail() {
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            // console.log(response.data.response);
            const emailLiEl = document.createElement("li");
            emailLiEl.innerText = `--- ${response.data.response}`;
            console.log(emailLiEl);
            emailListEl.appendChild(emailLiEl);
        }).catch(err => console.error(err))
    }
}

// la richiamo subito
generate10randomEmail();



// click del bottone
btnGenerateEl.addEventListener("click", function() {
    // cancello le email già presenti
    emailListEl.innerText = "";
    generate10randomEmail();
})