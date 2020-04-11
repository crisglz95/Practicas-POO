const anio = document.getElementById('anio');

EventListener();
LlenarSelectAnio();

function EventListener() {
    document.querySelector('#cotizar-seguro').addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro(event) {
    event.preventDefault();
    const marcaSeleccionada = document.getElementById('marca').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const valueAnio = anio.value;

    const interfaz = new Interfaz();

    if (marcaSeleccionada == '' || tipo == '' || valueAnio == '') {
        interfaz.MostrarMensaje('Faltan Datos, favor de revisar el formulario', 'error');
        return;
    }

    const resultado = document.querySelector('#resultado div');

    if (resultado != null) resultado.remove();

    const seguro = new Seguro(marcaSeleccionada, valueAnio, tipo);
    const total = seguro.cotizarSeguro();

    interfaz.MostrarResultado(seguro, total);
    interfaz.MostrarMensaje('Cotizando...', 'Exito');

}

function LlenarSelectAnio() {
    const max = new Date().getFullYear();
    const min = max - 20;

    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        anio.appendChild(option);
    }
}