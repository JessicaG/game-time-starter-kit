var canvas = document.getElementById('game');
var context = canvas.getContext('2d');                           

function Board(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.width = 10;
        this.height = 10;
}

Board.prototype.draw = function () {
  context.fillRect(this.rows, this.columns, this.width, this.height);
  return this
};

Board.prototype.move = function () {
  if (this.columns < canvas.height - this.height) {
    this.columns++;  
  }
  return this
};

//initialize board
//sets piece
//restart 

// pieces falling
// visually in shape

//rotation 

// 
// var animation = {
//   blocks: [new Block(50, 50), new Block(50, 70), new Block(50, 90), new Block(50, 110)],
//   draw: function() {
//     this.blocks.forEach(function(block) {
//       return block.draw();
//     });
//     return this;
//   },
//   move: function() {
//     this.blocks.forEach(function(block) {
//       return block.move();
//     });
//     return this;
//   }
// };

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
  
//   animation.draw().move();
//   requestAnimationFrame(gameLoop);
  
// });