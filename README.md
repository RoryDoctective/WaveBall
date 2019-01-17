# Double colored spinning top

## Outline of the whole project. 
1. **Base_Cover_ControlThePage.js file contains all four classes been used. They are Base, Cover, controlThePage and Parent. Parent is a parent class, and it has two child classes which are Base and Cover.** 
1. **Index.js file compose of two parts. The p5 part contains function setup() and draw() using classes be defined, and the DOM part explains all how value of be changed when user interact with the index html.**
1. **Index.html file contains a form with different input type which allows users input. It is an example of implement everything.**
1. **An ESLint result file in html format is included. **
The folder stands independently. (p5.js inside the folder and don't need internet.)

**Original code's License:**
[![License: CC BY-SA 3.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/3.0/)


### Base_Cover_ControlThePage.js
#### The Parent class
The Parent class contains two variables, widthGeneral and heightGeneral. It also contains two get methods to get them. They are not supposed to change inside the program and Both of the Base and Cover Classes will have those properties.

#### The Base class
The Base class is a large class extends form the Parent class. The contain 14 variables in total, 10 functions and 13 getter and setter functions. Both widthGeneral and heightGeneral are inherited for the parent classes. The base class will produce a graph with a background with two colors, and 10 black bars waving up and down according to time. 

##### How to use it?
let variable_name = new Base(widthGeneral, heightGeneral, hue1, br1, hue2, br2, canvWid, canvHei,saturation, rectNum, angle, angleIndex, t);
All inputs are types of "number"

##### Setup related
2 variables, 1function and 2 get and set function related.
* The canvWid variable is responsible for the width of the canvas, with default value 400. 
* The canvHei variable is responsible for the height of the canvas, with default value 400.
* createCan() function create the canvas according to the canvWid and canvHei. It will be called in the setup function in the index.js. It will only be called once. 
* Get canvWid() and get canvHei(): Both variables¡¯ value needs be returned in the index.js file.

##### Colour related
5 variables together control the color of the waves in the ball.
They are associate with 3 functions: setColour(), setColour1() and setColour2().
8 getter and setter function related.

* The hue1 variable is responsible for the hue of the upper wave, with default value 0.
* The br1 variable is responsible for the brightness of the upper wave, with default value 100.
* The hue2 variable is responsible for the hue of the lower wave, with default value 180.
* The br2 variable is responsible for the brightness of the upper wave, with default value 100.
* The saturation variable is responsible for the saturation of the upper and lower wave, with default value 100.
* setColour() function will firstly change the color mode into HSB, and then randomly change the value of hue1, br1, hue2, and br2 correspond to the t(stand for time) variable. This function will be called when the page loaded as a default color function or the user chose the first color option in the html page.
* setColour1() function will firstly change the color mode into HSB, and set the value of hue1, br1, hue2, and br2 back to default value. Thus, the upper wave will be red, and the lower wave will be blue. It won't change correspond to time. The function will be called when user chose the second color option in html page.
* setColour2() function will just change the color mode into HSB. The function will be called when user chose the third color option in html page. 
* Hue1, br1, hue2, and br2 will be change in the index.js page. In order to call them and modify the value of them, they all have according get and set methods. They are get hue1(), set hue1(), get br1(), set br1(), get hue2(), set hue2(), get br2(), set br2(). Inside reach set method, it will check the type of the input value be "number", otherwise the input can't change the value.

##### Colour related
4 variables and 3function related.
* The rectNum variable is responsible for number waving black bars, with default value 10.
* Both widthGeneral and heightGeneral variables are inherited from the parent classes, both with default value of 400.
* The t variable is response for the speed of both the 10 waving black bars and the color changing of the background rectangle.
* drawRect() function will draw two rectangles without stroke. The two rectangles spit the canvas equally into upper rectangle and lower rectangle. Colored each of them according to the value set by the hue1, br1, hue2, br2 and saturation. This function will be called when the page loaded as a default.
* draw() function will change the color mode into RBG. Draw 10 black bars and arranged them in a shape of a down arrow. When the t variable increase, those bars will wave up and down to form the waves. This function will be called when the page loaded as a default.
* increment() function will simply increase the variable t by 1. Then rectangles created in drawRect()function can change colors and bars created in draw() function can wave. This function will be called when the page loaded as a default.

##### Rotation related
2 variables, 3function and 3 get and set function related.
* The angle variable is response for the time for the rotation, with default value 0.
* The angleIndex variable is responsible for the number of degrees increase per unit time, in other term, speed of the rotation, with default value 0.01.
* drawRectRotate() function generate the same output as drawRect(). The reason it exists is in order to make graph rotate, we must do translate, which change the origin of the canvas. This function changes the origin to where it originally at when drawing rectangles. This function will be called when the user enables the rotation option.
* drawRotate() function generate the same output as draw(). The reason behinds is the same as the drawRectRotate() function. This function will be called when the user enables the rotation option.
* incrementA() function will increase the value of the angle variable by the value of the angleIndex variable. Increase the speed of rotating. This function will be called when the user enters a number into the bar of "Rotating speed options".
* Both angle and angleIndex variable has its own get method, because the values will be returned in the index.js file. The angleIndex variable have a set function, because that allow the user input to change the value of that variable. Inside set method, it will check the type of the input value be "number", otherwise the input can't change the value.

#### The Cover class
The Cover class is a relatively small class extends form the Parent class. It contain 6 variables in total, 1 function without getter and setter functions. Both widthGeneral and heightGeneral are inherited for the parent classes. The Cover class will produce a graph that first draw a white rectangle as big as the canvas, and then hollow it out with a circle. After that, draw an ellipse with black stroke the emphasize the hollowed circle. 

##### How to use it?
let variable_name = new Cover(widthGeneral, heightGeneral, circleVertexNum, R, circleColour, circleWid);
All inputs are types of "number".

* The circleVertexNum variable represent the 360 degree of a circle, and it will be used when drawing the hollowed-out white circle. Of course, with default value 360.
* The R variable represent the radiance of a circle in other term, with default value 180.
* The circleColour variable store the number which indicate the color of the stoke of the ellipse, with default value 0.
* The variable circleWid store the number which indicate the width of the stoke of the ellipse, with default value 10.
* draw() function will produce a graph that first draw a white rectangle as big as the canvas, and then hollow it out with a circle. After that, draw an ellipse with black stroke the emphasize the hollowed circle. This function will be called when the page loaded as a default.

#### The controlThePage class
The controlThePage class. It contains 3 variables in total, 6 function without getter and setter functions. As it has been named, it is a class of logical switches. They control which program should be execute in index.js. Thus, each variable has a get and a set function. 

##### How to use it?
let variable_name = new controlThePage(judge1, judge2, rotate);
All inputs are types of "boolean".

* The judge1 variable represent the on or off of one-colour switch, with default value false.
* The judge2 variable represent the on or off of another colour switch, with default value false.(judge1 and judge2 work together to determine which way of coloring should be used. judge1 and judge2 both value to false indicate the random changing color mode, judge1 value to true indicate the fixed two colour mode, else are personalize mode)
* The rotate variable represents the on or off of the rotation switch, with default value false. (when rotate value to false means no rotation, vice versa)
* Each variable has its own get and set function. Thus we got get judge1(), set judge1(), get judge2(), set judge2(), get rotate(), set rotate(). Inside set method, it will check the type of the input value be "boolean", otherwise the input can¡¯t change the value.
