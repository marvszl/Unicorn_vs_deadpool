class gegner {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x - 1;


  }

  show() {

    push();

    image(enemy, this.x + 10, this.y - 10, 20, 20);
    pop();
  }
  trifft_gegner(schuss) {
    if (dist(this.x, this.y + 10, schuss.x, schuss.y) < 20) {
      hit_gegner = true;
      this.x = 0;
      schuesse.splice(schuss, 1);

      return hit_gegner;

    }
  }
  trifft(fahrer) {
    if (dist(this.x, this.y, fahrer.x, fahrer.y) < 15) {
      getroffen = true;
      //noLoop();
      //schuesse.splice(schuss,1);

      return hit_gegner;

    }
  }

}