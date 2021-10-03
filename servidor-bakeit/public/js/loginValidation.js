window.addEventListener("load", function () {
    let formulario = document.getElementById("create_customer");

    let campoCorreo = document.querySelector("#Email");
    let campoContrasena = document.querySelector("#CreatePassword");

    formulario.addEventListener("submit", function (event) {
        let correo = ValidarCorreo(true);
        let contrasena = ValidarContrasena(true);

        if (correo != "" || contrasena != "") {
            event.preventDefault();
        }
    });

    campoCorreo.addEventListener('input', function () {
        ValidarCorreo(false);
    });

    campoContrasena.addEventListener('input', function () {
        ValidarContrasena(false);
    });

    function ValidarCorreo(returnNeeded) {
        let errorCorreo = document.querySelector(".validate_correo");
        if (campoCorreo.value == "") {
            errorCorreo.innerHTML = "El campo correo no puede estar vacío.";
        } else {
            let validate = /\S+@\S+\.\S+/;
            if (validate.test(campoCorreo.value) == false) {
                errorCorreo.innerHTML = "Debes ingresar un correo válido.";
            } else {
                errorCorreo.innerHTML = "";
            }
        }
        if (returnNeeded == true) {
            return errorCorreo.innerHTML;
        }
    };

    function ValidarContrasena(returnNeeded) {
        let errorContrasena = document.querySelector(".validate_contraseña");
        if (campoContrasena.value == "") {
            errorContrasena.innerHTML = "El campo contraseña no puede estar vacío.";
        } else {
            errorContrasena.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorContrasena.innerHTML;
        }
    };
});