EventListener();
let foco = new Foco();

function EventListener() {
    document.getElementById('imagen').addEventListener('click', InitApp);
}

function InitApp() {
    document.getElementById('imagen').src = foco.CambiarEstado();
}