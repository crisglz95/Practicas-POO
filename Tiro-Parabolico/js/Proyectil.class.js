class Proyectil {
    velocidadInicial = 0;
    angulo = 0;

    //Se ejecuta cuando se instancia la clase
    constructor(velocidadInicial, angulo) {
        this.velocidadInicial = velocidadInicial;
        this.angulo = angulo;
    }

    CalcularDistanciaX(t) {
        const distanciaX = this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180)) * t;
        return distanciaX;
    }

    CalcularDistanciaY(t) {
        let distanciaY = this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));
        distanciaY = distanciaY * t - .5 * 9.8 * Math.pow(t, 2);
        return distanciaY;
    }

    CrearSpan() {
        for (let tiempo = 0; tiempo <= 7; tiempo += 0.01) {
            const span = document.createElement('span');

            const left = this.CalcularDistanciaX(tiempo);
            const bottom = this.CalcularDistanciaY(tiempo);

            if (left < 0 || bottom < 0 || left > 99 || bottom > 99) break;
            span.style.left = `${left}%`;
            span.style.bottom = `${bottom}%`;


            document.getElementById('contenedor').appendChild(span);
        }
    }
}