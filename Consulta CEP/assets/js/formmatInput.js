cepInput.addEventListener('keydown', (event) => {
    addDash(event);
});

/*
    FUNCTIONS
*/
function addDash(event) {
    let cep = event.target.value.replace(/\D/g, '');
    let formattedCEP = '';

    if (cep.length > 5) {
        formattedCEP += `${cep.substring(0, 5)}-${cep.substring(5)}`;
    } else {
        formattedCEP = cep;
    }

    event.target.value = formattedCEP;
}
