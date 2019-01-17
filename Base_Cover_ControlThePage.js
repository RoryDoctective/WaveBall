
class Parent{
	constructor(widthGeneral, heightGeneral,t){
		this._widthGeneral = widthGeneral || 400;
		this._heightGeneral = heightGeneral || 400;
		
	}

	get widthGeneral(){
		return this._widthGeneral;
	}

	get heightGenera(){
		return this._heightGeneral;
	}

}



class Base extends Parent{
	constructor(widthGeneral, heightGeneral, hue1, br1, hue2, br2, canvWid, canvHei,saturation, rectNum, angle, angleIndex,t){
		super(widthGeneral, heightGeneral);
		this._hue1 = hue1 || 0;
		this._br1 = br1 || 100;
		this._hue2 = hue2 || 180;
		this._br2 = br2 || 100;
		this._canvWid = canvWid || 400;
		this._canvHei = canvHei || 400;
		this.saturation = saturation || 100;
		this.rectNum = rectNum || 10;
		this.rectW = 400 / rectNum || 40;
		this._angle = angle || 0;
		this._angleIndex = angleIndex || 0.01;
		this.t = t || 0;
	}

	createCan(){
		createCanvas(this.canvWid , this.canvHei);
	}	

	setColour(){
		colorMode(HSB, 360, 100, 100);
		
		if (sin(radians(3 * 20 + this.t)) === -1) {
			this._hue1 = random(360);
			this._br1 = random(50, 100);
		}

		if (sin(radians(3 * 20 + this.t)) === 1) {
			this._hue2 = random(360);
			this._br2 = random(50, 100);
		}
	}

	setColour1(){
		colorMode(HSB, 360, 100, 100);
		this._hue1 = 0
		this._br1 = 100
		this._hue2 = 180
		this._br2 = 100
	}

	setColour2(){
		colorMode(HSB, 360, 100, 100);

	}

	drawRect(){
		noStroke();
		fill(this._hue1, this.saturation, this._br1); 
		rect(this._widthGeneral / 2, this._heightGeneral / 4, this._widthGeneral, this._heightGeneral / 2);
		fill(this._hue2, this.saturation, this._br2);
		rect(this._widthGeneral / 2, this._heightGeneral * 3 / 4, this._widthGeneral, this._heightGeneral / 2);
	}

	drawRectRotate(){
		noStroke();
		fill(this._hue1, this.saturation, this._br1); 
		rect(this._widthGeneral / 2 - this.canvWid / 2, this._heightGeneral / 4 - this.canvHei / 2, this._widthGeneral, this._heightGeneral / 2);
		fill(this._hue2, this.saturation, this._br2);
		rect(this._widthGeneral / 2 - this.canvWid / 2, this._heightGeneral * 3 / 4 - this.canvWid / 2, this._widthGeneral, this._heightGeneral / 2);
	}	

	draw(){
		colorMode(RGB, 255, 255, 255);
		fill(0, 0, 0);
		for (var i = 0; i < this.rectNum; i++) {
			rect(i * this.rectW + this.rectW / 2, this._heightGeneral / 2 + 100 * sin(radians(i * 20 + this.t)), this.rectW, this._heightGeneral * 0.8);
		}
	}

	drawRotate(){
		colorMode(RGB, 255, 255, 255);
		fill(0, 0, 0);
		for (var i = 0; i < this.rectNum; i++) {
			rect(i * this.rectW + this.rectW / 2 - this.canvWid / 2, this._heightGeneral / 2 + 100 * sin(radians(i * 20 + this.t)) - this.canvHei / 2, this.rectW, this._heightGeneral * 0.8);
		}
	}

	incrementT(){
		this.t++;
	}

	incrementA(){
		this._angle += this.angleIndex;
	}


	// add the getters and setters for hue1, br1, hue2, br2 and angleIndex.
	get hue1(){
		return this._hue1;
	}

	set hue1(aNumber){
		if( typeof aNumber === 'number'){
			this._hue1 = aNumber; 
		}
	}

	get hue2(){
		return this._hue2;
	}

	set hue2(aNumber){
		if( typeof aNumber === 'number'){
			this._hue2 = aNumber; 
		}
	}

	get br1(){
		return this._br1;
	}

	set br1(aNumber){
		if( typeof aNumber === 'number'){
			this._br1 = aNumber; 
		}
	}

	get br2(){
		return this._br2;
	}

	set br2(aNumber){
		if( typeof aNumber === 'number'){
			this._br2 = aNumber; 
		}
	}

	get angleIndex(){
		return this._angleIndex;
	}

	set angleIndex(aNumber){
		if( typeof aNumber === 'number'){
			this._angleIndex = aNumber; 
		}
	}

	// add only getter for canWid, canvHei and angle

	get canvWid(){
		return this._canvWid;
	}

	get canvHei(){
		return this._canvHei;
	}

	get angle(){
		return this._angle;
	}
}



class Cover extends Parent{
	constructor(widthGeneral, heightGeneral, circleVertexNum, R, circleColour, circleWid){
		super(widthGeneral, heightGeneral);
		this.circleVertexNum = circleVertexNum || 360;
		this.R = R || 180;
		this.circleColour = circleColour || 0;
		this.circleWid = circleWid || 10;
	}

	draw(){
		noStroke();
		fill(255); //white
		push();
		translate(this._widthGeneral / 2, this._heightGeneral / 2); // 现在corrodinate的（0，0）= （200，200），这一步必须在beginshap前
		beginShape();
		vertex(-this._widthGeneral / 2, -this._heightGeneral / 2);
		vertex(this._widthGeneral / 2, -this._heightGeneral / 2);
		vertex(this._widthGeneral / 2, this._heightGeneral / 2);
		vertex(-this._widthGeneral / 2, this._heightGeneral / 2);
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
		ellipse(this._widthGeneral / 2, this._heightGeneral / 2, this.R * 2, this.R * 2);
	}

}



class controlThePage{
	constructor(judge1, judge2, rotate){
	this._judge1 = judge1 || false;
	this._judge2 = judge2 || false;
	this._rotate = rotate || false;
	//console.log(this.fps)
	}

    // add the getters and setters for judge1, judge2, rotate.
	get judge1(){
		return this._judge1;
	}

	set judge1(logic){
		if( typeof logic === 'boolean'){
			this._judge1 = logic;
		}
	}

	get judge2(){
		return this._judge2;
	}

	set judge2(logic){
		if( typeof logic === 'boolean'){
			this._judge2 = logic;
		}
	}

	get rotate(){
		return this._rotate;
	}

	set rotate(logic){
		if( typeof logic === 'boolean'){
			this._rotate = logic;
		}
	}
}


