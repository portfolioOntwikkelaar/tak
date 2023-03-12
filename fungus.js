class Fungus {


  constructor(x, y, angle) {


	  this.angleChangeAmt = radians(2);
	  this.speed =          0.8;

	  this.chanceSplit =    2.3;
	  this.splitAngle =     radians(28);


    this.x =     x;
    this.y =     y;
    this.prevX = x;
    this.prevY = y;


    this.angle = angle || random(0, TWO_PI);


	  this.distFromCenter;
	  this.age = 0;
  }


  update() {


    this.age += 1.4;


    this.distFromCenter = dist(width/2,height/2, this.x,this.y);


    this.angle += random(-this.angleChangeAmt, this.angleChangeAmt);
    this.prevX = this.x;
    this.prevY = this.y;
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;


    if (random(180) < this.chanceSplit) {
      let f = new Fungus(this.x, this.y, this.angle+this.splitAngle);
      fungi.push(f);
      this.angle -= this.splitAngle;
    }
  }


  
  display() {
    stroke(299,245,235, 60);
    line(this.prevX, this.prevY, this.x, this.y);
  }
}
