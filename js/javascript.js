//json estudiantes
var estudiantes =  [
                {"codigo":"001", "nombre":"Mateo", "nota":3},
                {"codigo":"002", "nombre":"Alejandro", "nota":8},
                {"codigo":"003", "nombre":"Martina", "nota":8.5},
                {"codigo":"004", "nombre":"Marcos", "nota":5.6},
                {"codigo":"005", "nombre":"Martin", "nota":7},
                {"codigo":"006", "nombre":"Nicolas", "nota":9},
                {"codigo":"007", "nombre":"Pablo", "nota":2},
                {"codigo":"008", "nombre":"Santiago", "nota":4.5},
                {"codigo":"009", "nombre":"Marta", "nota":10},
                {"codigo":"010", "nombre":"Carlos", "nota":7.5}];

document.getElementById('lista').addEventListener("click",  registros);
document.getElementById('promedio').addEventListener("click", promedios);
document.getElementById('Mayor nota').addEventListener("click", calcularNotaMayor);
document.getElementById('Menor nota').addEventListener("click", calcularNotaMenor);

//funcion que captura los datos del registro
function registros(json) {
  var codigo = parseInt(document.getElementById('codigo').value); //capturo el valor ingresado en codigo y lo coloco en la variable codigo
  var nombre = document.getElementById('nombre').value;//capturo el valor ingresado en nombre y lo coloco en la variable nombre
  var nota = parseInt(document.getElementById('nota').value);//capturo el valor ingresado en nota y lo coloco en la variable nota

  var estudiante = {"codigo":codigo, "nombre":nombre, "nota":nota};
      estudiantes.push(estudiante);
      leerJSON(estudiantes);
}

//funcion que lee json y devuelve sus propiedades y valores
function leerJSON(json) {
  var out="estudiantes<br>";
  var i;
  for (i = 0; i < json.length; i++) {
    out+="codigo:"+json[i].codigo+"- "+" nombre: "+json[i].nombre+"-"+" Nota: "+json[i].nota+"<br>";
  }
  document.getElementById('tabla').innerHTML = out;
}

//funcion que saca el rpmedio de los 10 estudiantes
function promedios(Estudiantes) {
  var json = estudiantes;
  var total = 0;
  for (i = 0; i < json.length; i++) {
    total += json[i].nota;
  }
  var nota = (total/10).toFixed(2)
  alert ("El promedio de los 10 estudiantes es: " + nota);
}


//funcion que lee la propiedad nota y de vuelve la nota mayor
function calcularNotaMayor(Estudiantes) {
  var json = estudiantes;
  var notamayor = 0;
  for (i = 0; i < json.length; i++) {
    if (json[i].nota > notamayor) {
      notamayor = json[i].nota;
      pos =i;
    }
  }
  alert ("El estudiante: " + json[pos].nombre + " saco la mayor nota: " + notamayor);
}


//funcion que lee la propiedad nota y de vuelve la nota menor
function calcularNotaMenor(Estudiantes) {
  var json = estudiantes;
  var notamenor = json[0].nota;
    for (i = 0; i < json.length; i++) {
      if (json[i].nota < notamenor ) {
        notamenor = json[i].nota;
        pos =i;
      }
    }
  alert ("El estudiante: " + json[pos].nombre + " saco la menor nota: " + notamenor);
}
