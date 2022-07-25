class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    getFullName(){
        return this.nombre+" "+this.apellido;
    }
    addMascota(mascotaNueva){
        this.mascotas.push(mascotaNueva);
        return this.mascotas;

    }
    countMascota(){
        return this.mascotas.length;
    }
    addBook(nuevoLibro){
        this.libros.push(nuevoLibro);
        return this.libros;
    }
    getBookNames(){
        let nombresLibros= new Array();
        let cantLibros = this.libros.length;
        for ( let count = 0; count < cantLibros; count++ ){
            nombresLibros.push(this.libros[count].nombre)
        }
        return nombresLibros;
    }
}

const usuario1 = new Usuario( "Agustín", "Perez", [ {nombre:"El Principito", autor: "Antoine de Saint-Exupéry" }, { nombre: "El extranjero", autor: "Albert Camus"}], ["perro", "gato"]);
console.log(usuario1.getFullName());
void(usuario1.addMascota("Hamster"));
console.log(usuario1.countMascota());
void(usuario1.addBook({nombre: "Don Quijote de La Mancha", autor:"Miguel de Cervates"}));
console.log(usuario1.getBookNames());

const usuario2 = new Usuario( "Ariel", "Lopez", [ {nombre:"1984", autor: "George Orwell" }, { nombre: "Un mundo feliz", autor: "Aldoux Huxley"}, { nombre: "El retrato de Dorian Gray", autor: "Oscar Wilde"}], ["Vaca", "Gallo", "Ganso"]);
console.log(usuario2.getFullName());
void(usuario2.addMascota("Pato"));
console.log(usuario2.countMascota());
void(usuario2.addBook({nombre: "Cien años de soledad", autor:"Gabriel García Márquez"}));
console.log(usuario2.getBookNames());