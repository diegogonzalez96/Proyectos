
// VARIABLES GLOBALES
const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.getElementById("listaActividades");
let arrayActividades = [];


//FUNCIONES

const crearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);
    return item;
}

const guardarDB = () => {
    //convierto a JSON porque solo lee string
    localStorage.setItem("rutina", JSON.stringify(arrayActividades));

    pintarDB();
}

const pintarDB = () => {
    console.log(listaActividadesUI);
    listaActividadesUI.innerHTML = "";
    //convierto a vector
    arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    if(arrayActividades === null){
        arrayActividades = [];
    }
    else{
        //modifico el codigo html por el problema de string literales
        arrayActividades.forEach(element => {

            if(element.estado){
                listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            }
            else{
                listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            }
    });
    }
    console.log(arrayActividades);
}

//elimino elemento del array de actividades
const eliminarDB = (actividad) => {
    let indexArray;
    arrayActividades.forEach((elemento, index)=> {
        if(elemento.actividad === actividad){
            indexArray = index;
        }   
    });
    arrayActividades.splice(indexArray, 1);
    guardarDB();
}

//forma facil de guardar el indice del array
const editarDB = (actividad)=> {
    let indexArray = arrayActividades.findIndex((elemento)=> {return elemento.actividad === actividad});
    arrayActividades[indexArray].estado = true;
    guardarDB();
}
//EVENTLISTENER

formularioUI.addEventListener("submit", (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector("#actividad").value;
    crearItem(actividadUI);
    guardarDB();
    formularioUI.reset();
});

document.addEventListener("DOMContentLoaded", pintarDB);

listaActividadesUI.addEventListener("click", (e) => {
    e.preventDefault();

    //contenedor de las tareas, delete, done y evento
    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === "delete"){
            //Accion de eliminar
            eliminarDB(texto);
        }
        if(e.target.innerHTML === "done"){
            //Accion de editar
            editarDB(texto);            
        }
    }
});