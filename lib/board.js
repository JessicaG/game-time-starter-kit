import { EventEmitter } from 'events';
import Block from './block';
import Direction from './direction';

class Board extends EventEmitter {
  constructor(columns = 10, rows = 20) {
    super();
    this.rows = rows;
    this.columns = columns;
    this.blocks = [];
  }

  addBlock(x, y) {
    let block = new Block(this, x, y);
    this.blocks.push(block);
    return block;
  }

  findBlockAtCoordinates(x, y) {
    for (let block of this.blocks) {
      if (block.x === x && block.y === y) { return block; }
    }
  }

  checkBlockSurrounding(block, direction) {
    
    var blockCollection = []
    if (direction.DOWN) { return block.y + 1; }
    if (direction.LEFT) { return block.x - 1; }
    if (direction.RIGHT) { return block.x + 1; }
    var positionCoordinates = { x: block.x, y: block.y }
    for (let block of this.blocks) {
      if (this.coordinatesMatch(positionCoordinates, block)) { blockCollection.push(block); }
    }
    return blockCollection.length > 1
  }

  isBlockBelow(block) {
    var blockCollection = []
    var positionCoordinates = { x: block.x, y: block.y + 1}
     for (let block of this.blocks) {
      if (this.coordinatesMatch(positionCoordinates, block)) { blockCollection.push(block); }
    }
    return blockCollection.length > 1
  }

  isBlockLeft(block) {
    var blockCollection = []
    var positionCoordinates = { x: block.x - 1, y: block.y}
     for (let block of this.blocks) {
      if (this.coordinatesMatch(positionCoordinates, block)) { blockCollection.push(block); }
    }
    return blockCollection.length > 1
  }

  isBlockRight(block) {
    var blockCollection = []
    var positionCoordinates = { x: block.x + 1, y: block.y}
     for (let block of this.blocks) {
      if (this.coordinatesMatch(positionCoordinates, block)) { blockCollection.push(block); }
    }
    return blockCollection.length > 1
  }

  coordinatesMatch(positionCoordinates, block) {
    return (block.x === positionCoordinates.x && block.y === positionCoordinates.y)
  }

}
export default Board;