const actividad = document.querySelector('#txActividad');
const listaActividades = document.querySelector('#lista-pendientes');
const listaTerminadas = document.querySelector('#lista-terminadas');
EventListener();
CargarActividadesLocalStorage();

function EventListener() {
    document.querySelector('#formulario').addEventListener('submit', ObtenerFormulario);
    listaActividades.addEventListener('click', TerminarActividad);
    document.querySelector('#btnLimpiar').addEventListener('click', LimpiarTerminados);
}

function LimpiarTerminados() {
    ManipularLocalStorage.LimpiarTerminados('lista-terminadas');
}

function ObtenerFormulario(event) {
    event.preventDefault();

    if (actividad.value.trim() == '') return;

    const InstanciaActividades = new Actividades(actividad.value);
    InstanciaActividades.AgregarActividadDom(listaActividades, true);
    actividad.value = '';
}

function TerminarActividad() {
    Actividades.EliminarActividadDom(event);
    const liBorrado = event.target.parentElement.parentElement;
    let textoLiBorrado = liBorrado.textContent.substring(0, liBorrado.textContent.length - 1);
    const instanciaTerminado = new Actividades(textoLiBorrado);
    instanciaTerminado.AgregarActividadDom(listaTerminadas, false);
}

function CargarActividadesLocalStorage() {
    const actividadesLS = ManipularLocalStorage.ObtenerLocalStorage('actividades');
    for (let i = 0; i < actividadesLS.length; i++) {
        const InstanciaActividades = new Actividades(actividadesLS[i]);
        InstanciaActividades.AgregarActividadDom(listaActividades, false);
    }
    const terminadasLS = ManipularLocalStorage.ObtenerLocalStorage('terminadas');
    console.log(terminadasLS);
    for (let i = 0; i < terminadasLS.length; i++) {
        const InstanciaActividadesTerminadas = new Actividades(terminadasLS[i]);
        InstanciaActividadesTerminadas.AgregarActividadDom(listaTerminadas, false);
    }
}