const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let mi = dateToday.getMinutes();
    let sc = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (mi < 10) mi = '0' + mi;

    if (sc < 10) sc = '0' + sc;

    horas.textContent = hr;
    minutos.textContent = mi;
    segundos.textContent = sc;


})
