class Votaciones {
    aFavor = 0;
    enContra = 0;
    abstencion = 0;

    validarVoto(voto) {
        if (voto == 'a Favor') {
            this.aFavor++;
            console.log('a favor', this.aFavor);
        } else if (voto == 'en Contra') {
            this.enContra++;
            console.log('en contra', this.enContra);
        } else {
            this.abstencion++;
            console.log('abstencion', this.abstencion);
        }
    }

    RegresarResultados() {
        return `A Favor: ${this.aFavor}, En Contra ${this.enContra}, Abstenciones: ${this.abstencion}`;
    }
}