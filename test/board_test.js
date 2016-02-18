import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';
import Direction from '../lib/direction';

describe('Board', function () {

  it('should have columns', function () {
    let board = new Board(20, 0);
    assert.equal(board.columns, 20);
  });

  it('should have rows', function () {
    let board = new Board(0, 20);
    assert.equal(board.rows, 20);
  });

  it('should default to 10 columns and 20 rows', function () {
    let board = new Board();
    assert.equal(board.columns, 10);
    assert.equal(board.rows, 20);
  });

  it('should have an array of blocks', function () {
    let board = new Board();
    assert.isArray(board.blocks);
  });

  it('should have an array of pieces', function () {
    let board = new Board();
    assert.isArray(board.pieces);
  });

  describe('findBlockAtCoordinates', function () {
    it('should find a block at a given board coordinate', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);
      assert.equal(board.findBlockAtCoordinates(5, 5), block);
    });

  });

  describe('checkBlockSurrounding', function () {

    it('should find return false if there is not a block right', function () {
      let board = new Board();
      let block = new Block(board, 9, 5);
      
      let direction = Direction.RIGHT
      assert.equal(board.checkBlockSurrounding(block, direction), false);
    });

    it('should should return false if block is to the far right of the board', function () {
      let board = new Board();
      let block = new Block(board, 10, 5);
      
      let direction = Direction.RIGHT
      assert.isFalse(board.checkBlockSurrounding(block, direction));
    });

    it('should should return true if block if there is a block right', function () {
      let board = new Board();
      let block1 = new Block(board, 7, 5);
      let block2 = new Block(board, 8, 5);
      
      let direction = Direction.RIGHT
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.checkBlockSurrounding(block1, direction));
    });

  it('should find return false if there is not a block left', function () {
      let board = new Board();
      let block = new Block(board, 9, 5);

      let direction = Direction.LEFT
      assert.equal(board.checkBlockSurrounding(block, direction), false);
    });

    it('should should return false if block is to the far left of the board', function () {
      let board = new Board();
      let block = new Block(board, 10, 5);

      let direction = Direction.LEFT
      assert.isFalse(board.checkBlockSurrounding(block, direction));
    });

    it('should should return true if block if there is a block left', function () {
      let board = new Board();
      let block1 = new Block(board, 9, 5);
      let block2 = new Block(board, 8, 5);

      let direction = Direction.LEFT
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.checkBlockSurrounding(block1, direction));
    });

    it('should find return false if there is not a block below', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);

      let direction = Direction.DOWN
      assert.equal(board.checkBlockSurrounding(block, direction), false);
    });

    it('should should return false if block is at the bottom of the board', function () {
      let board = new Board();
      let block = new Block(board, 5, 20);

      let direction = Direction.DOWN
      assert.isFalse(board.checkBlockSurrounding(block, direction));
    });

    it('should should return true if block if there is a block below', function () {
      let board = new Board();
      let block1 = new Block(board, 5, 10);
      let block2 = new Block(board, 5, 11);

      let direction = Direction.DOWN
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.checkBlockSurrounding(block1, direction));
    });


  });

  describe('checkPieceAccessibility', function () {

    it.skip('should return true if all pieces are available to move down', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);
      let piece = new Piece(board, block.x, block.y)

      let direction = Direction.DOWN
      assert.isTrue(board.checkPieceAccessibility(block, direction));
    });

  });


});