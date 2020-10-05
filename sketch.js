let schuesse = [];
let gegner_array = [];
let plattform_u = [];
let plattform_o = [];
let x, y, w, h;
let noiseoff = 0;
let speed = 2;
let abstand = 500;
let getroffen = false
let zaehler = 0;
let zwischenspeicher;
let verzoegerung = 10;
let schus = true;
let hit_landschaft_u = false;
let hit_landschaft_o = false;
let hit_gegner = false;
let unicorn;
let enemy;
let landschaft_u_hit_vorher;
let landschaft_u_hit_nachher;
let landschaft_o_hit_vorher;
let landschaft_o_hit_nachher;

function setup() {
  createCanvas(700, 700);
  stroke(255);

  noiseSeed(400);
  fahrer = new fahrer(40, width / 2);




}

function preload() {
  unicorn = loadImage('einhorn.jpg');
  enemy = loadImage('enemy.jpg');

}

function draw() {
  if (!getroffen) {
    zaehler++;

  } else {
    noLoop();
  }
  if (frameCount % 500 == 0) {
    abstand = abstand - 20;
    //gegner_array.push(new gegner(width,plattform_o[200].y+abstand/2))
  }
  if (abstand <= 20) {
    abstand = 20;
  }

  if (frameCount % speed == 0) {
    x = width;
    noiseoff = noiseoff + 0.015
    y = noise(noiseoff) * height + height / 3;
    w = abstand;

    h = random(3, 15);
    plattform_u.push(new Plattform_u(x, y, w, h));
    plattform_o.push(new Plattform_o(x, y - w, w, h));
    if (frameCount % 150 == 0) {
      gegner_array.push(new gegner(width, y - random(abstand)))
    }

  }

  background(0);
  //Landschaft anzeigen
  noFill();
  stroke(0, 255, 0);
  beginShape();
  strokeWeight(3);

  fill(128, 68, 0);
  vertex(width, height);
  if (!getroffen) {
    for (i = plattform_u.length - 1; i > 0; i--) {
      if (plattform_u[i].x + plattform_u[i].w < 0) {

        plattform_u.splice(i, 1);
      }
      plattform_u[i].move();
      plattform_u[i].show();
      plattform_u[i].trifft(fahrer);
      for (j = schuesse.length - 1; j > 0; j--) {
        plattform_u[i].trifft_landschaft(schuesse[j]);
        if( hit_landschaft_u==true && plattform_u[i].x<width-2){
          landschaft_u_hit_vorher=i-1;
          landschaft_u_hit_nachher=i+1;
          plattform_u[landschaft_u_hit_vorher].y=plattform_u[landschaft_u_hit_vorher].y+20;
          plattform_u[landschaft_u_hit_nachher].y=plattform_u[landschaft_u_hit_nachher].y+20;
          hit_landschaft_u=false;
        }
      }

    }
    vertex(0, width)
    endShape();
    beginShape();
    vertex(width, 0);

    for (i = plattform_o.length - 1; i > 0; i--) {
      if (plattform_o[i].x + plattform_o[i].w < 0) {
        plattform_o.splice(i, 1);
      }
      plattform_o[i].move();
      plattform_o[i].show();
      plattform_o[i].trifft(fahrer);
      for (j = schuesse.length - 1; j > 0; j--) {
        plattform_o[i].trifft_landschaft(schuesse[j]);
        if( hit_landschaft_o==true&& plattform_o[i].x<width-2){
          landschaft_o_hit_vorher=i-1;
          landschaft_o_hit_nachher=i+1;
          plattform_o[landschaft_o_hit_vorher].y=plattform_o[landschaft_o_hit_vorher].y-20;
          plattform_o[landschaft_o_hit_nachher].y=plattform_o[landschaft_o_hit_nachher].y-20;
          hit_landschaft_o=false;
        }
               
      }
    }

  }
  vertex(0, 0);
  endShape();
  //Spieler anzeigen

  fahrer.show();
  // gegner anzeigen

  for (j = gegner_array.length - 1; j > 0; j--) {
    gegner_array[j].show();
    gegner_array[j].move();
    for (i = schuesse.length - 1; i > 0; i--) {
      gegner_array[j].trifft_gegner(schuesse[i]);
    }
    if (hit_gegner) {
      gegner_array.splice(j, 1);
      zaehler = zaehler + 50;
      hit_gegner = false;
    }

    console.log(gegner_array.length);
  }
  for (j = gegner_array.length - 1; j > 0; j--) {

    gegner_array[j].trifft(fahrer);
    if (gegner_array[j].x < 0) {
      gegner_array.splice(j, 1);
    }
  }
  // berechnen der Verzögerung
  if (frameCount - zwischenspeicher <= verzoegerung) {
    schus = false;
  } else {
    schus = true;
  }


  //Einlesen der Tasten
  if (keyIsDown(UP_ARROW)) {
    fahrer.move_up();
  }
  if (keyIsDown(DOWN_ARROW)) {
    fahrer.move_down();
  }
  if (keyIsDown(LEFT_ARROW)) {
    fahrer.move_left();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    fahrer.move_right();
  }
  if (keyIsDown(32) && schus == true) {
    schuesse.push(new schuss(fahrer.x, fahrer.y));
    zwischenspeicher = frameCount;
    schus = false;
    zaehler = zaehler - 10;
    //console.log(schuesse);
  }




  for (i = schuesse.length - 1; i > 0; i--) {

    schuesse[i].move();
    schuesse[i].show();
    if (schuesse[i].x > width) {
      schuesse.splice(i, 1);
    }
  }
  //Anzeige der Punkte
  textSize(32);
  text(zaehler, 10, 30);

  //console.log(schuesse);
}