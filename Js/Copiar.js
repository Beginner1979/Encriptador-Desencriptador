function copiarTexto() {
    var copiado = document.getElementById("codificacion");
    var contenido = copiado.textContent;
    navigator.clipboard.writeText(contenido);
}