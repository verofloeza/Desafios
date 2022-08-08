const path = require("./archivos/database.json");
const fs = require("fs/promises");

class Contenedor{
    constructor(){}

    async getById(id){
        const objs = await getAll();
        return objs.find( product => product.id === id );
    };
    async getAll(){
        try {
            const objs = await fs.readFile(path, "utf-8");
            return JSON.parse(objs)
        } catch (error) {
            return error
        }
    };
};


module.exports = Contenedor;
