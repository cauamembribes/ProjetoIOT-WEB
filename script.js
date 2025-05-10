const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 7500);

/* ---------------------------------------------------- */

 function Calcular() {

let potencia = parseFloat(document.getElementById('camp1').value);
let horas = parseFloat(document.getElementById('camp2').value);
let dias = parseFloat(document.getElementById('camp3').value);
let resultado;

    resultado = (potencia*horas*dias)/1000;


    document.getElementById('resultado').value = resultado + " Consumo (KwH)";
}

    function CalcularTarifa(){
        let Consumo = parseFloat(document.getElementById('Consumo').value);
        let Tarifa = parseFloat(document.getElementById('Tarifa').value);

        valor = Consumo * Tarifa;

        document.getElementById('Valor').value = "R$ " + valor;

    }


