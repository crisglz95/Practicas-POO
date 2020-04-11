let contenedor = document.getElementById('contenedor');
const imagen = document.getElementById('cuerpo-humano');
let alert = document.getElementById('parte-cuerpo');
let sizeMarginLeft = 0;
let sizeMarginBottom = 0;

EventListener();

function EventListener() {
    document.addEventListener('DOMContentLoaded', ObtenerMargin);
    window.addEventListener('resize', ObtenerMargin);
    imagen.addEventListener('mousemove', PosicionCursor);
}

function PosicionCursor(event) {
    const cursor = new Cuerpo(event.x, event.y);
    cursor.VerificarParte(alert);
}

function ObtenerMargin() {
    const marginContainer = window.getComputedStyle(contenedor).getPropertyValue('margin-left');

    sizeMarginLeft = marginContainer.substr(0, marginContainer.length - 2);

    const marginContainerBottom = window.getComputedStyle(contenedor).getPropertyValue('margin-bottom');

    sizeMarginBottom = marginContainer.substr(0, marginContainerBottom.length - 2);

    console.log(sizeMarginBottom);
}