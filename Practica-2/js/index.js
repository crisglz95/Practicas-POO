"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangulo_class_1 = require("./Triangulo.class");
EventListener();
function EventListener() {
    var _a;
    (_a = document.getElementById('btnCalcular')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', CalcularArea);
}
function CalcularArea() {
    const altura = Number(document.getElementById('altura').value);
    const base = Number(document.getElementById('base').value);
    const triangulo = new Triangulo_class_1.Triangulo(altura, base);
    console.log(triangulo.area);
}
