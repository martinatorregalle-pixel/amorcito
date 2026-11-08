
const botonFlores = document.getElementById("boton-flores");
const fondo = document.getElementById("stickers-fondo");

botonFlores.addEventListener("click", function() {

    // Evita agregar stickers repetidos al apretar varias veces
    if (fondo.children.length > 0) return;

    // Crea 12 stickers
    for (let i = 0; i < 12; i++) {

        const flor = document.createElement("img");

        // Imagen que utilizaremos
        flor.src = "octubre.png";

        // Clase CSS
        flor.classList.add("sticker-fondo");

        // Posición aleatoria
        flor.style.left = Math.random() * 90 + "%";
        flor.style.top = Math.random() * 90 + "%";

        // Rotación aleatoria
        const rotacion = Math.random() * 50 - 25;
        flor.style.transform = `rotate(${rotacion}deg)`;

        // Agrega la flor al fondo
        fondo.appendChild(flor);
    }
});
