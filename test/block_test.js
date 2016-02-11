import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';

describe('Block', function () {

  beforeEach(function () {
  	this.board = new Board(10, 20);
  });

  it('can move down', function () {
    let block = new Block(this.board, 5, 5);
    block.moveDown()
    assert.equal(block.y, 6);
  });

  it('can move left', function () {
    let block = new Block(this.board, 5, 5);
    block.moveLeft()
    assert.equal(block.x, 4);
  });

  it('can move right', function () {
    let block = new Block(this.board, 5, 5);
    block.moveRight()
    assert.equal(block.x, 6);
  });

  it('will not move left if against left wall', function () {
    let block = new Block(this.board, 0, 5);
    block.moveLeft()
    assert.equal(block.x, 0);
  });

  it('cannot move left if against left wall', function () {
    let block = new Block(this.board, 0, 5);
    assert.isFalse(block.canMoveLeft());
  });

  it('will not move right if against right wall', function () {
    let block = new Block(this.board, 5, 0);
    block.moveRight()
    assert.equal(block.y, 0);
  });

  it('cannot move right if against right wall', function () {
    let block = new Block(this.board, 5, 0);
    assert.isFalse(block.canMoveRight());
  });

  it('will not move down if at bottom', function () {
    let block = new Block(this.board, 9, 20);
    block.moveDown()
    assert.equal(block.y, 20);
  });

  it('cannot move down if at bottom', function () {
    let block = new Block(this.board, 9, 20);
    assert.isFalse(block.canMoveDown());
  });

 });