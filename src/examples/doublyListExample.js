const DoublyLinkedList = require("../structures/doubly/DoublyLinkedList");

function runDoublyListExample() {
  const historial = new DoublyLinkedList();
  historial.addLast("Inicio");
  historial.addLast("Menu");
  historial.addLast("Perfil");
  historial.addFirst("Login");

  console.log("--- Lista Doble (Node.js) ---");
  console.log("Recorrido normal:", historial.toForwardString());
  console.log("Recorrido inverso:", historial.toBackwardString());
  console.log("Salir de perfil:", historial.removeLast());
  console.log("Estado final:", historial.toForwardString());
  console.log();
}

module.exports = { runDoublyListExample };
