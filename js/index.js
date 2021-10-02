const ventanaEmergente = document.getElementById("popup-info");
const botonFlotante = document.getElementById("boton-flotante");
const textoUno = document.getElementById("texto-uno");
const textoDos = document.getElementById("texto-dos");
const textoTres = document.getElementById("texto-tres");
const textoCuatro = document.getElementById("texto-cuatro");
const botonUno = document.getElementById("boton-uno");
const botonDos = document.getElementById("boton-dos");
const botonTres = document.getElementById("boton-tres");
const botonCuatro = document.getElementById("boton-cuatro");
const imagenUno = document.getElementById("img1");
const imagenDos = document.getElementById("img2");
const imagenTres = document.getElementById("img3");
const imagenCuatro = document.getElementById("img4");
const imagenCinco = document.getElementById("img5");
var estado = 0;
const botonDefecto = "background: rgb(225, 225, 225) none repeat scroll 0% 0%;";

ventanaEmergente.style.cssText = "display: none";

const SubeyBaja = function () {
  if (botonFlotante.classList.contains("baja")) {
    botonFlotante.classList.remove("baja");
    botonFlotante.classList.add("sube");
  } else if (botonFlotante.classList.contains("sube")) {
    botonFlotante.classList.remove("sube");
    botonFlotante.classList.add("baja");
  } else {
    botonFlotante.classList.add("baja");
  }
};

SubeyBaja();

setInterval(SubeyBaja, 1000);

const CambiarInfo = function () {
  //La ventana cuenta con 5 estados
  //0 = Inicio de loop color mostaza
  //1 = amarillo mostaza
  //2 = azul
  //3 = rosa pastel
  //4 = verde militar
  if (estado == 1) {
    imagenUno.src = "https://picsum.photos/700/902.jpg";
    imagenDos.src = "https://picsum.photos/690/904.jpg";
    imagenTres.src = "https://picsum.photos/670/902.jpg";
    imagenCuatro.src = "https://picsum.photos/680/904.jpg";
    imagenCinco.src = "https://picsum.photos/650/902.jpg";
  } else if (estado == 2) {
    imagenUno.src = "https://picsum.photos/602/910.jpg";
    imagenDos.src = "https://picsum.photos/602/880.jpg";
    imagenTres.src = "https://picsum.photos/602/890.jpg";
    imagenCuatro.src = "https://picsum.photos/602/900.jpg";
    imagenCinco.src = "https://picsum.photos/602/922.jpg";
  } else if (estado == 3) {
    imagenUno.src = "https://picsum.photos/688/902.jpg";
    imagenDos.src = "https://picsum.photos/681/904.jpg";
    imagenTres.src = "https://picsum.photos/683/902.jpg";
    imagenCuatro.src = "https://picsum.photos/689/914.jpg";
    imagenCinco.src = "https://picsum.photos/684/913.jpg";
  } else if (estado == 4) {
    imagenUno.src = "https://picsum.photos/599/911.jpg";
    imagenDos.src = "https://picsum.photos/598/911.jpg";
    imagenTres.src = "https://picsum.photos/597/911.jpg";
    imagenCuatro.src = "https://picsum.photos/596/911.jpg";
    imagenCinco.src = "https://picsum.photos/595/911.jpg";
  }

  textoUno.style.cssText = "display: none";
  textoDos.style.cssText = "display: none";
  textoTres.style.cssText = "display: none";
  textoCuatro.style.cssText = "display: none";

  botonUno.style.cssText = botonDefecto;
  botonDos.style.cssText = botonDefecto;
  botonTres.style.cssText = botonDefecto;
  botonCuatro.style.cssText = botonDefecto;

  switch (estado) {
    case 0:
      botonUno.style.cssText = "background-color: #c28b00;";
      textoUno.style.cssText = "display: block";
      estado = 2;
      break;

    case 1:
      botonFlotante.style.cssText = "background-color: #c28b00;";
      textoUno.style.cssText = "display: block";
      botonUno.style.cssText = "background-color: #c28b00;";
      estado = 2;
      break;

    case 2:
      botonFlotante.style.cssText = "background-color: #0076d3;";
      textoDos.style.cssText = "display: block";
      botonDos.style.cssText = "background-color: #0076d3;";
      estado = 3;
      break;

    case 3:
      botonFlotante.style.cssText = "background-color: #bf4bc1;";
      textoTres.style.cssText = "display: block";
      botonTres.style.cssText = "background-color: #bf4bc1;";
      estado = 4;
      break;

    case 4:
      botonFlotante.style.cssText = "background-color: #407a57;";
      textoCuatro.style.cssText = "display: block";
      botonCuatro.style.cssText = "background-color: #407a57;";
      estado = 1;
      break;
  }
};

CambiarInfo();

setInterval(CambiarInfo, 7000);

function CambiarEstado(num) {
  estado = num;
  CambiarInfo();
}

function aparecePopup() {
  ventanaEmergente.style.cssText = "display: block";
}
function desaparecePopup() {
  ventanaEmergente.style.cssText = "display: none";
}
