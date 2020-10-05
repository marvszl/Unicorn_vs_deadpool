class schuss {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    push();
    noFill();
    stroke(255);
    circle(this.x+5, this.y-15, 3)
    pop();
  }

  move() {
    this.x = this.x + 10;

  }
  
}