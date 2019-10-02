window.onload = function() {
    this.funConfigurarPageAPI();   
}

function funConfigurarPageAPI() {
    page('/', funIndex)
    page('/resume', funResume)
    page('/portafolio', funPortafolio)
    page('/contacto/:contactName', funContacto)
    page('/acercade', funAcercade)
    page('*', funNotFound)
    page()
}

function funIndex() {
    funLeerDatosServidor("home.html", null, true, funGetServerResponse);
}

function funResume() {
    document.getElementById( "containerSection" ).innerText = "Resume";
}

function funPortafolio() {
    document.getElementById( "containerSection" ).innerText = "Portafolio";
}

function funContacto( ctx ) {
    document.getElementById( "containerSection" ).innerText = "Contacto: " + (ctx.params.contactName) || "";
}

function funAcercade() {
    document.getElementById( "containerSection" ).innerText = "Acerca de";
}

function funNotFound() {
    document.getElementById( "containerSection" ).innerText = "Error 404 - !Objeto no localizado!";
}

function funGetServerResponse(resp) {
        document.getElementById( "containerSection" ).innerHTML = resp;
}