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
}

export default Block;
