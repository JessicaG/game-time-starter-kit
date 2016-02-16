import { EventEmitter } from 'events';

class Block extends EventEmitter {
  constructor(board, x = 0, y = 0, piece = null) {
    super();
    this.board = board;
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.active = true;
    this.board.blocks.push(this);
  }

  moveDown() {
  if (this.canMoveDown()){
  	this.y++;
  }
  	return this;
  }

  moveLeft() {
  	if (this.canMoveLeft()){
  	  this.x--;	
  	}
  	return this;
  }

  moveRight() {
    if (this.canMoveLeft()){
  	 this.x++;
    }
  	return this;
  }

  canMoveLeft() {
  	return !this.board.isBlockLeft(this) && this.x !== 0;
  }

  canMoveRight() {
    return !this.board.isBlockRight(this) && this.x > this.board.columns;
  }

  canMoveDown() {
    return !this.board.isBlockBelow(this) && this.y < this.board.rows; 
  }

}

export default Block;
