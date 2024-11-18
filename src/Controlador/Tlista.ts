import { Heroes } from "../Entidades/Heroe";
export { ListaHeroes }
let ListaHeroes: Heroes[] = [
    {
        Codigo: 1,
        Nombre: "Batman",
        Edad: 40,
        Ciudad: "Gotica",
        Imagen: "https://bandai.com.mx/blog/wp-content/uploads/2019/09/Historia-de-Batman-el-superhe%CC%81roe-ma%CC%81s-popular-en-la-era-digital-copia-1.jpg"
    },
    {
        Codigo: 2,
        Nombre: "Spiderman",
        Edad: 20,
        Ciudad: "New York",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0CXQW3CNDOftOamFF5UPRE-h4kjpz38e-g&s"
    },
    {
        Codigo: 3,
        Nombre: "Superman",
        Edad: 35,
        Ciudad: "Metropolis",
        Imagen: "https://media.gq.com.mx/photos/6046677d32fb42c17c0c6fe7/4:3/w_2664,h_1998,c_limit/SUPERMAN.jpg"
    }
]
// Funcion insertar heroes
export function Insertar() {
    let cod = Number((<HTMLInputElement>document.getElementById("codigo")).value.toString());
    let nom = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    let eda = Number((<HTMLInputElement>document.getElementById("edad")).value.toString());
    let ciu = (<HTMLInputElement>document.getElementById("ciudad")).value.toString();
    let img = (<HTMLInputElement>document.getElementById("imagen")).value.toString();

    const op = new Heroes(cod, nom, eda, ciu, img);
    ListaHeroes.push(op);
    Listar();
}

//Funcion Editar
export function Editar(codigo: number) {
    let cod = Number((<HTMLInputElement>document.getElementById("codigo")).value.toString());
    let nom = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    let eda = Number((<HTMLInputElement>document.getElementById("edad")).value.toString());
    let ciu = (<HTMLInputElement>document.getElementById("ciudad")).value.toString();
    let img = (<HTMLInputElement>document.getElementById("imagen")).value.toString();
    let index = ListaHeroes.findIndex(heroe => heroe.Codigo === codigo);
    if (index !== -1) {
        ListaHeroes[index] = new Heroes(cod, nom, eda, ciu, img);
    }
    Listar();
}

//Funcion Eliminar
export function Eliminar(codigo: number) {
    const index = ListaHeroes.findIndex(op => op.Codigo === codigo);
    if (index >= 0) {
        ListaHeroes.splice(index, 1);
    }
    Listar();
}

// Funcion listar heroes
export function Listar() {
    let lis = "";
    let lista = <HTMLElement>document.getElementById("lista-h");
    for (let i = 0; i < ListaHeroes.length; i++) {
        lis = "<tr>" + lis + "<td>" + ListaHeroes[i].Codigo + "</td>" +
            "<td>" + ListaHeroes[i].Nombre + "</td>" +
            "<td>" + ListaHeroes[i].Edad + "</td>" +
            "<td>" + ListaHeroes[i].Ciudad + "</td>" +
            `<td><img src="${ListaHeroes[i].Imagen}" alt="${ListaHeroes[i].Nombre}" class="hero-image"></td>` +
            `<td><button class="editar btn btn-warning">Editar</button> <button class="eliminar btn btn-danger">Eliminar</button></td>` + "</tr>";
    }
    lista.innerHTML = lis;
}
