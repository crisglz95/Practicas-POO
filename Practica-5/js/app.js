const imagen = document.getElementById('carro');
let sizeMarginLeft = 0;
let sizeMarginBottom = 0;

let carro = new Car(0, 0);

let PosicionImagenes = [];

let contenedor = document.getElementById('contenedor');

EventListener();

function EventListener() {
    document.addEventListener('DOMContentLoaded', ObtenerMargin);
    document.addEventListener('keydown', MoveCar);
    contenedor.addEventListener('click', PonerPremio);
    window.addEventListener('resize', ObtenerMargin);
}

function MoveCar(event) {
    carro.MoverCarro(event.key, imagen);
    const response = carro.VerificarColision(PosicionImagenes);

    if (response != null) {
        Premios.EliminarPremio(contenedor, PosicionImagenes[response].id);
        PosicionImagenes.splice(response, 1);
    }
}

function PonerPremio(event) {
    let premio = new Premios(event.x, event.y);
    PosicionImagenes.push(premio.CrearImagen(contenedor, sizeMarginLeft, sizeMarginBottom));
    console.log(PosicionImagenes);
}

function ObtenerMargin() {
    const marginContainer = window.getComputedStyle(contenedor).getPropertyValue('margin-left');

    sizeMarginLeft = marginContainer.substr(0, marginContainer.length - 2);

    const marginContainerBottom = window.getComputedStyle(contenedor).getPropertyValue('margin-bottom');

    sizeMarginBottom = marginContainer.substr(0, marginContainerBottom.length - 2);

}