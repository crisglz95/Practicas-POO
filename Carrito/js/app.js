const tablaCarrito = document.querySelector('#lista-carrito tbody');

eventListener();

function eventListener() {
    document.querySelector('#lista-cursos').addEventListener('click', GuardarCursoCarrito);

    document.querySelector('#carrito').addEventListener('click', EliminarCarrito);

    document.querySelector('#vaciar-carrito').addEventListener('click', VaciarCarrito);

    IniciarCarrito();
}

function GuardarCursoCarrito(event) {
    event.preventDefault();
    if (event.target.classList.value.search('agregar-carrito') == -1) return;
    const curso = event.target.parentElement.parentElement;
    const informacionCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    };

    const carrito = new Carrito();
    carrito.AgregarCarrito(informacionCurso, tablaCarrito, true);
}

function IniciarCarrito() {
    const cursosLS = LocalStorageManipular.ObtenerCursoLocalStorage();
    for (let i = 0; i < cursosLS.length; i++) {
        const carrito = new Carrito();
        carrito.AgregarCarrito(cursosLS[i], tablaCarrito, false);
    }
}

function EliminarCarrito(event) {
    if (event.target.className !== 'borrar-curso') return;

    Carrito.EliminarCursoCarrito(event.target.parentElement.parentElement);

}

function VaciarCarrito() {
    Carrito.VaciarCarrito(tablaCarrito);
}