import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';
import Piece from '../lib/piece';

describe('Piece', function () {

  beforeEach(function () {
  	this.board = new Board(10, 20);
  });

  describe('move around board', function() {

    it.skip('can move down', function () {
      let block = new Block(this.board, 5, 5)
      let piece = new Piece(this.board, block.x, block.y, 'I');
      piece.moveDown()
      assert.equal(piece.y, [6, 7, 8]);
    });

    it.skip('can move left', function () {
      let block = new Block(this.board, 5, 5);
      block.moveLeft()
      assert.equal(block.x, 4);
    });

    it.skip('can move right', function () {
      let block = new Block(this.board, 5, 5);
      block.moveRight()
      assert.equal(block.x, 6);
    });
  });

});