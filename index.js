let base;
let cover;
let settings;


function setup() {
  base = new Base();
  cover = new Cover();
  settings = new controlThePage();
  rectMode(CENTER);
  base.createCan();
}


function draw() {

  if( settings.judge1 === false && settings.judge2 === false){
    base.setColour(); // random 
  }else if ( settings.judge1 === true ) {
    base.setColour1(); // fixed defult 
  }else{
    base.setColour2(); // fixed input value
  }  
  
  if( settings.rotate === false){
    base.drawRect();
    base.draw();

  }else{
    push();
    translate( base.canvWid / 2, base.canvHei / 2 );
    rotate(base.angle);
    base.drawRectRotate();
    base.drawRotate();
    pop();    
  }

  base.incrementA(); 
  base.incrementT();
  cover.draw();
}



///////// DOM 
document.addEventListener("DOMContentLoaded", function(){
  // prevent default
  let y = document.getElementById("theme");
  y.addEventListener("submit", function (event){ event.preventDefault() });

  // speed controls
  function changeRunTime(){
    document.getElementById("Rotation2").checked = true;
    changeRotationFunction();
    base.angleIndex = Number(document.getElementById("inputSpeed").value);
  }

  let x = document.getElementById("inputSpeed");
  x.addEventListener("change", changeRunTime);



  // colour controls
  // first 2 options
  function changeColorFunction(){
    let colorOption0 = document.getElementById("color0").checked;
    if (colorOption0){
      settings.judge1 = false; 
      settings.judge2 = false;
    }else{
      settings.judge1 = true; 
      settings.judge2 = false;
    }
  }

  let colorElement0 = document.getElementById("color0");
  colorElement0.addEventListener("change", changeColorFunction);
  let colorElement1 = document.getElementById("color1");
  colorElement1.addEventListener("change", changeColorFunction);
  

  // the last option->4 range bars
  let PcolorEle1 = document.getElementById("Pcolor1");
  PcolorEle1.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.hue1 = Number(PcolorEle1.value);
    settings.judge1 = false;
    settings.judge2 = true;
  });

  let PcolorEle2 = document.getElementById("Pcolor2");
  PcolorEle2.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.br1 = Number(PcolorEle2.value);   
    settings.judge1 = false;
    settings.judge2 = true;
  });


  let PcolorEle3 = document.getElementById("Pcolor3");
  PcolorEle3.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.hue2 = Number(PcolorEle3.value);
    settings.judge1 = false;
    settings.judge2 = true;
  });


  let PcolorEle4 = document.getElementById("Pcolor4");
  PcolorEle4.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.br2 = Number(PcolorEle4.value);
    settings.judge1 = false;
    settings.judge2 = true;
  });


  // rotation controls
  function changeRotationFunction(){
    let rotationOption1= document.getElementById("Rotation1").checked;
    if (rotationOption1){
      settings.rotate = false; 
    }else{
      settings.rotate = true; 
    }
  }

  let rotationEle1 = document.getElementById("Rotation1");
  rotationEle1.addEventListener("change", changeRotationFunction);

  let rotationEle2 = document.getElementById("Rotation2");
  rotationEle2.addEventListener("change", changeRotationFunction);

})





