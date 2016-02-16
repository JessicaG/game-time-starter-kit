import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';

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

  describe('findBlockAtCoordinates', function () {
    it('should find a block at a given board coordinate', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);
      assert.equal(board.findBlockAtCoordinates(5, 5), block);
    });

  });

  describe('isBlockBelow', function () {

    it('should find return false if there is not a block below', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);
      assert.equal(board.isBlockBelow(block), false);
    });

    it('should should return false if block is at the bottom of the board', function () {
      let board = new Board();
      let block = new Block(board, 5, 20);
      assert.isFalse(board.isBlockBelow(block));
    });

    it('should should return true if block if there is a block below', function () {
      let board = new Board();
      let block1 = new Block(board, 5, 10);
      let block2 = new Block(board, 5, 11);
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.isBlockBelow(block1));
    });

  });

  describe('isBlockLeft', function () {

    it('should find return false if there is not a block left', function () {
      let board = new Board();
      let block = new Block(board, 9, 5);
      assert.equal(board.isBlockLeft(block), false);
    });

    it('should should return false if block is to the far left of the board', function () {
      let board = new Board();
      let block = new Block(board, 10, 5);
      assert.isFalse(board.isBlockLeft(block));
    });

    it('should should return true if block if there is a block left', function () {
      let board = new Board();
      let block1 = new Block(board, 8, 5);
      let block2 = new Block(board, 9, 5);
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.isBlockLeft(block1));
    });

  });

  describe('isBlockRight', function () {

    it('should find return false if there is not a block right', function () {
      let board = new Board();
      let block = new Block(board, 9, 5);
      assert.equal(board.isBlockRight(block), false);
    });

    it('should should return false if block is to the far right of the board', function () {
      let board = new Board();
      let block = new Block(board, 10, 5);
      assert.isFalse(board.isBlockRight(block));
    });

    it('should should return true if block if there is a block right', function () {
      let board = new Board();
      let block1 = new Block(board, 8, 5);
      let block2 = new Block(board, 7, 5);
      board.blocks.push(block1)
      board.blocks.push(block2)

      assert.isTrue(board.isBlockRight(block1));
    });

  });


});