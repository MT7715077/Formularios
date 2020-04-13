/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validarForma(forma){
    var usuario = forma.usuario;
    if (usuario.value == "" ||  usuario.value == "Escribir usurio") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
        
    }
    var password = forma.apassword;
    if (password.value == "" ||  password.value.length < 3 ) {
        alert("Debe prporcionar un password al menos de tres caracateres");
        password.focus();
        password.select();
        return false;
        
        
    }
    var  tecnologias = forma.tecnologias;
    var  checkSeleccionado = false;
    for (var i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
            
        }
        
    }
    if (!checkSeleccionado) {
        alert("Debe selecionar alguna tecnologia");
        return false;
        
    }
    var generos = forma.genero;
    var radioSeleccionado = false;
    for (var i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
            
        }
        
        
    }
    if (!radioSeleccionado) {
        alert("El usuario debe sellecionar un genero");
        return false;
        
    }
    var ocupacion = forma.ocupacion;
    if (ocupacion.value == "") {
        alert("Debe seleccionar una ocupacion");
        return false;
        
    }
    
    alert("Formulario valido, enviando datos....");
    return true;
    
}

