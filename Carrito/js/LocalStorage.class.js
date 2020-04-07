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

    static EliminarCursoLocalStorage(idCurso) {
        let cursosLS = this.ObtenerCursoLocalStorage();
        let nuevosCursos = [];

        for (let i = 0; i < cursosLS.length; i++) {
            if (cursosLS[i].id !== idCurso) {
                nuevosCursos.push(cursosLS[i]);
            }
        }

        localStorage.setItem('Cursos', JSON.stringify(nuevosCursos));
    }

    static VaciarCarritoLocalStorage() {
        localStorage.clear();
    }

    static VerificarCursoRepetido(idCurso) {
        const cursosLS = this.ObtenerCursoLocalStorage();
        for (let i = 0; i < cursosLS.length; i++) {
            if (idCurso == cursosLS[i].id) {
                return true;
            }
        }
        return false;
    }
}