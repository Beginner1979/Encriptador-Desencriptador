
function descodifica () {
  var dato = document.getElementById('ingresartexto');
  var datoencriptado = dato.value;


  const chars = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };
 

  var datoencriptado1 = datoencriptado.replace(new RegExp(Object.keys(chars).join('|'), 'g'), m => chars[m]);
  document.getElementById("codificacion").innerHTML = datoencriptado1;
  dato.value = "";

}
  