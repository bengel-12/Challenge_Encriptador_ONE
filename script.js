// a -ai
// e - enter
// i - imes
// o - ober
// u - ufat

function encriptar(){
    var texto = document.getElementById("imputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/e/,"enter");
    var txtCifrado = txtCifrado.replace(/o/,"ober");
    var txtCifrado = txtCifrado.replace(/i/,"imes");
    var txtCifrado = txtCifrado.replace(/a/,"ai");
    var txtCifrado = txtCifrado.replace(/u/,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("imputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/,"e");
    var txtCifrado = txtCifrado.replace(/ober/,"o");
    var txtCifrado = txtCifrado.replace(/imes/,"i");
    var txtCifrado = txtCifrado.replace(/ai/,"a");
    var txtCifrado = txtCifrado.replace(/ufat/,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
}