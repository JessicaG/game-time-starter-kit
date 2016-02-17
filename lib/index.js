var canvas = document.getElementById('game');
var context = canvas.getContext('2d');                           

function Box(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
}

Box.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this
};

Box.prototype.move = function () {
  if (this.y < canvas.height - this.height) {
    this.y++;  
  }
  return this
};

var animation = {
  boxes: [new Box(50, 50), new Box(50, 70), new Box(50, 90), new Box(50, 110)],
  draw: function() {
    this.boxes.forEach(function(box) {
      return box.draw();
    });
    return this;
  },
  move: function() {
    this.boxes.forEach(function(box) {
      return box.move();
    });
    return this;
  }
};

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  animation.draw().move();
  requestAnimationFrame(gameLoop);
  
});