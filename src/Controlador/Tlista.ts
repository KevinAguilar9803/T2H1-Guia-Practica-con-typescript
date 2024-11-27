import { Heroes } from "../Entidades/Heroe";
export let ListaHeroes: Heroes[] = JSON.parse(localStorage.getItem('heroes') || '[]');

// Héroes por defecto
const heroesPorDefecto: Heroes[] = [
    new Heroes(1, "Batman", 40, "Gotica", "https://bandai.com.mx/blog/wp-content/uploads/2019/09/Historia-de-Batman-el-superhe%CC%81roe-ma%CC%81s-popular-en-la-era-digital-copia-1.jpg"),
    new Heroes(2, "Spiderman", 20, "New York", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0CXQW3CNDOftOamFF5UPRE-h4kjpz38e-g&s"),
    new Heroes(3, "Superman", 35, "Metropolis", "https://media.gq.com.mx/photos/6046677d32fb42c17c0c6fe7/4:3/w_2664,h_1998,c_limit/SUPERMAN.jpg")
];

// Si no hay héroes en el localStorage, se agregarán los héroes por defecto
if (ListaHeroes.length === 0) {
    ListaHeroes = heroesPorDefecto;
    localStorage.setItem('heroes', JSON.stringify(ListaHeroes));
}

export function Insertar(codigo: number, nombre: string, edad: number, ciudad: string, imagen: string) {
    const nuevoHeroe = new Heroes(codigo, nombre, edad, ciudad, imagen);
    ListaHeroes.push(nuevoHeroe);
    localStorage.setItem('heroes', JSON.stringify(ListaHeroes));
}

export function Editar(codigo: number, nombre: string, edad: number, ciudad: string, imagen: string, codigoOriginal: number) {
    const index = ListaHeroes.findIndex(hero => hero.Codigo === codigoOriginal);
    if (index !== -1) {
        ListaHeroes[index] = new Heroes(codigo, nombre, edad, ciudad, imagen);
        localStorage.setItem('heroes', JSON.stringify(ListaHeroes));
    }
}

export function Eliminar(codigo: number) {
    const index = ListaHeroes.findIndex(hero => hero.Codigo === codigo);
    if (index !== -1) {
        ListaHeroes.splice(index, 1);
        localStorage.setItem('heroes', JSON.stringify(ListaHeroes));
    }
}

export function Listar() {
    const lista = document.getElementById("lista-h") as HTMLElement;
    lista.innerHTML = "";
    ListaHeroes.forEach(hero => {
        const row = `<tr>
            <td>${hero.Codigo}</td>
            <td>${hero.Nombre}</td>
            <td>${hero.Edad}</td>
            <td>${hero.Ciudad}</td>
            <td><img src="${hero.Imagen}" alt="${hero.Nombre}" class="hero-image"></td>
            <td><button class="editar btn-edit">Editar</button>
                <button class="eliminar btn-delete">Eliminar</button></td>
        </tr>`;
        lista.innerHTML += row;
    });
}

