//le digo que tome el valor de color y luego le digo que voy a trabajar con un evento. 
document.getElementById('color').addEventListener('input', getColor)

//guarda en una variable el valor de color. En hexadecimal
function getColor(){
    let col = document.getElementById('color').value

    //tomamos el valor de col y se lo damos al background del id visualizar
    //investigar que hace innerHTML - devuelve el valor hexadecimal al tablero
    document.getElementById('visualizar').style.background=col
    document.getElementById('visualizar').innerHTML=col
}