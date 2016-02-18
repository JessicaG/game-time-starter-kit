import { EventEmitter } from 'events';
import Block from './block';
import direction from './direction';

class Piece {
  static get validPatterns() {
    return ['I', 'L', 'O', 'J', 'S', 'T', 'Z']
  }
  
  static randomPattern() {
    var patterns = Piece.validPatterns;
    var randomIndex = Math.floor(Math.random() * patterns.length);
    return [randomIndex];
  }
  
  constructor(board, x, y, pattern) {
    this.board = board;
    this.pattern = pattern;
    this.blocks = [];
    
    if (this.pattern === 'I') { return this.setupBlocksInIPattern() }

  }
  
  setupBlocksInIPattern() {
    this.blocks.push(new Block(this.board, this.x, this.y));
    this.blocks.push(new Block(this.board, this.x, this.y + 1));
    this.blocks.push(new Block(this.board, this.x, this.y + 2));
    this.blocks.push(new Block(this.board, this.x, this.y + 3));
  }

  moveDown() {
  	if (this.canMoveDown()){
  	this.y++;
  }
  	return this;
  }

  canMoveDown() {
  	return !this.board.checkPieceAccessibility(this, direction.DOWN)
    // return !this.board.checkAccessibility(this, direction.DOWN) && this.y < this.board.rows; 
  }
  	
	// rightmostblocks
	// mimicking api of singular block
	// based on pattern 
}

export default Piece;