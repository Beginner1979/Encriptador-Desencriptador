function codifica () {
    var dato = document.getElementById('ingresartexto');

    const abc_minuscula_y_espacio = [" ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    for (let index = 0; index < dato.value.length; index++) {        
        if(abc_minuscula_y_espacio.indexOf(dato.value[index]) === -1 ){
            alert("Solo letras minúsculas");
            return false;
        }
    }

     document.getElementById("muñeco").style.display = "none";
     document.getElementById("h4").style.display = "none";
     document.getElementById("Copiar").style.display = "block";
     const chars = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }

var datoencriptado = dato.value.replace(/[aeiou]/g, m => chars[m]);
document.getElementById("codificacion").innerHTML = datoencriptado;
dato.value = "";
}    