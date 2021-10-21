window.addEventListener("load", function () {
    let formulario = document.getElementById("register");

    let campoNombre = document.querySelector("#name");
    let campoApellido = document.querySelector("#lastName");
    let campoFechaNacimiento = document.querySelector("#birthdate");
    let campoCorreo = document.querySelector("#email");
    let campoContrasena = document.querySelector("#password");
    let campoAvatar = document.querySelector("#Avatar");
    let campoTerminos = document.querySelector("#checkbox_terminos");

    formulario.addEventListener("submit", function (event) {
        let nombre = ValidarNombre(true);
        let apellido = ValidarApellido(true);
        let fechaNacimiento = ValidarFechaNacimiento(true);
        let correo = ValidarCorreo(true);
        let contrasena = ValidarContrasena(true);
        let avatar = ValidarAvatar(true);
        let terminos = ValidarTerminos(true);

        if (apellido != "" || nombre != "" || fechaNacimiento != "" || correo != "" || contrasena != "" || avatar != "" || terminos != "") {
            event.preventDefault();
        }
    })

    campoNombre.addEventListener('input', function () {
        ValidarNombre(false);
    });

    campoApellido.addEventListener('input', function () {
        ValidarApellido(false);
    });

    campoFechaNacimiento.addEventListener('input', function () {
        ValidarFechaNacimiento(false);
    });

    campoCorreo.addEventListener('input', function () {
        ValidarCorreo(false);
    });

    campoContrasena.addEventListener('input', function () {
        ValidarContrasena(false);
    });

    campoAvatar.addEventListener('input', function () {
        ValidarAvatar(false);
    });

    campoTerminos.addEventListener('input', function () {
        ValidarTerminos(false);
    });

    function ValidarNombre(returnNeeded) {
        let errorNombre = document.querySelector(".validate_name");
        if (campoNombre.value == "") {
            errorNombre.innerHTML = "El campo nombre no puede estar vacío.";
        } else if (campoNombre.value.length < 2) {
            errorNombre.innerHTML = "El campo nombre requiere un mínimo de 2 caracteres.";
        } else if (campoNombre.value.length >= 2) {
            errorNombre.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorNombre.innerHTML;
        }
    };

    function ValidarApellido(returnNeeded) {
        let errorApellido = document.querySelector(".validate_last_name");
        if (campoApellido.value == "") {
            errorApellido.innerHTML = "El campo apellido no puede estar vacío.";
        } else if (campoApellido.value.length < 2) {
            errorApellido.innerHTML = "El campo apellido requiere un mínimo de 2 caracteres.";
        } else if (campoApellido.value.length >= 2) {
            errorApellido.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorApellido.innerHTML;
        }
    };

    function ValidarFechaNacimiento(returnNeeded) {
        let errorFechaNacimiento = document.querySelector(".validate_birthdate");
        if (campoFechaNacimiento.value.length < 1) {
            errorFechaNacimiento.innerHTML = "El campo fecha de nacimiento no puede estar vacío.";
        } else {
            errorFechaNacimiento.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorFechaNacimiento.innerHTML;
        }
    };

    function ValidarCorreo(returnNeeded) {
        let errorCorreo = document.querySelector(".validate_email");
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
        let errorContrasena = document.querySelector(".validate_password");
        let verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (campoContrasena.value == "") {
            errorContrasena.innerHTML = "El campo contraseña no puede estar vacío.";
        } else if (!verifyPassword.test(campoContrasena.value)) {
            errorContrasena.innerHTML = "El campo contraseña requiere un mínimo de 8 caracteres y debe contener letras mayúsculas, minúsculas, un número y un cáracter especial.";
        } else if (verifyPassword.test(campoContrasena.value)) {
            errorContrasena.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorContrasena.innerHTML;
        }
    };

    function ValidarAvatar(returnNeeded) {
        let errorAvatar = document.querySelector(".validate_avatar");
        if (campoAvatar.value != "") {
            let allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            let fileExtension = campoAvatar.value.split(".").pop();
            if (!allowedExtensions.includes(fileExtension)) {
                errorAvatar.innerHTML = "Debes ingresar un archivo válido. Extensión JPG, JPEG, PNG o GIF."
            } else {
                errorAvatar.innerHTML = "";
            }
        }
        if (returnNeeded == true) {
            return errorAvatar.innerHTML;
        }
    };

    function ValidarTerminos(returnNeeded) {
        let errorTerminos = document.querySelector(".validate_terms");
        if (campoTerminos.checked == false) {
            errorTerminos.innerHTML = "Los términos y condiciones deben ser aceptados.";
        } else {
            errorTerminos.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorTerminos.innerHTML;
        }
    };
});