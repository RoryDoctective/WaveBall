/* 
will use class infinied In allClass.js

var c(component);'/ 

(call setup once)
(calls draw many times())
*/

let b;
let m;
let c;

function setup() {
  b = new Base();
  b.createCan()
  m = new Move();
  c = new Cover();
  rectMode(CENTER);
}


function draw() {
  b.setColour();
  b.drawRect();
  m.draw();
  m.incrementT();
  c.draw();
}

function changeRunTime(){
  let runningSpeed = document.getElementById("speedRun").value;
};





document.addEventListener("DOMContentLoaded", function(){
    var cc = document.getElementById("colour");
    function changeColour(event){
  let colour = document.getElementById("colour").value;
  b.setColour(colour);
    }
    
    cc.addEventListener("change", changeColour);

    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
  event.preventDefault()});
});


