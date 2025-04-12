function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const tiempo = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById('reloj').textContent = tiempo;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();


const boton1=document.getElementById('boton1')
const boton2=document.getElementById('boton2')
const boton3=document.getElementById('boton3')

function cambiarColor(boton, color){
    boton.style.backgroundcolor=color;
}

boton1.addEventListener('click', ()=>cambiarColor(boton1, 'red'));
boton2.addEventListener('click', ()=>cambiarColor(boton2, 'green'));
boton3.addEventListener('click', ()=>cambiarColor(boton3, 'blue'));