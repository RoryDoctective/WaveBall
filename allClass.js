/* 
Only defind Class here
*/

//Getters are methods that get and return the internal properties of an object.



class Parent{
	constructor(widthGeneral, heightGeneral,t){
		this.widthGeneral = widthGeneral || 400;
		this.heightGeneral = heightGeneral || 400;
		this.t = t || 0 ;
	};
}

/*
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}
*/

class Base extends Parent{
	constructor(widthGeneral, heightGeneral, t, hue1, br1, hue2, br2, canvWid, canvHei,saturation, rectNum, rectW){
		super(widthGeneral, heightGeneral, t);
		this.hue1 = hue1 || 0;
		this.br1 = br1 || 100;
		this.hue2 = hue2 || 180;
		this.br2 = br2 || 100;
		this.canvWid = canvWid || 400;
		this.canvHei = canvHei || 400;
		this.saturation = saturation || 100;
		this.rectNum = rectNum || 10;
		this.rectW = 400 / rectNum || 40;
	};

	createCan(){
		createCanvas(this.canvWid , this.canvHei);
	};	

	setColour(){
		colorMode(HSB, 360, 100, 100);
		
		if (sin(radians(3 * 20 + this.t)) === -1) {
    		this.hue1 = random(360);
    		this.br1 = random(50, 100);
    	}

 	 	if (sin(radians(3 * 20 + this.t)) === 1) {
	    	this.hue2 = random(360);
    		this.br2 = random(50, 100);
    	}
	};

	setColour1(){
		colorMode(HSB, 360, 100, 100);
		this.hue1 = 0
		this.br1 = 100
		this.hue2 = 180
		this.br2 = 100
	};

	drawRect(){
		noStroke();
		fill(this.hue1, this.saturation, this.br1); 
		rect(this.widthGeneral / 2, this.heightGeneral / 4, this.widthGeneral, this.heightGeneral / 2);
		fill(this.hue2, this.saturation, this.br2);
		rect(this.widthGeneral / 2, this.heightGeneral * 3 / 4, this.widthGeneral, this.heightGeneral / 2);
	};

	draw(){
		colorMode(RGB, 255, 255, 255);
  		fill(0, 0, 0);
		for (var i = 0; i < this.rectNum; i++) {
    		rect(i * this.rectW + this.rectW / 2, this.heightGeneral / 2 + 100 * sin(radians(i * 20 + this.t)), this.rectW, this.heightGeneral * 0.8);
  		}
	};

	incrementT(){
		this.t++;
	};	

}
/*
class Move extends Parent{
	constructor(widthGeneral, heightGeneral, t, rectNum, rectW){
		super(widthGeneral, heightGeneral, t);
		this.rectNum = rectNum || 10;
		this.rectW = 400 / rectNum || 40;
	};

	draw(){
		colorMode(RGB, 255, 255, 255);
  		fill(0, 0, 0);
		for (var i = 0; i < this.rectNum; i++) {
    		rect(i * this.rectW + this.rectW / 2, this.heightGeneral / 2 + 100 * sin(radians(i * 20 + this.t)), this.rectW, this.heightGeneral * 0.8);
  		}
	};

	incrementT(){
		this.t++;
	};
}
*/

class Cover extends Parent{
	constructor(widthGeneral, heightGeneral, t, circleVertexNum, R, circleColour, circleWid){
		super(widthGeneral, heightGeneral, t);
		this.circleVertexNum = circleVertexNum || 360;
		this.R = R || 180;
		this.circleColour = circleColour || 0;
		this.circleWid = circleWid || 10;
	};

	draw(){
		fill(255);
		push();
  		translate(this.widthGeneral / 2, this.heightGeneral / 2); // 现在corrodinate的（0，0）= （200，200），这一步必须在beginshap前
  		beginShape();
  		vertex(-this.widthGeneral / 2, -this.heightGeneral / 2);
  		vertex(this.widthGeneral / 2, -this.heightGeneral / 2);
  		vertex(this.widthGeneral / 2, this.heightGeneral / 2);
  		vertex(-this.widthGeneral / 2, this.heightGeneral / 2);
  		beginContour();
  		for (var j = this.circleVertexNum; j > 0; j--) {
    		vertex(this.R * cos(radians(360 * j / this.circleVertexNum)), this.R * sin(radians(360 * j / this.circleVertexNum)));
  		}
  		endContour();
  		endShape(CLOSE);
  		pop();

		stroke(this.circleColour);
  		strokeWeight(this.circleWid);
  		noFill();
  		ellipse(this.widthGeneral / 2, this.heightGeneral / 2, this.R * 2, this.R * 2);
	};
}



class controlThePage{
    constructor(fps, judge1, judge2){
	this.fps = fps || 60;
	this.judge1 = judge1 || false;
	this.judge2 = judge2 || false;
    };

    setSpeed(fps){
	this.fps = fps;
    };
    
    changeSpeed(){
    frameRate(this.fps)
    };

}
