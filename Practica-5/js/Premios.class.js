class Premios {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    //Metodo static no se necesita instanciar para poder utilizar este metodo.
    static EliminarPremio(contenedor, id) {
        contenedor.removeChild(document.getElementById(`${id}`));
    }

    CrearImagen(contenedor, sizeMarginLeft, sizeMarginBottom) {
        let image = document.createElement('img');
        image.src = './../assets/popo.png';
        image.style.width = '50px';
        let numeroRandom = Math.random().toString().split('.')[1];
        image.id = `imagen${numeroRandom}`;

        const styleLeft = (this.posicionX - sizeMarginLeft);
        const styleTop = this.posicionY;

        image.style.left = `${styleLeft - 25}px`;
        image.style.top = `${styleTop - 25}px`;
        contenedor.appendChild(image);

        return {
            id: image.id,
            styleLeft: styleLeft - 90,
            styleTop: styleTop - 90,
            styleLeftMax: styleLeft + 25,
            styleTopMax: styleTop + 25
        };
    }
}