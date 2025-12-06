

/* MENSAJE DE SALUDO DINÁMICO
*/

function mostrarSaludo() {
    const mensaje = document.getElementById("mensaje-saludo");
    const hora = new Date().getHours();
    let textoSaludo = "";

    if (hora >= 5 && hora < 12) {
        textoSaludo = "☀ ¡Buenos días! Bienvenido a Sabores de Colombia";
    } 
    else if (hora >= 12 && hora < 18) {
        textoSaludo = "🍽 ¡Buenas tardes! Disfruta descubriendo nuevos sabores";
    } 
    else {
        textoSaludo = "🌙 ¡Buenas noches! La gastronomía también se disfruta de noche";
    }

    mensaje.textContent = textoSaludo;
}

mostrarSaludo(); // Ejecutar al cargar la página


/* ============================
   3. CAMBIO DE IDIOMA (BÁSICO)
=============================== */

// Selecciona las banderas
const banderaEs = document.querySelector("img[title='Español']");
const banderaEn = document.querySelector("img[title='Inglés']");

// Traducciones básicas (puedes ampliarlas)
const textos = {
    es: {
        saludo: "Bienvenido a Sabores de Colombia"
    },
    en: {
        saludo: "Welcome to Flavors of Colombia"
    }
};

banderaEn.addEventListener("click", () => {
    document.documentElement.lang = "en";
    document.getElementById("mensaje-saludo").textContent = "🇺🇸 " + textos.en.saludo;
});

banderaEs.addEventListener("click", () => {
    document.documentElement.lang = "es";
    mostrarSaludo(); // vuelve a saludo normal por hora
});



*/
