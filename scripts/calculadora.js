//Atrapar elementos del DOM
const visor = document.querySelector('input');
const num = document.querySelectorAll('.num');
const operador = document.querySelectorAll('.operador');
const equal = document.querySelector('.equal');
const clean = document.querySelector('.clean');
const borrarbtn = document.querySelector('.delete');
let num1;
let num2;
let ope;

//FUNCIONES
//Resetear
function clear(){
    document.querySelector('input').value = ''; 
}
function reset(){
    num1 = 0;
    num2 = 0;
    ope = ''; 
}
//
function borrar(){
    visor.value = visor.value.substr(0,visor.value.length-1);
}

//Mostrar numeros en el visor
function show() {
    visor.value = visor.value + this.value
}
//Guardar numerador 1 y operador
function savenum() {
    num1 = parseFloat(visor.value);
    ope = this.value;
    clear();
}

function operar(){
    let resultado = 0;
    switch(ope){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if(num2 == 0){
                resultado = 'No se puede dividir';
            }else{
                resultado = num1 / num2;
            }
            break;
        case "^":
            resultado = Math.pow(num1,num2);
            break;
        case "%":
            resultado = num1 % num2;
            break;
    }
    clear();
    reset();
    visor.value = resultado;
}

function resul(){
    if(visor.value.length >0 && num1>=0 && ope !==''){
        num2 = parseFloat(visor.value);
        operar(); 
    }else{
        if(visor.value.length >0){
            visor.value = visor.value;
        }else{
            visor.value = '';
        }   
    }
}

//REGISTRAR EVENTOS
num.forEach((button) => {
    button.addEventListener("click",show);
})

operador.forEach((button) => {
    button.addEventListener("click",savenum);
})
equal.addEventListener("click",resul); 
clean.addEventListener("click",clear);
borrarbtn.addEventListener("click",borrar);
