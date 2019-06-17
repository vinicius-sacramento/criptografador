let eContent = document.getElementById('content');
let eCripto = document.getElementById('cripto');
let eCriptografar = document.getElementById('criptografar');
let eClean = document.getElementById('clean');
let eCopy = document.getElementById('copy');

let baseCripto = 1000;

eContent.addEventListener('input', () => {
    eCriptografar.value = "Criptografar";

    let value = eContent.value;
    for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > baseCripto) {
            eCriptografar.value = "Descriptografar";
            break;
        }
    }
});

eCriptografar.addEventListener('click', () => {
    eCripto.value = eContent.value
        .split('')
        .map(s => String
            .fromCharCode(s.charCodeAt(0)
                + (s.charCodeAt(0) > baseCripto ? -baseCripto : baseCripto)))
        .join('');

    eCripto.removeAttribute('disabled');
});

eClean.addEventListener('click', () => {
    eContent.value = "";
});

eCopy.addEventListener('click', () => {
    eCripto.select();
    document.execCommand('copy');
});