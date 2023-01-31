// BUTTONS & TEXTAREAS

let textInput = document.getElementById('input');
let deleteBtn = document.getElementsByClassName('delete');
let encryptBtn = document.getElementsByClassName('encrypt');
let desencryptBtn = document.getElementsByClassName('desencrypt');
let copyBtn = document.getElementsByClassName('copyBtn');
let msg = document.getElementById('msg');


// ENCRYPT FUNCION 

function encryptor() {
    let encMsg = textInput.value;

    encMsg = encMsg.replaceAll('e', 'enter');
    encMsg = encMsg.replaceAll('o', 'ober');
    encMsg = encMsg.replaceAll('i', 'imes');
    encMsg = encMsg.replaceAll('a', 'ai');
    encMsg = encMsg.replaceAll('u', 'ufat');

    msg.value = encMsg;

}

// DECRYPT FUNCTION

function desencrypter() {
    let desenMsg = msg.value;
    desenMsg = desenMsg.replaceAll('enter', 'e')
    desenMsg = desenMsg.replaceAll('ober', 'o')
    desenMsg = desenMsg.replaceAll('imes', 'i')
    desenMsg = desenMsg.replaceAll('ai', 'a')
    desenMsg = desenMsg.replaceAll('ufat', 'u')

    msg.value=desenMsg;

}

// DELETE FUNCTION 

function dlt(){
    textInput.value = "";
}

// EVENT LISTENERS

encryptBtn[0].addEventListener('click', encryptor)
desencryptBtn[0].addEventListener('click', desencrypter)
deleteBtn[0].addEventListener('click', dlt)