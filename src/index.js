const { runSimpleListExample } = require("./examples/simpleListExample");
const { runDoublyListExample } = require("./examples/doublyListExample");
const { runMigrationGuideExample } = require("./examples/migrationGuideExample");
const { runLinkedListChallenges } = require("./challenges/linkedListChallenges");

function main() {
  console.log("=== LISTAS ENLAZADAS EN NODE.JS ===");
  console.log();

  runSimpleListExample();
  runDoublyListExample();
  runMigrationGuideExample();
  runLinkedListChallenges();
}

main();
