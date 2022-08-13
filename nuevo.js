function horario() {
  if (turno == "almorzar") {
    alert(
      titular + " si vas a venir a almorzar tu plato incluye bebida gratis!!"
    );
  } else {
    alert(titular + " si vas a venir a cenar tu plato incluye postre gratis!!");
  }
}

let titular = prompt("Hola!! ¿Cual es tu nombre?");
alert("Bienvenido/a " + titular + " a Restaurant Uno!");
alert("Veamos el plato sugerido del día para cuando nos visites");
let dia = prompt("Que dia venis a comer?").toLowerCase();
let turno = prompt("¿Ese día, ¿Vendrías a almorzar o cenar?").toLowerCase();

switch (dia) {
  case "lunes":
    alert(
      "El plato sugerido de lunes es sandwuich vegetariano con papas fritas"
    );
    horario();
    break;
  case "martes":
    alert("El plato sugerido de martes es empanadas criollas");
    horario();
    break;
  case "miercoles":
    alert("El plato de miercoles es ensalada cesar especial");
    horario();
    break;
  case "jueves":
    alert("El plato sugerido de jueves es sorrentinos de jamón y queso");
    horario();
    break;
  case "viernes":
    alert("El plato sugerido de viernes es pizza napolitana");
    horario();
    break;
  case "sabado":
    alert("El plato sugerido de sabado es rabas a la provenzal");
    horario();
    break;
  case "domingo":
    alert("El plato sugerido de domingo es lasagna");
    horario();
    break;
  default:
    alert("Ese no es un dia valido");
    break;
}

let cantidad = prompt("¿Cuantas personas vendrían, incluyéndote?");

let reserva = prompt("Querés confirmar la reserva?").toLowerCase();
if (reserva == "si") {
  alert("Tu reserva ha sido confirmada para " + cantidad + " comensales");
} else {
  alert("Gracias por tu consulta, te esperamos en otra oportunidad!");
}

const miArray = [];
class comensal {
  constructor(titular, cantidad, dia, turno) {
    this.titular = titular;
    this.cantidad = cantidad;
    this.dia = dia;
    this.turno = turno;
  }
}

let comensal1 = new comensal("Ana", 5, "martes", "cenar");
let comensal2 = new comensal("Jorge", 4, "viernes", "almorzar");
let comensal3 = new comensal("Luis", 8, "viernes", "almorzar");
miArray.push(comensal1, comensal2, comensal3);

let nuevo = new comensal(titular, cantidad, dia, turno);
if (reserva == "si") {
  miArray.push(nuevo);
} else {
}

console.log("Resumen de las reservas de Restaurant UNO esta semana");
console.log(miArray);
