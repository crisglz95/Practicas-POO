class Carrito {


    AgregarCarrito(informacionCurso, tablaCarrito, origen) {
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
}