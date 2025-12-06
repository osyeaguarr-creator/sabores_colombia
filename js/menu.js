/*MENÚ HAMBURGUESA - ABRIR / CERRAR*/

const btnMenu = document.getElementById("btnMenu");
const menuLateral = document.getElementById("menuLateral");

btnMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("abierto");
});
