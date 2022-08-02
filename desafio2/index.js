const fs = require("fs/promises");
const path= "./archivos/database.json";

async function save(obj){
    const objs = await getAll()

    let nuevoId;
    if(objs.length == 0){
        nuevoId=1;
    }else{
        nuevoId = objs[objs.length -1].id +1;
    }

    const newObj = { id: nuevoId, ...obj  }
    objs.push(newObj)

    try {
        await fs.writeFile(path, JSON.stringify(objs, null, 2))
        return newObj;
    } catch (error) {
        throw new Error(error)
    }


}

async function getById(id){
    const objs = await getAll();
    console.log(objs.find( product => product.id === id ));
}

async function getAll(){
    try {
        const objs = await fs.readFile(path, "utf-8");
        return JSON.parse(objs)
    } catch (error) {
        return error
    }
}

async function deleteById(idPro){
    const objs = await getAll();
    
    let array = objs.filter( product => product.id !== idPro );

    try {
        await fs.writeFile(path, JSON.stringify(array, null, 2))

    } catch (error) {
        return error
    }
}

async function deleteAll(){
    try {
        void(await fs.writeFile(path, JSON.stringify([], null, 2)))
    } catch (error) {
        return error
    }
}

async function Contenedor(){
    console.log(await getAll());
    await save(
        {
            "title": "Producto 3",
            "precio": 500,
            "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
        }
    );
    await getById(1);
    await deleteById(1);
    await deleteAll();
}
Contenedor();