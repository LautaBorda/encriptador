// BUTTONS & TEXTAREAS

let textInput = document.getElementById('input');
let deleteBtn = document.getElementsByClassName('delete');
let encryptBtn = document.getElementsByClassName('encrypt');
let desencryptBtn = document.getElementsByClassName('desencrypt');
let copyBtn = document.getElementsByClassName('copyBtn');
let msg = document.getElementById('msg');
let image = document.getElementsByClassName('question-mark');


// ENCRYPT FUNCION 

function encryptor() {
    let encMsg = textInput.value;

    encMsg = encMsg.replaceAll('e', 'enter');
    encMsg = encMsg.replaceAll('o', 'ober');
    encMsg = encMsg.replaceAll('i', 'imes');
    encMsg = encMsg.replaceAll('a', 'ai');
    encMsg = encMsg.replaceAll('u', 'ufat');

    msg.value = encMsg;

    if(msg.value != "") {
        ocultarImagen()
    }
}

// DECRYPT FUNCTION

function desencrypter() {
    let desenMsg = msg.value;
    desenMsg = desenMsg.replaceAll('enter', 'e')
    desenMsg = desenMsg.replaceAll('ober', 'o')
    desenMsg = desenMsg.replaceAll('imes', 'i')
    desenMsg = desenMsg.replaceAll('ai', 'a')
    desenMsg = desenMsg.replaceAll('ufat', 'u')

    msg.value = desenMsg;

}

// DELETE FUNCTION 

function dlt() {
    textInput.value = "";
    msg.value="No se encontro ningún mensaje";
    mostrarImagen()
}

// COPY FUNCTION USING CLIPBOARD API

function copyToClipboard() {
    if (msg.value != "") {
        textInput.value = msg.value;
        navigator.clipboard.writeText(msg.value);
        textInput.select();
    }
    textInput.focus();
}

function ocultarImagen() {
    image[0].style.visibility = "hidden"
}

/*MOSTRAR IMAGEN*/

function mostrarImagen() {
    image[0].style.visibility = "visible"
}

// // EVENT LISTENERS AND FUNCTIONAL BUTTONS 

encryptBtn[0].addEventListener('click', encryptor)
desencryptBtn[0].addEventListener('click', desencrypter)
deleteBtn[0].addEventListener('click', dlt)
copyBtn[0].addEventListener('click', copyToClipboard)
