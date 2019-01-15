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


  
  settings.changeSpeed();
  //frameRate(10);
  console.log(settings.fps);
  console.log( frameRate() );
  

  if( settings.judge1 === false && settings.judge2 === false){
    base.setColour(); // random 
  }else if ( settings.judge1 === true) {
    base.setColour1(); // fixed defult 
  }else{

  };
  

  base.drawRect();
  base.draw();
  base.incrementT();
  cover.draw();
}





document.addEventListener("DOMContentLoaded", function(){
  // prevent default
  let y = document.getElementById("theme");
  y.addEventListener("submit", function (event){ event.preventDefault() });

  // speed controls
  function changeRunTime(event){
    let zz = document.getElementById("inputSpeed").value;
    settings.setSpeed(zz);
  };

  let x = document.getElementById("inputSpeed");
  x.addEventListener("change", changeRunTime);

  // colour controls
  // first 2
  function changeColorFunction(event){
    let colorOption0 = document.getElementById("color0").checked;
    if (colorOption0){
      settings.judge1 = false
    }else{
      settings.judge1 = true
    };
  };

  let colorElement0 = document.getElementById("color0");
  colorElement0.addEventListener("change", changeColorFunction);
  let colorElement1 = document.getElementById("color1");
  colorElement1.addEventListener("change", changeColorFunction);
  

  // the range bar
  let PcolorEle1 = document.getElementById("Pcolor1");
  PcolorEle1.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.hue1 = PcolorEle1.value;
  });

  let PcolorEle2 = document.getElementById("Pcolor2");
  PcolorEle2.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.br1 = PcolorEle2.value;   
  });


  let PcolorEle3 = document.getElementById("Pcolor3");
  PcolorEle3.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.hue2 = PcolorEle3.value;
  });


  let PcolorEle4 = document.getElementById("Pcolor4");
  PcolorEle4.addEventListener("change", function(){
    document.getElementById("color2").checked = true;
    base.br2 = PcolorEle4.value;
  });


})






