console.log("hola");
let productos = [
  {
    marca: "nike",
    color: "blanco",
    talle: 42,
    precio: 100,
  },
  {
    marca: "adidas",
    color: "negro",
    talle: 38,
    precio: 60,
  },
  {
    marca: "vans",
    color: "negro",
    talle: 40,
    precio: 45,
  },
  {
    marca: "fila",
    color: "negro",
    talle: 42,
    precio: 60,
  },
  {
    marca: "puma",
    color: "blanco",
    talle: 41,
    precio: 55,
  },
];

let lista = document.getElementById("lista");
for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  let item = document.createElement("li");
  let parrafo = document.createElement("p");
  let boton = document.createElement("button");
  parrafo.textContent = element.marca;
  boton.textContent = "Agregar";
  item.appendChild(parrafo);
  item.appendChild(boton);
  lista.appendChild(item);
}


button.setAttribute("id", "idPrueba");
let boton = document.getElementById()
