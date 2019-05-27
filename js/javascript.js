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

//funcion que lee json y devuelve sus propiedades y valores
function leerJSON(json) {
  var out="estudiantes<br>";
  var i;
  for (i = 0; i < json.length; i++) {
    out+="codigo:"+json[i].codigo+"- "+" nombre: "+json[i].nombre+"-"+" Nota: "+json[i].nota+"<br>";
  }
  document.getElementById('tabla').innerHTML = out;
}

//funcion que saca el promedio de las 10 nmotas
function Promedio(json) {
  var total =0;
  for (var i = 0; i < json.length; i++) {
    total += json[i].nota;
  }
  var nota = (total/10).toFixed(2);
    document.getElementById('tabla').innerHTML = "La nota promedio de los Estudiantes es: " + nota;
}

//funcion que saca al estudiantes con mayor nota
function notaMayor(json) {
    var notamayor = 0;
    var pos = 0;
    for (i = 0; i < json.length; i++) {
        if (json[i].nota > notamayor) {
            notamayor = json[i].nota;
            pos = i;
        }
    }
    document.getElementById("tabla").innerHTML = "El estudiantes: " + json[pos].nombre + " saco la mayor nota: " + notamayor;
  }

//funcion que saca al estudiantes con mayor nota
function notaMenor(json) {
    var notamenor = json[0].nota;
    var pos = 0;
    for (i = 0; i < json.length; i++) {
        if (json[i].nota < notamenor) {
            notamenor = json[i].nota;
            pos = i;
        }
    }
    document.getElementById("tabla").innerHTML = "El estudiantes: " + json[pos].nombre + " saco la menor nota: " + notamenor;
  }
