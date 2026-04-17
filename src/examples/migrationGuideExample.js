const SinglyLinkedList = require("../structures/simple/SinglyLinkedList");
const DoublyLinkedList = require("../structures/doubly/DoublyLinkedList");

function runMigrationGuideExample() {
  console.log("--- Ejemplo Guia de Migracion Java -> Node.js ---");

  const simple = new SinglyLinkedList();
  simple.addLast("A");
  simple.addLast("B");
  simple.addLast("A");
  simple.addLast("C");
  simple.addLast("B");
  simple.addLast("D");

  console.log("[Simple] Inicial:", simple.toString());
  runChallenge("[Simple] countOccurrences('A')", () =>
    simple.countOccurrences("A")
  );
  runChallenge("[Simple] reverseInPlace", () => {
    simple.reverseInPlace();
    return simple.toString();
  });
  runChallenge("[Simple] removeDuplicates", () => simple.removeDuplicates());
  console.log("[Simple] Estado actual:", simple.toString());

  const doubly = new DoublyLinkedList();
  doubly.addLast("v1");
  doubly.addLast("v2");
  doubly.addLast("v3");
  doubly.addLast("v2");
  doubly.addLast("v4");

  console.log("[Doble] Inicial forward:", doubly.toForwardString());
  console.log("[Doble] Inicial backward:", doubly.toBackwardString());
  runChallenge("[Doble] countOccurrences('v2')", () =>
    doubly.countOccurrences("v2")
  );
  runChallenge("[Doble] reverseInPlace", () => {
    doubly.reverseInPlace();
    return doubly.toForwardString();
  });
  runChallenge("[Doble] removeDuplicates", () => doubly.removeDuplicates());
  console.log("[Doble] Estado actual:", doubly.toForwardString());
  console.log();
}

function runChallenge(title, action) {
  try {
    const result = action();
    console.log(title + ":", result);
  } catch (error) {
    console.log(title + ":", "[PENDIENTE]", error.message);
  }
}

module.exports = { runMigrationGuideExample };
