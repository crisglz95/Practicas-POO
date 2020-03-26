class Foco {
    estado = false;

    CambiarEstado() {
        this.estado = !this.estado;

        if (this.estado) {
            return './../assets/encendido.jpeg';
        } else {
            return './../assets/apagado.jpeg';
        }
    }
}