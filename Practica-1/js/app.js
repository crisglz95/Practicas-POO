//Propiedad: Valor,

//Un objeto es una solicitud de una clase
//La clase es una plantilla para un objeto
class Carro {
    Color = '';
    Marca = '';
    Modelo = 0;
    Motor = 0;
    PosX = 0;
    PosY = 0;

    constructor(Color, Marca, Modelo, Motor) {
        this.Color = Color;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Motor = Motor;
    }

    AvanzarX() {}

    AvanzarY() {}

}

let Carro1 = new Carro('Rojo', 'Honda', 2015, 1.8);

console.log(Carro1);

// let Carro1 = {
//     Color: 'Rojo',
//     Marca: 'Honda',
//     Modelo: 2000,
//     Motor: 2.0,
//     PosX: 0,
//     PosY: 0,
//     AvanzarX() {
//         console.log(this);
//     }
// };

// Carro1.AvanzarX();