import './style.css'
import {Listar, Eliminar } from "../src/Controlador/Tlista";

Listar(); // Al cargar la página, se lista la información

// Obtener la tabla y agregar los eventos
const tabla = document.getElementById("tabla-H") as HTMLTableElement;



tabla.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;
    const parent = (event.target as HTMLElement)?.parentNode?.parentNode as HTMLElement;


    // Editar
    if (target.classList.contains("editar")) {
        const codigo = Number(parent.children[0].innerHTML);
        window.location.href = `formulario?codigo=${codigo}`;
    }

    // Eliminar
    if (target.classList.contains("eliminar")) {
        const codigo = Number(parent.children[0].innerHTML);
        Eliminar(codigo);
        Listar();
    }
});

