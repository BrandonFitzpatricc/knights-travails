import { Position } from "./position.js";

const knightMoves = (startPosition, endPosition) => {
  const queue = [new Position(startPosition, [startPosition])];
  const visited = [new Position(startPosition, [startPosition])];

  while (true) {
    const currentPosition = queue.shift();

    const adjacentPositions = getAdjacentPositions(currentPosition);

    for (const position of adjacentPositions) {
      if (JSON.stringify(position.value) === JSON.stringify(endPosition)) {
        return position.path;
      }

      if (!visited.includes(position)) {
        queue.push(position);
        visited.push(position);
      }
    }
  }
};

function getAdjacentPositions(position) {
  let adjacentPositions = [];

  // These offsets are used for obtaining the coordinates of each adjacent position,
  // they change after each loop iteration.
  let xOffset = -2;
  let yOffset = -1;

  for (let i = 1; i <= 8; i++) {
    const adjacentPosition = new Position([
      position.value[0] + xOffset,
      position.value[1] + yOffset,
    ]);
    adjacentPosition.path = position.path.concat([adjacentPosition.value]);

    adjacentPositions.push(adjacentPosition);

    yOffset = -yOffset;
    if (i === 2 || i === 6) xOffset = -xOffset;

    if (i === 4) {
      const temp = -xOffset;
      xOffset = yOffset;
      yOffset = -temp;
    }
  }

  const isValidPosition = (position) => {
    for (const coordinate of position.value) {
      if (coordinate < 0 || coordinate > 7) return false;
    }
    return true;
  };

  adjacentPositions = adjacentPositions.filter(isValidPosition);

  return adjacentPositions;
}

export { knightMoves };
