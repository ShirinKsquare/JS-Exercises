```javascript
/* Chapter6 Exercise 1 */


function d(points) {

    if (points.length == 4)
        return (Math.sqrt(Math.pow(points[0] - points[2], 2) + Math.pow(points[1] - points[3], 2)));

    else
        return "incompatible for 2D";
}


//-------------------------------------------------------

function shoelace(points) {
    var sum = 0;
    for (var i = 0; i < (points.length) / 2; i++) {
        sum = sum + (points[i] * points[i + 3] - points[i + 1] * points[i + 2]);
    }
    return ((Math.abs(sum)) / 2);
}

//console.log(d([0,1,0,0]))
//console.log(shoelace([2,1,4,5,7,8]));


//--------------------------------------------------------
function Shape(pEdge) {
    this.pEdge = function() {
        console.log(this.coordinates);
    }
    this.fnDisplay = function() {
        console.log(this.name);
    }
}

function Triangle(name, coordinates) {
    this.name = name;
    this.coordinates = coordinates;
    this.fnArea = function() {
        return shoelace(this.coordinates);
    }
    this.fnPerimeter = function() {

        return d([this.coordinates[0], this.coordinates[1], this.coordinates[2], this.coordinates[3]]) +
            d([this.coordinates[2], this.coordinates[3], this.coordinates[4], this.coordinates[5]]) +
            d([this.coordinates[4], this.coordinates[5], this.coordinates[0], this.coordinates[1]]);
    }
    Shape.call(this, this.coordinates);

}

function Quadrilateral() {
    // this.fnArea=function(){
    // 	return shoelace(this.coordinates);

    // }
    // this.fnPerimeter=function(){

    // 	return 	d([this.coordinates[0],this.coordinates[1],this.coordinates[2],this.coordinates[3]])+
    // 		    d([this.coordinates[2],this.coordinates[3],this.coordinates[4],this.coordinates[5]])+
    // 		    d([this.coordinates[4],this.coordinates[5],this.coordinates[6],this.coordinates[7]])+
    // 		    d([this.coordinates[6],this.coordinates[7],this.coordinates[0],this.coordinates[1] ]);
    // }
    Shape.call(this, this.coordinates)
}

function Square(name, coords) {
    this.name = name;
    this.coordinates = coords;
    Quadrilateral.call(this);
}


// prototype chain
Quadrilateral.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Quadrilateral.prototype);
Triangle.prototype = Object.create(Shape.prototype);

Quadrilateral.prototype.fnArea = function() {
    return shoelace(this.coordinates);

}
Quadrilateral.prototype.fnPerimeter = function() {

        return d([this.coordinates[0], this.coordinates[1], this.coordinates[2], this.coordinates[3]]) +
            d([this.coordinates[2], this.coordinates[3], this.coordinates[4], this.coordinates[5]]) +
            d([this.coordinates[4], this.coordinates[5], this.coordinates[6], this.coordinates[7]]) +
            d([this.coordinates[6], this.coordinates[7], this.coordinates[0], this.coordinates[1]]);
    }
    // Triangle.prototype=new Shape();
    // Quadrilateral.prototype=new Shape();
    // Square.prototype=new Quadrilateral();

// // inheritence should come before creating instances




// //var shape=new Shape();
var triangle = new Triangle("mytriangle", [0, 1, 2, 3, 4, 5]);
// //var quadrilateral= new Quadrilateral();
var square = new Square("mysquare", [0, 0, 1, 0, 1, 1, 0, 1]);

console.log(triangle.coordinates);
console.log(square)
console.log(square.fnPerimeter());
console.log(Quadrilateral)
```
