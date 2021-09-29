let validarRut:boolean;
let validarTelefono:boolean;
let validarLenInteres:boolean;
let validarCursos:boolean;

let nombreCompleto:any = document.getElementById("nombreCompleto");
let rut:any = document.getElementById("rut");
let correo:any = document.getElementById("correo");
let telefono:any = document.getElementById("telefono");

let checkBoxPython:any =document.getElementById("python");
let checkBoxTs:any =document.getElementById("typeScript");
let checkBoxCplus:any =document.getElementById("c++");
let checkBoxCchar:any =document.getElementById("c#");
let checkBoxPhp:any =document.getElementById("php");
let checkBoxRuby:any =document.getElementById("ruby");
let checkBoxJava:any =document.getElementById("java");
let checkBoxR:any =document.getElementById("r");
let checkBoxGroovy:any =document.getElementById("groovy");
let checkBoxGo:any =document.getElementById("go");
let checkBoxSwift:any =document.getElementById("swift");
let checkBoxKotin:any =document.getElementById("kotin");

let radioAlto:any = document.getElementById("nivelAlto");
let radioMedio:any = document.getElementById("nivelMedio");
let radioBajo:any = document.getElementById("nivelBajo");

let rangePython:any = document.getElementById("rangePython");
let rangeJava:any = document.getElementById("rangeJava");
let rangeCplus:any = document.getElementById("rangeC++");

let checkHardestrctDatos:any = document.getElementById("estrctDatos");
let checkHardIA:any = document.getElementById("IA");
let checkHardHumanoComputador:any = document.getElementById("HumanoComputador");
let checkHardSO:any = document.getElementById("SO");
let checkHardOtro:any = document.getElementById("otrocheck");
let textOtro:any = document.getElementById("otrotxt");

let textOpinion:any = document.getElementById("opinion");

function checkRut (rut:any): boolean {
    let rutAux:any = rut.value;

    //sacar guion
    rutAux = rutAux.replace('-', '');

    //aislar cuerpo de digito verificador
    let cuerpo:any = rutAux.slice(0,-1); 
    let dv:any = rutAux.slice(-1).toUpperCase();

    if(!(cuerpo.length>=7 && cuerpo.length <=8)) {
        console.log("$-- EL RUT ES INVALIDO");  
        return false;     
    }

    return true;
};

function checkTelefono (telefono:any) : boolean{
    let largo:any = telefono.value.length;
    
    if (largo != 9) {
        console.log("$--TELEFONO INVALIDO");
        return false;
    }

    return true;
}

function validarCheckBoxLenInteres(): boolean {
    let i = 0;
    
    if(checkBoxPython.checked) i++;
    if(checkBoxTs.checked) i++;
    if(checkBoxCplus.checked) i++;
    if(checkBoxCchar.checked) i++;
    if(checkBoxPhp.checked) i++;
    if(checkBoxRuby.checked) i++;
    if(checkBoxJava.checked) i++;
    if(checkBoxR.checked) i++;;
    if(checkBoxGroovy.checked) i++;
    if(checkBoxGo.checked) i++;
    if(checkBoxSwift.checked) i++;
    if(checkBoxKotin.checked) i++;

    if (i == 0) {
        console.log("$--PORFAVOR MARCAR UNO O MAS LENGUAJES DE INTERES");
        return false;
    }

    return true;
  
};

function validarCheckBoxCursos (): boolean {
    let i = 0;

    if (checkHardestrctDatos.checked) i++;
    if (checkHardIA.checked) i++;
    if (checkHardHumanoComputador.checked) i++;
    if (checkHardSO.checked) i++;
    if (checkHardOtro.checked) {
        i++;
        if (textOtro.value == "") {
            console.log("$--PORFAVOR RELLENAR CASILLA DE OTRO CURSO DIFICL");
            return false;
        }
    }

    if( i == 0) {
        console.log("$--PORFAVOR MARCAR UNO O MAS CURSOS QUE USTED CONSIDERO MAS DIFICIL");
        return false;
    }

    return true;
};


//BOTON 1
let formulario:any = document.getElementById("formulario");
formulario.addEventListener("submit", function(event:any) {


    validarRut = checkRut(rut);
    validarTelefono = checkTelefono(telefono );
    validarLenInteres = validarCheckBoxLenInteres();
    //os radio se validan solos
    //los rangos no se validan
    validarCursos = validarCheckBoxCursos();

    if(validarRut==true && validarTelefono==true && validarLenInteres==true && validarCursos==true) {
        console.log("$--EL FORMULARIO FUE COMPLETADO EXITOSAMENTE"); 
    }
    else {
        console.log("$--¡NO ES POSIBLE ENVIAR FORMULARIO, PRESENTA ERRORES!" );
        console.log("-----------------------------------------------------------");
        event.preventDefault();
    }

    

    
});

//BOTON 2
let boton2:any = document.getElementById("bttn2");
boton2.onclick = function(event:any){

    let formulraio:any = document.getElementById("formulario");
    formulario.reset();

    console.log("$--TUS DATOS FUERON CANCELADOS");
    console.log("-----------------------------------------------------------");
    
    event.preventDefault();
}