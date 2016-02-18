import { EventEmitter } from 'events';
import Block from './block';
import Piece from './piece';

class Board extends EventEmitter {
  constructor(columns = 10, rows = 20) {
    super();
    this.rows = rows;
    this.columns = columns;
    this.blocks = [];
    this.pieces = [];
  }

  addBlock(x, y) {
    let block = new Block(this, x, y);
    this.blocks.push(block);
    return block;
  }

  addPiece(x, y, pattern) {
    let piece = new Piece(this, x, y)
    this.pieces.push(piece);
    return piece;
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

  checkPieceAccessibility(piece, direction) {
    var pieceCollection = []
    if (direction.DOWN) { return piece.y + 1; }
    if (direction.LEFT) { return piece.x - 1; }
    if (direction.RIGHT) { return piece.x + 1; }
    var positionCoordinates = { x: piece.x, y: piece.y }
    // for ( let piece of this.pieces ) {
    //   return (piece.x === positionCoordinates.x && piece.y === positionCoordinates.y) {pieceCollection.push(piece);}
    // }
    return pieceCollection
    
    // for every piece.x check if canMoveDown,
    // put results into pieceCollection array
    // return true if all results are true
    // false if one or more are false

  }
 
  coordinatesMatch(positionCoordinates, block) {
    return (block.x === positionCoordinates.x && block.y === positionCoordinates.y)
  }

}
export default Board;