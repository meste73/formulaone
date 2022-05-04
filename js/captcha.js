"use strict"

/* APP CAPTCHA */
let btnnext = document.querySelector('#btn-validate1');
btnnext.addEventListener('click', validar1);

/*FUNCION VALIDAR*/
function validar1() {
    let showcaptcha = document.querySelector('#captchashower');
    showcaptcha.classList.remove("div-captcha-hider");
    showcaptcha.classList.add("div-captcha-shower");

    let givecaptcha = document.querySelector('#show-captcha');
    let valorcaptcha = Math.floor(Math.random() * 100 + 1);
    givecaptcha.innerHTML = valorcaptcha;

    let btnvalidate = document.querySelector('#btn-validate2');
    btnvalidate.addEventListener('click', validar2);

    /*FUNCION ENVIAR DENTRO DE VALIDAR*/
    function validar2() {
        let getcaptcha = document.querySelector('#input-captcha').value;
        let captchavalidation = document.querySelector('#show-captcha-validation');
        let showsubmit = document.querySelector('#btn-submit');
        if (valorcaptcha == getcaptcha) {
            captchavalidation.innerHTML = "No es un robot.";
            givecaptcha.innerHTML = "";
            showsubmit.classList.remove("form-button-hider");
            showsubmit.classList.add("form-button");
        }
        else {
            captchavalidation.innerHTML = "";
            givecaptcha.innerHTML = "";
        }
    }
}


