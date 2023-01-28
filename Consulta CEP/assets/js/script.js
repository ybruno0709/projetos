const cepInput = document.querySelector('input[name="cep-input"]');
const formEl = document.querySelector('form .form-single');
const tableEl = document.querySelector('table');
const tableBody = document.querySelector('table tbody');
const mobileEl = document.querySelector('.container.mobile');
let searchBtn = document.querySelector('input[name="action"]');

searchBtn.addEventListener('click', (event) => {
    let cepNumber = cepInput.value;

    event.preventDefault();

    searchCep(cepNumber);
});

/*
    FUNCTIONS
*/
async function searchCep(cepNumber) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);
        const data = await response.json();

        cepSucessfull(data);
    } catch (error) {
        cepError(error);
    }
}

function addCepToTable(data) {
    tableBody.innerHTML += `
    <tr>
        <td>${data.logradouro} ${data.complemento}</td>
        <td>${data.bairro}</td>
        <td>${data.localidade}/${data.uf}</td>
        <td>${data.cep}</td>
    </tr>
    `;
}

function addCepToMobile(data) {
    mobileEl.innerHTML = `
    <h2>Resultado</h2>
    <div class="result-single">
        <div class="result-item">
            <h3>Logradouro/Nome</h3>
            <p>${data.logradouro} ${data.complemento}</p>
        </div><!-- result-item -->
        
        <div class="result-item">
            <h3>Bairro/Distrito</h3>
            <p>${data.bairro}</p>
        </div><!-- result-item -->

        <div class="result-item">
            <h3>Localidade/UF</h3>
            <p>${data.localidade}/${data.uf}</p>
        </div><!-- result-item -->

        <div class="result-item">
            <h3>CEP</h3>
            <p>${data.cep}</p>
        </div><!-- result-item -->
    </div>
    `;
}

function cepSucessfull(data) {
    console.log(data);

    addCepToTable(data);
    addCepToMobile(data);

    formEl.classList.remove('invalid');
}

function cepError(error) {
    console.error(error);
    formEl.classList.add('invalid');
}