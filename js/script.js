/*SALUDO DINÁMICO*/
const mensajeDiv = document.getElementById("mensaje-saludo");

if (mensajeDiv) {
    const hora = new Date().getHours();
    let saludo;

    if (hora < 12) saludo = "¡Buenos días!";
    else if (hora < 18) saludo = "¡Buenas tardes!";
    else saludo = "¡Buenas noches!";

    mensajeDiv.textContent = saludo;
}

/* MENÚ HAMBURGUESA */
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

if (btnMenu && menu) {
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

/*SUBMENÚ REGIONES*/
const submenu = document.querySelector(".submenu");
const submenuBtn = document.querySelector(".submenu-btn");

if (submenu && submenuBtn) {
    submenuBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Alterna estado visual
        submenu.classList.toggle("open");

        // Accesibilidad ARIA
        const expanded = submenuBtn.getAttribute("aria-expanded") === "true";
        submenuBtn.setAttribute("aria-expanded", !expanded);
    });
}
// ==========================
// SALUDO SEGÚN HORA (+ idioma)
// ==========================

function obtenerSaludo(idioma = "es") {
    const hora = new Date().getHours();

    let saludoEs = "";
    let saludoEn = "";

    if (hora < 12) {
        saludoEs = "¡Buenos días!";
        saludoEn = "Good morning!";
    } else if (hora < 18) {
        saludoEs = "¡Buenas tardes!";
        saludoEn = "Good afternoon!";
    } else {
        saludoEs = "¡Buenas noches!";
        saludoEn = "Good evening!";
    }

    return idioma === "es" ? saludoEs : saludoEn;
}

const mensaje = document.getElementById("mensaje-saludo");

// idioma actual
let idiomaActual = "es";

// Mostrar saludo inicial
mensaje.textContent = obtenerSaludo(idiomaActual);

// Eventos para cambiar idioma
document.getElementById("btnEs").addEventListener("click", () => {
    idiomaActual = "es";
    mensaje.textContent = obtenerSaludo("es");
});

document.getElementById("btnEn").addEventListener("click", () => {
    idiomaActual = "en";
    mensaje.textContent = obtenerSaludo("en");
});

