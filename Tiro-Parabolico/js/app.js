EventListener();

function EventListener() {
    document.getElementById('btnCalcular').addEventListener('click', CalcularRecorrido);

}

function CalcularRecorrido() {
    let angulo = Number(document.getElementById('angulo').value);
    let velocidad = Number(document.getElementById('velocidad').value);
    //Instancia de clase
    const proyectil = new Proyectil(velocidad, angulo);

    proyectil.CrearSpan();
}