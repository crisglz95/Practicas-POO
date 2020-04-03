class ManipularLocalStorage {
    static ArrayActividades = [];
    static ArrayTerminadas = [];

    static AgregarActividadLocalStorage(contenidoActividad) {
        this.ArrayActividades = this.ObtenerLocalStorage('actividades');
        this.ArrayActividades.push(contenidoActividad);
        localStorage.setItem('actividades', JSON.stringify(this.ArrayActividades));
    }

    static ObtenerLocalStorage(keyLS) {
        let actividadesObtenidasLS = [];
        if (localStorage.getItem(keyLS) === null) {
            return actividadesObtenidasLS;
        }

        return JSON.parse(localStorage.getItem(keyLS));
    }

    static TerminarActividadesLS(contenido) {
        let actividadLS = this.ObtenerLocalStorage('actividades');
        let terminadasLS = this.ObtenerLocalStorage('terminadas');
        let arrayNuevoActividadLS = [];

        for (let i = 0; i < actividadLS.length; i++) {
            if (contenido !== actividadLS[i]) {
                arrayNuevoActividadLS.push(actividadLS[i]);
            } else {
                terminadasLS.push(actividadLS[i]);
            }
        }

        localStorage.setItem('actividades', JSON.stringify(arrayNuevoActividadLS));
        localStorage.setItem('terminadas', JSON.stringify(terminadasLS));
    }

    static LimpiarTerminados(lista) {
        if (localStorage.getItem('terminadas') === null) return;
        localStorage.removeItem('terminadas');
        const ul = document.getElementById(lista);
        while (ul.firstChild) {
            ul.firstChild.remove();
        }
    }

}