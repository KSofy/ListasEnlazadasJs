const SinglyLinkedList = require("../structures/simple/SinglyLinkedList");

function runSimpleListExample() {
  const pendientes = new SinglyLinkedList();
  pendientes.addLast("Investigar tema de grafos");
  pendientes.addLast("Resolver hoja de ejercicios");
  pendientes.addFirst("Repasar listas enlazadas");

  console.log("--- Lista Simple (Node.js) ---");
  console.log("Pendientes:", pendientes.toString());
  console.log(
    "Contiene 'grafos':",
    pendientes.contains("Investigar tema de grafos")
  );
  console.log("Tarea completada:", pendientes.removeFirst());
  console.log("Pendientes actualizados:", pendientes.toString());
  console.log();
}

module.exports = { runSimpleListExample };
