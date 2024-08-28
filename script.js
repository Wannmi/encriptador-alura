function encriptar() {
    var textoEncriptar = document.getElementById('input').value;
            
    var texto = textoEncriptar.replace(/e/igm,'enter');
    texto = texto.replace(/i/igm, 'imes');
    texto = texto.replace(/a/igm, 'ai');
    texto = texto.replace(/o/igm, 'ober');
    var textoEncriptado = texto.replace(/u/igm, 'ufat');

    document.getElementById('texto2').innerHTML = textoEncriptado;
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiador").style.display = "inherit";
}

function desencriptar() {
    var textoDesencriptar = document.getElementById('input').value;

    var texto = textoDesencriptar.replace(/enter/igm,'e');
    texto = texto.replace(/imes/img, 'i');
    texto = texto.replace(/ai/img,'a');
    texto = texto.replace(/ober/img, 'o');
    var textoDesencriptado = texto.replace(/ufat/img, 'u');

    document.getElementById('texto2').innerHTML = textoDesencriptado;
    document.getElementById("texto1").style.display = "none";
}

function copia() {
    var contenido = document.querySelector("#texto2").innerText;
    navigator.clipboard.writeText(contenido)
    alert('Texto copiado!');
}