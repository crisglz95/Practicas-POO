class Car {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    MoverCarro(direccion, imagen) {
        switch (direccion) {
            case 'ArrowUp':
                if (this.posicionY <= 0) return;
                imagen.src = './../assets/arriba.png';
                imagen.style.top = `${this.posicionY-=10}px`;
                break;
            case 'ArrowDown':
                if (this.posicionY >= 540) return;
                imagen.src = './../assets/abajo.png';
                imagen.style.top = `${this.posicionY+=10}px`;
                break;
            case 'ArrowLeft':
                if (this.posicionX <= 0) return;
                imagen.src = './../assets/izquierda.png';
                imagen.style.left = `${this.posicionX-=10}px`;
                break;
            case 'ArrowRight':
                if (this.posicionX >= 900) return;
                imagen.src = './../assets/derecha.png';
                imagen.style.left = `${this.posicionX+=10}px`;
                break;
        }
    }

    VerificarColision(posicionesCaquitas = []) {
        for (let i = 0; i < posicionesCaquitas.length; i++) {
            if (this.posicionX >= posicionesCaquitas[i].styleLeft &&
                this.posicionX <= posicionesCaquitas[i].styleLeftMax &&
                this.posicionY >= posicionesCaquitas[i].styleTop &&
                this.posicionY <= posicionesCaquitas[i].styleTopMax) {
                return i;
            }
        }
        return null;
    }

    QuitarCaquita(id) {

    }
}