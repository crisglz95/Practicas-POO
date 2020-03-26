import { Triangulo } from './Triangulo.class';

EventListener();

function EventListener(){
    document.getElementById('btnCalcular')?.addEventListener('click', CalcularArea);
}

function CalcularArea(){
    const altura = Number((<HTMLInputElement>document.getElementById('altura')).value);
    const base = Number((<HTMLInputElement>document.getElementById('base')).value);

    const triangulo = new Triangulo(altura, base);

    console.log(triangulo.area);
    
}

