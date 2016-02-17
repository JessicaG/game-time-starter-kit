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

  it('can move down where there is a current block', function () {
    let block = new Block(this.board, 5, 5);
    this.board.addBlock(block.x, block.y);
    assert.isTrue(block.canMoveDown());
  });

  it('cannot move down where there is a current block', function () {
    let block = new Block(this.board, 5, 5);
    this.board.addBlock(block.x, block.y);
    this.board.addBlock(block.x, block.y + 1);
    assert.isFalse(block.canMoveDown());
  });

  it('cannot move left where there is a current block', function () {
    let block = new Block(this.board, 5, 5);
    this.board.addBlock(block.x, block.y);
    this.board.addBlock(block.x - 1, block.y);
    assert.isFalse(block.canMoveLeft());
  });

  it('cannot move right where there is a current block', function () {
    let block = new Block(this.board, 5, 5);
    this.board.addBlock(block.x, block.y);
    this.board.addBlock(block.x + 1, block.y);
    assert.isFalse(block.canMoveRight());
  });  

 });