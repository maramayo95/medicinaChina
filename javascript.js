const formulario = document.querySelector('#formulario');
const accordion = document.querySelector('#accordionExample')

//Objeto paciente

class Paciente {
    constructor (nombre,sexo,edad,email,historia){
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
        this.email = email;
        this.historia = historia; 
    
    }
}

// Array de pacientes
const pacienteArray = [];

// Uniendo elementos de HTML con JS 
// Haciendo Llamado a los inputs
let nombre = document.querySelector("#nombre");
let sexo = document.querySelector("#sexo");
let edad = document.querySelector("#edad");
let email = document.querySelector("#email");
let historia = document.querySelector("#historial");

//Haciendo Llamado a los Botones

const guardar = document.querySelector("#botonGuardar");

// Haciendo llamado a las Alerts 
const refNombre = document.querySelector("#alertNombre");
const refSexo =  document.querySelector("#alertSexo");
const refEdad = document.querySelector("#alertEdad");
const refEmail = document.querySelector("#alertEmail");
const refHistoria = document.querySelector("#alertHistoria");

//funciones inputs

refNombre.style.display = "none";
refSexo.style.display = "none";
refEdad.style.display = "none";
refEmail.style.display = "none";
refHistoria.style.display = "none";

//Nombre
function mostrarRefNombre(){
    refNombre.style.display = "block";
}
function ocultarRefNombre(){
    refNombre.style.display = "none";
}

nombre.addEventListener("focus", mostrarRefNombre)
nombre.addEventListener("keyup", ocultarRefNombre)

//Sexo
function mostrarRefSexo(){
    refSexo.style.display = "block";
}
function ocultarRefSexo(){
    refSexo.style.display = "none";
}

sexo.addEventListener("focus", mostrarRefSexo)
sexo.addEventListener("blur", ocultarRefSexo)

//


//Edad
function mostrarRefEdad(){
    refEdad.style.display = "block";
}
function ocultarRefEdad(){
    refEdad.style.display = "none";
}

edad.addEventListener("focus", mostrarRefEdad)
edad.addEventListener("blur", ocultarRefEdad)

//Email

function mostrarRefEmail(){
    refEmail.style.display = "block";
}
function ocultarRefEmail(){
    refEmail.style.display = "none";
}

email.addEventListener("focus", mostrarRefEmail)
email.addEventListener("blur", ocultarRefEmail)


//Historia 

function mostrarRefHistoria(){
    refHistoria.style.display = "block";
}
function ocultarRefHistoria(){
    refHistoria.style.display = "none";
}

historial.addEventListener("focus", mostrarRefHistoria)
historial.addEventListener("blur", ocultarRefHistoria)

// Contenido
const eachPacient = (obj, id, idu) => {
    return (
        `
        <div class="accordion-item">
            <h2 class="accordion-header" id="${idu}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="true" aria-controls="${id}">
                ${obj.nombre}
            </button>
            </h2>
            <div id="${id}" class="accordion-collapse collapse" aria-labelledby="${idu}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <h3>${obj.nombre}</h3>
                <p>${obj.sexo}</p>
                <p>${obj.edad}</p>
                <p>${obj.email}</p>
                <p>${obj.historia}</p>
            </div>
            </div>
        </div>
        `
    )
}

// Unique ID
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

formulario.addEventListener("submit",e => {
    e.preventDefault()
    let id = uuidv4();
    let nombreLocal = document.querySelector("#nombre").value;
    let sexoLocal = document.querySelector("#sexo").value ;
    let edadLocal  =document.querySelector("#edad").value ;
    let emailLocal = document.querySelector("#email").value;
    let historiaLocal = document.querySelector("#historial").value; 
    // Create object
    let paciente = new Paciente(nombreLocal, sexoLocal, edadLocal, emailLocal, historiaLocal)
    // Saving in LocalStorage
    localStorage.setItem("paciente",JSON.stringify(paciente))
    // Adding Accordion
    accordion.innerHTML += eachPacient(paciente, 'id-'+id, 'idu-'+id);
    pacienteArray.push(paciente);
    
});

//Muestra por consola el array de objetos
console.log(pacienteArray);