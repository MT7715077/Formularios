function validarForma(forma) {
//Validamos el usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
//Validamos el password
    var password = forma.password;
    if (password.value == "" || password.value.length < 3) {
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
//Validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    function validarForma(forma) {
//Validamos el usuario
        var usuario = forma.usuario;
        if (usuario.value == "" || usuario.value == "Escribir usuario") {
            alert("Debe proporcionar un nombre de usuario");
            usuario.focus();
            usuario.select();
            return false;
        }
//Validamos el password
        var password = forma.password;
        if (password.value == "" || password.value.length < 3) {
            alert("Debe proporcionar un password al menos de 3 caracteres");
            password.focus();
            password.select();
            return false;
        }
//Validamos las tecnologias de interes
        var tecnologias = forma.tecnologia;
        var checkSeleccionado = false;

//Validamos la ocupacion
        var ocupacion = forma.ocupacion;
        if (ocupacion.value == "") {
            alert("Debe seleccionar una ocupacion");
            return false;
        }
//Formulario validado
        alert("Formulario valido, enviando datos...");
        return true;
    }
}