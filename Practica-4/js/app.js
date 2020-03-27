EventListener();

let votacion = new Votaciones();
const output = document.getElementById('output');

function EventListener() {
    document.getElementById('btnInit').addEventListener('click', GenerarDom);
}

function GenerarDom() {
    let pregunta = document.getElementById('pregunta').value;
    EliminarElementos();
    let row = document.createElement('div');
    row.setAttribute('class', 'row mt-5');
    let col12 = document.createElement('div');
    col12.setAttribute('class', 'col-12');
    let label = document.createElement('label');
    label.innerText = `Votacion en proceso: ${pregunta}`;

    let col4 = document.createElement('div');
    col4.setAttribute('class', 'col-4');

    let btnFavor = document.createElement('button');
    btnFavor.setAttribute('class', 'btn btn-outline-success btn-block');
    btnFavor.setAttribute('value', 'a Favor');
    btnFavor.setAttribute('id', 'btnFavor');
    btnFavor.innerText = 'A Favor';

    let btnContra = document.createElement('button');
    btnContra.setAttribute('class', 'btn btn-outline-warning btn-block');
    btnContra.setAttribute('value', 'en Contra');
    btnContra.setAttribute('id', 'btnContra');
    btnContra.innerText = 'en Contra';

    let btnAbstencion = document.createElement('button');
    btnAbstencion.setAttribute('class', 'btn btn-outline-secondary btn-block');
    btnAbstencion.setAttribute('value', 'Abstencion');
    btnAbstencion.setAttribute('id', 'btnAbstencion');
    btnAbstencion.innerText = 'Abstencion';

    let btnCalcular = document.createElement('button');
    btnCalcular.setAttribute('class', 'btn btn-outline-primary btn-block');
    btnCalcular.setAttribute('value', 'Abstencion');
    btnCalcular.setAttribute('id', 'btnCalcular');
    btnCalcular.innerText = 'Finalizar';

    let alert = document.createElement('div');
    alert.setAttribute('id', 'divAlert');
    alert.setAttribute('class', 'alert alert-success mt-5');


    output.appendChild(row);
    row.appendChild(col12);
    col12.appendChild(label);
    output.appendChild(row);
    row.appendChild(col12);
    col12.appendChild(btnFavor);
    col12.appendChild(btnContra);
    col12.appendChild(btnAbstencion);
    row.appendChild(col12);
    col12.appendChild(btnCalcular);
    row.appendChild(col12);
    col12.appendChild(alert);

    let btnAFavor = document.getElementById('btnFavor');
    btnAFavor.addEventListener('click', Proceso);

    document.getElementById('btnContra').addEventListener('click', Proceso);

    document.getElementById('btnAbstencion').addEventListener('click', Proceso);

    document.getElementById('btnCalcular').addEventListener('click', MostrarResultado);

}

function Proceso(event) {
    let valor = event.toElement.value;
    votacion.validarVoto(valor);
}

function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}

function MostrarResultado() {
    let resultado = votacion.RegresarResultados();
    document.getElementById('divAlert').innerText = resultado;
    document.getElementById('btnFavor').disabled = true;
}