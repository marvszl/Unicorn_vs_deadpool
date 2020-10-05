class Plattform_u {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;


  }
  show() {
    stroke(255);
    
    vertex(this.x, this.y);
  
  }
  move() {
    this.x--;
  }

  
  trifft(fahrer) {
    if (dist(this.x, this.y, fahrer.x, fahrer.y) < 20 && this.x == fahrer.x || this.y < fahrer.y && this.x == fahrer.x) {
      getroffen = true;
      return getroffen;
    }
  }
  trifft_landschaft(schuss){
    if(dist(this.x,this.y,schuss.x,schuss.y)<10){
      hit_landschaft_u = true;
      schuesse.splice(schuss,1);
      this.y=this.y+20;
      return hit_landschaft_u;
      
    }
  }
}