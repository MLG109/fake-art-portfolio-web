function validar_enviar() {
    "use strict";
    /**
     * En esta función se validarían los datos correctamente antes de 
     * ser enviados al servidor.
     * 
     * Debería invocarse con un input type submit, pero lo hago con un button para poder
     * poner el mensaje simulando que los datos han sido procesados.
     *
     **/
    // Obtenemos el nombre introducido en el formulario
    var nombre = document.getElementById("nombre").value;
    // Si todo está correcto, generamos el mensaje de confirmación
    var mensaje = "<p><strong>Hi! "+nombre+"</strong></p>";
    mensaje += "<p>I'll send you an email answering shortly</p>";
    mensaje += "<p>Thank you for contacting</p>";
    // Ponemos el mensaje con innerHTML en lugar de innerString porque tiene etiquetas
    // de HTML y necesitamos que las interprete
    document.getElementById("mensaje").innerHTML = mensaje;
    // Ocultamos el formulario
    document.getElementById("formulario").style.display = "none";
    // Mostramos el mensaje
    document.getElementById("mensaje").style.display = "block";
    return false;
}

