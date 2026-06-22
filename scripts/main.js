import { knightMoves } from "./knight-moves.js";

console.log("Shortest path from [0, 0] to [1, 2]");
console.log(knightMoves([0, 0], [1, 2]));
console.log();

console.log("Shortest path from [0, 0] to [3, 3]");
console.log(knightMoves([0, 0], [3, 3]));
console.log();

console.log("Shortest path from [3, 3] to [0, 0]");
console.log(knightMoves([3, 3], [0, 0]));
console.log();

console.log("Shortest path from [0, 0] to [7, 7]");
console.log(knightMoves([0, 0], [7, 7]));
console.log();

console.log("Shortest path from [3, 3] to [4, 3]");
console.log(knightMoves([3, 3], [4, 3]));
console.log();

console.log("Shortest path from [2, 5] to [6, 4]");
console.log(knightMoves([2, 5], [6, 4]));
console.log();

console.log("Shortest path from [5, 2] to [2, 6]");
console.log(knightMoves([5, 2], [2, 6]));
