import { assert } from 'chai';
import Board from '../lib/board';

describe('Board', function () {

  it('should have columns', function () {
    let board = new Board(20, 0);
    assert.equal(board.columns, 20);
  });

  it('should have rows', function () {
    let board = new Board(0, 20);
    assert.equal(board.rows, 20);
  });

});