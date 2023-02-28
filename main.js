function loadHTML(){
  // Crea una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Establece la solicitud HTTP a enviar y el método utilizado
  xhr.open('GET', 'auxtitle.html');

  // Define la función que se llamará cuando se complete la solicitud
  xhr.onload = function() {
    document.getElementById('html-demo').innerHTML = xhr.responseText;
  };

  // Envía la solicitud
  xhr.send();
}
