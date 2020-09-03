let btnSymbolicate = document.getElementById('buttonSymbolicate');
let input = document.getElementById('inputFile');
let progressBar = document.getElementById('progressIps');
let alertSuccess = document.getElementById('alert-success');
let downloadLink = document.getElementById('alert-link-id');

input.onchange = function() {
    btnSymbolicate.disabled = false
};

btnSymbolicate.addEventListener ('click', () => {
    progressBar.hidden = false
    alertSuccess.hidden = false
    downloadLink.href = "https://www.google.com"
});