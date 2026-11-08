
const botonFlores = document.getElementById("boton-flores");
const fondo = document.getElementById("stickers-fondo");

botonFlores.addEventListener("click", function() {

    if (fondo.children.length > 0) return;

    const posiciones = [];

    for (let i = 0; i < 30; i++) {

        let x, y;
        let intentos = 0;
        let posicionValida = false;

        // Busca una posición con suficiente espacio
        while (!posicionValida && intentos < 100) {

            x = Math.random() * 95;
            y = Math.random() * 95;

            posicionValida = posiciones.every(posicion => {
                const distancia = Math.sqrt(
                    Math.pow(x - posicion.x, 2) +
                    Math.pow(y - posicion.y, 2)
                );

                return distancia > 22;
            });

            intentos++;
        }

        if (!posicionValida) continue;

        posiciones.push({ x, y });

        const flor = document.createElement("img");

        flor.src = "octubre.png";
        flor.classList.add("sticker-fondo");

        flor.style.left = x + "%";
        flor.style.top = y + "%";

        const rotacion = Math.random() * 50 - 25;
        flor.style.transform = `rotate(${rotacion}deg)`;

        fondo.appendChild(flor);
    }
});
