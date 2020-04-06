class LocalStorageManipular {
    static AgregarLocalStorage(informacionCursos) {
        let cursosLS = this.ObtenerCursoLocalStorage();
        cursosLS.push(informacionCursos);
        localStorage.setItem('Cursos', JSON.stringify(cursosLS));
    }

    static ObtenerCursoLocalStorage() {
        if (localStorage.getItem('Cursos') == null) return [];
        return JSON.parse(localStorage.getItem('Cursos'));
    }
}