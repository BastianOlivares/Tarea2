"use strict";
var validarRut;
var validarTelefono;
var validarLenInteres;
var validarCursos;
var nombreCompleto = document.getElementById("nombreCompleto");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var checkBoxPython = document.getElementById("python");
var checkBoxTs = document.getElementById("typeScript");
var checkBoxCplus = document.getElementById("c++");
var checkBoxCchar = document.getElementById("c#");
var checkBoxPhp = document.getElementById("php");
var checkBoxRuby = document.getElementById("ruby");
var checkBoxJava = document.getElementById("java");
var checkBoxR = document.getElementById("r");
var checkBoxGroovy = document.getElementById("groovy");
var checkBoxGo = document.getElementById("go");
var checkBoxSwift = document.getElementById("swift");
var checkBoxKotin = document.getElementById("kotin");
var radioAlto = document.getElementById("nivelAlto");
var radioMedio = document.getElementById("nivelMedio");
var radioBajo = document.getElementById("nivelBajo");
var rangePython = document.getElementById("rangePython");
var rangeJava = document.getElementById("rangeJava");
var rangeCplus = document.getElementById("rangeC++");
var checkHardestrctDatos = document.getElementById("estrctDatos");
var checkHardIA = document.getElementById("IA");
var checkHardHumanoComputador = document.getElementById("HumanoComputador");
var checkHardSO = document.getElementById("SO");
var checkHardOtro = document.getElementById("otrocheck");
var textOtro = document.getElementById("otrotxt");
var textOpinion = document.getElementById("opinion");
function checkRut(rut) {
    var rutAux = rut.value;
    //sacar guion
    rutAux = rutAux.replace('-', '');
    //aislar cuerpo de digito verificador
    var cuerpo = rutAux.slice(0, -1);
    var dv = rutAux.slice(-1).toUpperCase();
    if (!(cuerpo.length >= 7 && cuerpo.length <= 8)) {
        console.log("$-- EL RUT ES INVALIDO");
        return false;
    }
    return true;
}
;
function checkTelefono(telefono) {
    var largo = telefono.value.length;
    if (largo != 9) {
        console.log("$--TELEFONO INVALIDO");
        return false;
    }
    return true;
}
function validarCheckBoxLenInteres() {
    var i = 0;
    if (checkBoxPython.checked)
        i++;
    if (checkBoxTs.checked)
        i++;
    if (checkBoxCplus.checked)
        i++;
    if (checkBoxCchar.checked)
        i++;
    if (checkBoxPhp.checked)
        i++;
    if (checkBoxRuby.checked)
        i++;
    if (checkBoxJava.checked)
        i++;
    if (checkBoxR.checked)
        i++;
    ;
    if (checkBoxGroovy.checked)
        i++;
    if (checkBoxGo.checked)
        i++;
    if (checkBoxSwift.checked)
        i++;
    if (checkBoxKotin.checked)
        i++;
    if (i == 0) {
        console.log("$--PORFAVOR MARCAR UNO O MAS LENGUAJES DE INTERES");
        return false;
    }
    return true;
}
;
function validarCheckBoxCursos() {
    var i = 0;
    if (checkHardestrctDatos.checked)
        i++;
    if (checkHardIA.checked)
        i++;
    if (checkHardHumanoComputador.checked)
        i++;
    if (checkHardSO.checked)
        i++;
    if (checkHardOtro.checked) {
        i++;
        if (textOtro.value == "") {
            console.log("$--PORFAVOR RELLENAR CASILLA DE OTRO CURSO DIFICL");
            return false;
        }
    }
    if (i == 0) {
        console.log("$--PORFAVOR MARCAR UNO O MAS CURSOS QUE USTED CONSIDERO MAS DIFICIL");
        return false;
    }
    return true;
}
;
//BOTON 1
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    validarRut = checkRut(rut);
    validarTelefono = checkTelefono(telefono);
    validarLenInteres = validarCheckBoxLenInteres();
    //os radio se validan solos
    //los rangos no se validan
    validarCursos = validarCheckBoxCursos();
    if (validarRut == true && validarTelefono == true && validarLenInteres == true && validarCursos == true) {
        console.log("$--EL FORMULARIO FUE COMPLETADO EXITOSAMENTE");
    }
    else {
        console.log("$--¡NO ES POSIBLE ENVIAR FORMULARIO, PRESENTA ERRORES!");
        console.log("-----------------------------------------------------------");
        event.preventDefault();
    }
});
//BOTON 2
var boton2 = document.getElementById("bttn2");
boton2.onclick = function (event) {
    var formulraio = document.getElementById("formulario");
    formulario.reset();
    /*nombreCompleto.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";

    checkBoxPython.checked = false;
    checkBoxTs.checked=false;
    checkBoxCplus.checked = false;
    checkBoxCchar.checked = false;
    checkBoxPhp.checked = false;
    checkBoxRuby.checked = false;
    checkBoxJava.checked = false;
    checkBoxR.checked = false;
    checkBoxGroovy.checked = false;
    checkBoxGo.checked = false;
    checkBoxSwift.checked = false;
    checkBoxKotin.checked = false;

    radioAlto.checked = false;
    radioMedio.checked =false;
    radioBajo.checked = false;

    rangePython.valueAsNumber = 3;
    rangeJava.valueAsNumber = 3;
    rangeCplus.valueAsNumber = 3;

    checkHardestrctDatos.checked = false;
    checkHardIA.checked = false;
    checkHardHumanoComputador.checked = false;
    checkHardSO.checked = false;
    checkHardOtro.checked = false;
    textOtro.value = "";

    textOpinion.value = "";*/
    console.log("$--TUS DATOS FUERON CANCELADOS");
    console.log("-----------------------------------------------------------");
    event.preventDefault();
};
