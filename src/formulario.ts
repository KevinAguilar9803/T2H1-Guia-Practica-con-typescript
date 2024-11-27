import './formulario.css';
import { ListaHeroes, Insertar, Editar } from "./Controlador/Tlista";
const form = document.getElementById("hero-form") as HTMLFormElement;
const codigoInput = document.getElementById("codigo") as HTMLInputElement;
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const edadInput = document.getElementById("edad") as HTMLInputElement;
const ciudadInput = document.getElementById("ciudad") as HTMLInputElement;
const imagenInput = document.getElementById("imagen") as HTMLInputElement;
const btnCancel = document.getElementById("btn-cancel") as HTMLButtonElement;
let modoEdicion = false;
let heroEditadoCodigo: number | null = null;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const codigo = Number(codigoInput.value);
    const nombre = nombreInput.value;
    const edad = Number(edadInput.value);
    const ciudad = ciudadInput.value;
    const imagen = imagenInput.value;

    if (modoEdicion) {
        if (heroEditadoCodigo !== null) {
            Editar(codigo, nombre, edad, ciudad, imagen, heroEditadoCodigo);
        }
    } else {
        Insertar(codigo, nombre, edad, ciudad, imagen);
    }

    limpiarFormulario();
    window.location.href = 'index.html';
});

btnCancel.addEventListener("click", () => {
    limpiarFormulario();
    window.location.href = 'index.html';
});

function limpiarFormulario() {
    codigoInput.value = '';
    nombreInput.value = '';
    edadInput.value = '';
    ciudadInput.value = '';
    imagenInput.value = '';
    modoEdicion = false;
}

function cargarDatosEdicion(codigo: number) {
    const hero = ListaHeroes.find((h) => h.Codigo === codigo);
    if (hero) {
        codigoInput.value = String(hero.Codigo);
        nombreInput.value = hero.Nombre;
        edadInput.value = String(hero.Edad);
        ciudadInput.value = hero.Ciudad;
        imagenInput.value = hero.Imagen;
        modoEdicion = true;
        heroEditadoCodigo = hero.Codigo;
    }
}

const urlParams = new URLSearchParams(window.location.search);
const codigoHeroe = urlParams.get('codigo');
if (codigoHeroe) {
    cargarDatosEdicion(Number(codigoHeroe));
}



  
