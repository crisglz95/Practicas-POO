class Cuerpo {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    VerificarParte(alerta) {
        if (this.posicionX >= 343 && this.posicionX <= 380 && this.posicionY >= 144 && this.posicionY <= 186) {
            alerta.innerText = 'Cabeza';
        } else if (this.posicionX >= 297 && this.posicionX <= 323 && this.posicionY >= 322 && this.posicionY <= 352) {
            alerta.innerText = 'Mano Izquierda';
        } else if (this.posicionX >= 340 && this.posicionX <= 387 && this.posicionY >= 229 && this.posicionY <= 257) {
            alerta.innerText = 'Pecho';
        } else if (this.posicionX >= 351 && this.posicionX <= 370 && this.posicionY >= 330 && this.posicionY <= 350) {
            alerta.innerText = 'Aparato Reproductor';
        } else if (this.posicionX >= 368 && this.posicionX <= 396 && this.posicionY >= 468 && this.posicionY <= 502) {
            alerta.innerText = 'Pie Derecho';
        } else if (this.posicionX >= 327 && this.posicionX <= 359 && this.posicionY >= 467 && this.posicionY <= 501) {
            alerta.innerText = 'Pie Izquierdo';
        } else if (this.posicionX >= 404 && this.posicionX <= 432 && this.posicionY >= 321 && this.posicionY <= 354) {
            alerta.innerText = 'Mano Derecha';
        } else {
            alerta.innerText = 'No seleccionado';
        }

        //alerta.innerText = `${this.posicionX}, ${this.posicionY}`;
    }
}