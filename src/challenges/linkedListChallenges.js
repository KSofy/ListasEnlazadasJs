const SinglyLinkedList = require("../structures/simple/SinglyLinkedList");
const DoublyLinkedList = require("../structures/doubly/DoublyLinkedList");

function runLinkedListChallenges() {
  console.log("=== RETOS NODE.JS (PENDIENTES) ===");
  runSimpleChallenges();
  runDoublyChallenges();
  console.log();
}

function runSimpleChallenges() {
  const list = new SinglyLinkedList();
  list.addLast("A");
  list.addLast("B");
  list.addLast("A");
  list.addLast("C");
  list.addLast("B");
  list.addLast("D");

  console.log("Retos Lista Simple");
  console.log("Datos base:", list.toString());
  runChallenge("countOccurrences('A') esperado=2", () =>
    list.countOccurrences("A")
  );
  runChallenge("clean() esperado=6", () => list.clean());

  list.addLast(2);
  list.addLast(4);
  list.addLast(5);
  list.addLast(6);
  runChallenge("reverseInPlace() esperado=[6, 5, 4, 2]", () => {
    list.reverseInPlace();
    return list.toString();
  });
  runChallenge("removeDuplicates() en [A, B, A, C, B, D]", () =>
    list.removeDuplicates()
  );
}

function runDoublyChallenges() {
  const list = new DoublyLinkedList();
  list.addLast("v1");
  list.addLast("v2");
  list.addLast("v3");
  list.addLast("v2");
  list.addLast("v4");

  console.log("Retos Lista Doble");
  console.log("Datos base:", list.toForwardString());
  runChallenge("countOccurrences('v2') esperado=2", () =>
    list.countOccurrences("v2")
  );
  runChallenge("clean() esperado=5", () => list.clean());

  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.addLast(40);
  runChallenge("reverseInPlace() esperado=[40, 30, 20, 10]", () => {
    list.reverseInPlace();
    return list.toForwardString();
  });
  runChallenge("removeDuplicates()", () => list.removeDuplicates());
}

function runChallenge(title, action) {
  try {
    const result = action();
    console.log("  [OK]", title, "->", result);
  } catch (error) {
    console.log("  [PENDIENTE]", title, "->", error.message);
  }
}

module.exports = { runLinkedListChallenges };
