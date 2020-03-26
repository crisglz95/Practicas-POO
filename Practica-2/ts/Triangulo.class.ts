export class Triangulo{
    public base:number = 0;
    public altura:number = 0;
    public area:number = 0;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;

        this.area = (this.base * this.altura) / 2;
    }
}