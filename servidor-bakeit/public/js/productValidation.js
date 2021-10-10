window.addEventListener("load", function () {
    const formulario = document.getElementById("productos_form");

    const campoNombre = document.querySelector("#nombre");
    const campoTipo = document.querySelector("#tipo");
    const campoCategoria = document.querySelector("#categoria_id");
    const campoDescripcion = document.querySelector("#descripcion");
    const campoElementos = document.querySelector("#elementos");
    const campoPrecio = document.querySelector("#precio");
    const campoPorciones = document.querySelector("#porciones");

    formulario.addEventListener("submit", function (event) {
        const nombre = ValidarNombre(true);
        const tipo = ValidarTipo(true);
        const categoria = ValidarCategoria(true);
        const descripcion = ValidarDescripcion(true);
        const elementos = ValidarElementos(true);
        const precio = ValidarPrecio(true);
        const porciones = ValidarPorciones(true);

        if (tipo != "" || nombre != "" || categoria != "" || descripcion != "" || elementos != "" || precio != "" || porciones != "") {
            event.preventDefault();
        }
    })

    campoNombre.addEventListener('input', function () {
        ValidarNombre(false);
    });

    campoTipo.addEventListener('input', function () {
        ValidarTipo(false);
    });

    campoCategoria.addEventListener('input', function () {
        ValidarCategoria(false);
    });

    campoDescripcion.addEventListener('input', function () {
        ValidarDescripcion(false);
    });

    campoElementos.addEventListener('input', function () {
        ValidarElementos(false);
    });

    campoPrecio.addEventListener('input', function () {
        ValidarPrecio(false);
    });

    campoPorciones.addEventListener('input', function () {
        ValidarPorciones(false);
    });

    function ValidarNombre(returnNeeded) {
        const errorNombre = document.querySelector(".validate_nombre");
        if (campoNombre.value == "") {
            errorNombre.innerHTML = "El campo nombre no puede estar vacío.";
        } else if (campoNombre.value.length < 2) {
            errorNombre.innerHTML = "El campo nombre requiere un mínimo de 2 caracteres.";
        } else {
            errorNombre.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorNombre.innerHTML;
        }
    };

    function ValidarTipo(returnNeeded) {
        const errorTipo = document.querySelector(".validate_tipo");
        const tipos = ["postre","kit"];
        if (campoTipo.value == "") {
            errorTipo.innerHTML = "El campo tipo no puede estar vacío.";
        } else if (!tipos.includes(campoTipo.value)) {
            errorTipo.innerHTML = "El campo debe ser del tipo postre o kit.";
        } else {
            errorTipo.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorTipo.innerHTML;
        }
    };

    function ValidarCategoria(returnNeeded) {
        const errorCategoria = document.querySelector(".validate_categoria");
        console.log(campoCategoria.value);
        if (campoCategoria.value == "") {
            errorCategoria.innerHTML = "Seleccione una categoria valida";
        } else {
            errorCategoria.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorCategoria.innerHTML;
        }
    };

    function ValidarDescripcion(returnNeeded) {
        const errorDescripcion = document.querySelector(".validate_descripcion");
        if (campoDescripcion.value == "") {
            errorDescripcion.innerHTML = "El campo descripcion no puede estar vacío.";
        } else if (campoDescripcion.value.length < 2) {
            errorDescripcion.innerHTML = "El campo descripcion requiere un mínimo de 2 caracteres.";
        } else {
            errorDescripcion.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorDescripcion.innerHTML;
        }
    };

    function ValidarElementos(returnNeeded) {
        const errorElementos = document.querySelector(".validate_elementos");
        if (campoElementos.value == "") {
            errorElementos.innerHTML = "El campo elementos no puede estar vacío.";
        } else if (campoElementos.value.length < 2) {
            errorElementos.innerHTML = "El campo descripcion requiere tener al menos un elemento.";
        } else {
            errorElementos.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorElementos.innerHTML;
        }
    };

    function ValidarPrecio(returnNeeded) {
        const errorPrecio = document.querySelector(".validate_precio");
        const validate = /[+-]?([0-9]*[.])?[0-9]+/;

        if (campoPrecio.value == "") {
            errorPrecio.innerHTML = "El campo elementos no puede estar vacío.";
        } else if ( !validate.test(campoPrecio.value) ) {
            errorPrecio.innerHTML = "Ingrese un precio valido.";
        } else {
            errorPrecio.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorPrecio.innerHTML;
        }
    };

    function ValidarPorciones(returnNeeded) {
        const errorPorciones = document.querySelector(".validate_porciones");
        if (campoPorciones.value == "") {
            errorPorciones.innerHTML = "El campo porciones no puede estar vacío.";
        } else if (campoPorciones.value.length < 2) {
            errorPorciones.innerHTML = "El campo porciones requiere un mínimo de 2 caracteres.";
        } else {
            errorPorciones.innerHTML = "";
        }
        if (returnNeeded == true) {
            return errorPorciones.innerHTML;
        }
    };
});