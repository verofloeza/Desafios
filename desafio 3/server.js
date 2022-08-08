const express = require("express");
const Contenedor = require("./contenedor.js");

const app= express();
const productos = new Contenedor();


app.get("/", (request, responde) =>{ 
    responde.send("servidor iniciado con express")
});
app.get("/productos", (request, responde) =>{ 
    responde.send(productos.getAll())
});
app.get("/productosRandom", (request, responde) =>{ 
    responde.send(productos.getById(1))
});


const server = app.listen(8080, ()=> {
    console.log("servidor escuchando http://localhost:8080/")
});