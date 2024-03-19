
function codifica () {
     var dato = document.getElementById('ingresartexto');
     var datoencriptado = dato.value;

     const chars = {
       'a': 'ai',
       'e': 'enter',
       'i': 'imes',
       'o': 'ober',
       'u': 'ufat'
      };

    var datoencriptado1 = datoencriptado.replace(/[aeiou]/g, m => chars[m]);
    document.getElementById("codificacion").innerHTML = datoencriptado1;
    dato.value = "";
}