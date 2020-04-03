class Actividades {
    actividad = '';

    constructor(actividad) {
        this.actividad = actividad;
    }

    AgregarActividadDom(contenedor, origen) {
        const li = document.createElement('li');
        li.classList = 'list-group-item text-break';
        li.textContent = this.actividad;

        const btnFinalizado = document.createElement('button');
        btnFinalizado.classList = 'close';

        const span = document.createElement('span');
        span.classList = 'badge badge-pill text-success';

        span.textContent = 'X';

        contenedor.appendChild(li);
        li.appendChild(btnFinalizado);
        btnFinalizado.appendChild(span);

        if (origen) ManipularLocalStorage.AgregarActividadLocalStorage(this.actividad);

    }

    static EliminarActividadDom(event) {
        if (event.target.tagName !== 'SPAN') return;
        const liBorrado = event.target.parentElement.parentElement;
        let textoLiBorrado = liBorrado.textContent.substring(0, liBorrado.textContent.length - 1);
        ManipularLocalStorage.TerminarActividadesLS(textoLiBorrado);
        liBorrado.remove();
    }
}