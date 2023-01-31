// BUTTONS & TEXTAREAS

let textInput = document.getElementById('input');
let deleteBtn = document.getElementsByClassName('delete');
let encryptBtn = document.getElementsByClassName('encrypt');
let desencryptBtn = document.getElementsByClassName('desencrypt');
let copyBtn = document.getElementsByClassName('copyBtn');
let msg = document.getElementById('msg');


// ENCRYPT FUNCION 

function encryptor() {
    let encMsg = textInput.value
    encMsg = textInput.value.replace('a', 'ai')
    encMsg = textInput.value.replace('e', 'enter')
    encMsg = textInput.value.replace('i', 'imes')
    encMsg = textInput.value.replace('o', 'ober')
    encMsg = textInput.value.replace('u', 'ufat')

    msg.value = encMsg;

    

}


// EVENT LISTENERS

encryptBtn[0].addEventListener('click', encryptor)