var canvas;
var ctx;
var fps = 60;
var canvasX = 400; // PIXELS ANCHO
var canvasY = 400; //PIXELS ALTO
var tileX, tileY;

// VARIABLES RELACIONADAS CON EL TABLERO DE JUEGO
var tablero;
var filas = 200;
var columnas = 200;

var blanco = '#0000a0';
var negro = '#c8c9b8';


// OBJETO AGENTE 
var Agente = function(x,y, estado){

    this.x = x;
    this.y = y;
    this.estado = estado;           // VIVO = 1, MUERTO = 2
    this.estadoProx = this.estado;  // ESTADO QUE TENDRA EN EL SIGUIENTE CICLO

    this.vecinos = [];  // GUARDAMOS EL LISTADO DE SUS VECINOS

    // METODO QUE AÑADE LOS VECINOS DEL OBJETO ACTUAL
    this.addVecinos = function(){

        var xVecino;
        var yVecino;

        for(i=-1; i<2; i++){
            for(j=-1; j<2; j++){

                xVecino = (this.x + j + columnas) % columnas;
                yVecino = (this.y + i + filas) % filas;

                // DESCARTAMOS EL AGENTE ACTUAL (YO NO PUEDO SER MI PROPIO VECINO)
                if(i!=0 || j!=0){
                    this.vecinos.push(tablero[yVecino][xVecino]);
                }

            }
        }
    }

    this.dibuja = function(){

        var color;

        if(this.estado == 1){
            color = blanco;
        }
        else{
            color = negro;
        }

        ctx.fillStyle = color;
        ctx.fillRect(this.x*tileX, this.y*tileY, tileX, tileY);
    }

    // PROGRAMAMOS LAS LEYES DEL JUEGO DE LA VIDA

    this.nuevoCiclo = function(){
        var suma = 0;

        // CALCULAMOS LA CANTIDAD DE VECINOS VIVOS
        for(i=0; i<this.vecinos.length; i++){
            suma += this.vecinos[i].estado;
        }

        // APLICAMOS LAS LEYES
        this.estadoProx = this.estado;  // POR DEFECTO LO DEJAMOS IGUAL

        // MUERTE: TIENE MENOS DE 2 O MAS DE 3
        if(suma<2 || suma>3){
            this.estadoProx = 0;
        }

        // VIDA: REPRODUCCION TIENE EXACTAMENTE 3 VECINOS
        if(suma==3){
            this.estadoProx = 1;
        }
    }

    this.mutacion = function(){
        this.estado = this.estadoProx;
    }

}


function crearArray2D(rows,cols){
    var obj = new Array(rows);
    for(i=0; i<rows; i++){
        obj[i] = new Array(cols);
    }
    return obj;
}

function inicializaTablero(obj){

    var estado;
    for(i=0; i<filas; i++){
        for(j=0; j<columnas; j++){

            estado = Math.floor(Math.random()*2);
            
            obj[i][j] = new Agente (j,i,estado);
        }
    }

    // ACA SE TILDA SOBRECARGA LA MEMORIA

    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].addVecinos();
        
        }
    }
}





function inicializa(){

    // ASOCIAMOS EL CANVAS
    canvas = document.getElementById('pantalla');
    ctx = canvas.getContext('2d');

    // AJUSTAMOS EL TAMAÑO DEL CANVAS
    canvas.width = canvasX;
    canvas.height = canvasY;

    // CREAMOS EL TABLERO
    tablero = crearArray2D(filas, columnas);
    // LO INICIALIZO
    inicializaTablero(tablero);

    // CALUCLAMOS TAMAÑO TILES
    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);

    // EJECUTAMOS EL BUCLE PRINCIPAL
    setInterval(function(){principal();}, 1000/fps);
    
}


function dibujeTablero(obj){

    //DIBUJA LOS AGENTES
    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].dibuja();
        }
    }


    // CALCULA EL SIGUIENTE CICLO
    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].nuevoCiclo();
        }
    }


    // APLICA LA MUTACION
    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].mutacion();
        }
    }


}


function borraCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}


function principal(){
    borraCanvas();
    dibujeTablero(tablero);
}












