class Carrito {


    AgregarCarrito(informacionCurso, tablaCarrito, origen) {
        if (LocalStorageManipular.VerificarCursoRepetido(informacionCurso.id) && origen) return;
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>
                <img src="${informacionCurso.imagen}" width="100%"/>
            </td>
            <td>
                ${informacionCurso.titulo}
            </td>
            <td>
                ${informacionCurso.precio}
            </td>
            <td>
                <a class="borrar-curso" data-id="${informacionCurso.id}">X</a>
            </td>
        `;

        tablaCarrito.appendChild(tableRow);

        if (origen) LocalStorageManipular.AgregarLocalStorage(informacionCurso);
    }

    static EliminarCursoCarrito(nodeDom) {
        const idCurso = nodeDom.querySelector('.borrar-curso').getAttribute('data-id');
        LocalStorageManipular.EliminarCursoLocalStorage(idCurso);
        nodeDom.remove();
    }

    static VaciarCarrito(TablaCursos) {
        while (TablaCursos.firstChild) {
            TablaCursos.firstChild.remove();
        }

        LocalStorageManipular.VaciarCarritoLocalStorage();
    }
}