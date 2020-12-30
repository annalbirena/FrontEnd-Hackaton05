//Atrapar elementos
const addButton = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const item = document.querySelectorAll("li");

function crearElemento() {
    //Crear elementos
    const li = document.createElement("li"); // crear elemento li
    const check = document.createElement("button");
    const deleteB = document.createElement("button");//Crear elemento button

    //Agregar texto, clases, atributo, imagenes
    li.textContent = input.value;//agrego texto a elemento li
    li.classList.add("li"); //agregar clase css creada
    input.value = ""; //borrar texto de input
    check.setAttribute('class','checkbutton');
    deleteB.setAttribute('class','deletebutton');
    check.innerHTML = `<i class="fas fa-check"></i>`;
    deleteB.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    //Funcion DELETE
    function borrarElemento(){
        li.remove(); //eliminar elemento
    }

    function taskDone(){
        li.classList.toggle('desactivo');
        check.classList.toggle('desactivo_button');
    }
    //Registrar evento
    deleteB.addEventListener("click", borrarElemento); 
    check.addEventListener("click",taskDone);
    
    ul.appendChild(li); //agregar elemento li a ul
    li.appendChild(check);
    li.appendChild(deleteB);//agregar button a elemento li
}

function inputLength(){
    return input.value.length;
} 

function addListAfterClick(){
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
    input.parentNode.classList.remove("addtask");    
    crearElemento();
    }else{
        input.parentNode.classList.add("addtask");
    }
}

//Registrar evento
addButton.addEventListener("click", addListAfterClick);
