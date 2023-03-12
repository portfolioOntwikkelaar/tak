let maxAge = 100;

let paused = false;

let fungi;


function setup() {
  createCanvas(windowWidth, windowHeight);


  background("darkRed");


  fungi = [];
  for (let i=0; i<3; i++) {
    let f = new Fungus(width/2, height/2);
    fungi.push(f);
  }
}


function draw() {


  if (!paused) {


    for (let i=fungi.length-1; i>=0; i-=5) {


      let f = fungi[i];


      f.update();
      if (f.distFromCenter >= height/3 || f.age > maxAge) {
        fungi.splice(i, 1);
      }


      f.display();
    }


    if (frameRate < 20) {
      setup();
    }
  }
}


function keyPressed() {

  if (key === 'z') {
    paused = !paused;
  }


  else {
    setup();
  }
}
