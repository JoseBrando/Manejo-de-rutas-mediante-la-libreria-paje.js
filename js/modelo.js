var peticion = funGetXHR();
var funRetornoControlador;

function funLeerDatosServidor( url, data, async, funRetorno ) {
    this.funRetornoControlador = funRetorno;

    if( peticion ) {
        peticion.open("POST", url, async);
        peticion.onreadystatechange = funProcesarPeticion;
        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion.send(data);
    }else {
        console.log("Error al instanciar el objeto XMLHttpRequest");
    }
}

function funProcesarPeticion() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            funRetornoControlador(peticion.responseText);
        }
    }
}
