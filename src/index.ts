import './style.css'
import { ListaHeroes } from "../src/Controlador/Tlista"
import { Listar, Insertar, Editar, Eliminar } from "../src/Controlador/Tlista"

Listar();
//Declaracion de variables
const tabla = document.getElementById("tabla-H") as HTMLTableElement;
const modal = document.getElementById("container-form") as HTMLElement;
const modalTitle = document.getElementById("modal-title") as HTMLHeadingElement;
let button = document.getElementById("btn") as HTMLButtonElement;
let buttonAdd = document.getElementById("btn-add") as HTMLButtonElement;
const closeModalBtn = document.getElementById("close-modal") as HTMLSpanElement;
let primerValor = 0;
let opcion = '';

button.addEventListener("click", save)
buttonAdd.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)

//Funcion abrir modal
function openModal() {
    modal.classList.add('active');
    console.log("Abrir modal");
    modalTitle.textContent = "Agregar Héroe";
    opcion = "";
    modal.onclick = (event: Event) => {
        const target = event.target as HTMLDivElement;
        if (target.className.indexOf("container-form") !== -1) {
            modal.classList.remove("active");
            primerValor = 0;
            limpiar();
            opcion = "";
        }
    };
}

function closeModal() {
    modal.classList.remove('active');
    console.log("Modal cerrado");
    limpiar();
}

//funcion limpiar campos
function limpiar() {
    (<HTMLInputElement>document.getElementById("codigo")).value = '';
    (<HTMLInputElement>document.getElementById("nombre")).value = '';
    (<HTMLInputElement>document.getElementById("edad")).value = '';
    (<HTMLInputElement>document.getElementById("ciudad")).value = '';
    (<HTMLInputElement>document.getElementById("imagen")).value = '';
}

//Se llama a la funcion Insertar, Editar
function save(e: Event): void {
    e.preventDefault();
    if (opcion == "editar") {
        Editar(primerValor);
        primerValor = 0;
        limpiar();
        opcion = "";
    } else {
        Insertar();
        primerValor = 0;
        limpiar();
    }
    modal.classList.remove("active");
}

//Se obtiene el codigo
tabla.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement;
    const parent = (event.target as HTMLElement)?.parentNode?.parentNode as HTMLElement;
    if (target.classList.contains("editar")) {
        openModal();
        const fila = parent;
        console.log(fila.children[0]);
        primerValor = Number(fila.children[0].innerHTML);
        opcion = "editar";
        modalTitle.textContent = "Modificar Héroe";
        (<HTMLInputElement>document.getElementById("codigo")).value = (fila.children[0].innerHTML);
        (<HTMLInputElement>document.getElementById("nombre")).value = (fila.children[1].innerHTML);
        (<HTMLInputElement>document.getElementById("edad")).value = (fila.children[2].innerHTML);
        (<HTMLInputElement>document.getElementById("ciudad")).value = (fila.children[3].innerHTML);
        (<HTMLInputElement>document.getElementById("imagen")).value = ListaHeroes.find(hero => hero.Codigo === primerValor)?.Imagen || "";

        console.log("Editando");

    }

});

//Funcion Eliminar
tabla.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement;
    const parent = (event.target as HTMLElement)?.parentNode?.parentNode as HTMLElement;
    if (target.classList.contains("eliminar")) {
        const fila = parent;
        primerValor = Number(fila.children[0].innerHTML);
        Eliminar(primerValor);
        console.log("Eliminado");
        primerValor = 0;
    }
});
