function cargarTexto() {
    fetch('texto.txt')
        .then(response => response.text())
        .then(texto => {
            procesarTexto(texto);
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
            document.getElementById('contenido').innerHTML = 'Error al cargar el texto. Asegúrate de que el archivo texto.txt exista en el mismo directorio que este HTML.';
        });
}

function procesarTexto(texto) {
    let nuevoTexto = texto.replace(/hidalgo/g, '<span class="highlight">hidalgo</span>');
    nuevoTexto = nuevoTexto.replace(/libro/g, '<span class="clickable" onclick="cambiarPorEmoji(this)">libro</span>');
    document.getElementById('contenido').innerHTML = nuevoTexto;
    
    const conteo = (texto.match(/hidalgo/g) || []).length;
    document.getElementById('conteo').textContent = conteo;
}

function cambiarPorEmoji(elemento) {
    elemento.innerHTML = '📚';
    elemento.onclick = null;
    elemento.classList.remove('clickable');
}

window.onload = cargarTexto;