import './sass/styles.scss';

const nav = document.querySelector("#nav_bar");
const abrir = document.querySelector("#menu_button");
const cerrar = document.querySelector("#close_button");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})
