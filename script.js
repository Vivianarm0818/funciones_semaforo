
const $lucesSemaforo = document.querySelectorAll ('.luz');
let contadorLuz = 0;

const mostrarLuz = () => {
  $lucesSemaforo[contadorLuz].className = '.luz';
  contadorLuz++;
  if (contadorLuz > 2) contadorLuz = 0;

  const luzActual = $lucesSemaforo[contadorLuz];
  luzActual.classList.add(luzActual.getAttribute(color))
}

setInterval(mostrarLuz,2000)