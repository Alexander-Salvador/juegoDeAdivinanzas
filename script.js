// Programa para seleccionar un numero al azar.
let randomNumber = Math.floor(Math.random() * 100) + 1;
let enterYourNumber = document.getElementById('enterYourNumber');
let answer = document.getElementById('answer');
let count = 0;

// Revisar resultado
function checkResult() {
    count++
    let userNumber = parseInt(enterYourNumber.value);

    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
        answer.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
        return;
    };

    if (userNumber === randomNumber) {
        answer.textContent = 'Felicitaciones, has adivinado el numero';
        answer.style.color = 'green';
        userNumber.disable = 'true';
    } else if (userNumber < randomNumber) {
        answer.textContent = 'Estamos cerca, ingresa un numero mas alto';
        answer.style.color = 'white';
    } else {
        answer.textContent = 'Estamos cerca, Ingresa un numero mas bajo';
        answer.style.color = 'white';
    }
}