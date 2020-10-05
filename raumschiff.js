class fahrer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    /*push();
    fill(255, 0, 255);

    beginShape();
    vertex(this.x + 10, this.y - 2.5);
    vertex(this.x + 20, this.y + 2.5);
    vertex(this.x + 10, this.y + 2.5);
    vertex(this.x - 5, this.y + 2.5);
    vertex(this.x - 15, this.y + 15);
    vertex(this.x - 10, this.y + 2.5);
    vertex(this.x - 10, this.y - 2.5);
    vertex(this.x - 15, this.y - 15);
    vertex(this.x - 5, this.y - 2.5);
    endShape();

    pop();*/
    //img.resize(40,0);
    image(unicorn, this.x-20, this.y-20,40,40);
  }

  move_up() {
    if (this.y > 0) {
      this.y = this.y - 4;
    }


  }
  move_down() {
    if (this.y < height) {
      this.y = this.y + 4;
    }
    
  }

  move_right() {
    if (this.x < width) {
      this.x = this.x + 4;
    }
  }
  move_left() {
    if (this.x > 0) {
      this.x = this.x - 4;
    }
  }
}