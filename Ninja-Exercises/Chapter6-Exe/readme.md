```javascript
function Shape(pEdge) {
    // this.pEdge=pEdge;
    this.pEdge = function() {
        console.log(this.coordinates)
    }
    this.fnDisplay = function() {
        console.log(this.name);
    }
}

function Triangle(name, coordinates) {
    this.name = name;
    this.fnArea = function() {
        //use Shoelace formula
    }
    this.fnPerimeter = function() {

        //	d((this.coordinates[0],this.coordinates[1]))+d((this.coordinates[2],pEdge[3]))+d((pEdge(4,pEdge[6]))
    }

}

function Quadrilateral() {
    this.fnArea = function() {

    }
    this.fnPerimeter = function() {
        //this.coordinates[0]
        //	d((pEdge[0],pEdge[1]))+d((pEdge[2],pEdge[3]))+d((pEdge(4,pEdge[6]))
    }
}

function Square(name, coords) {
    this.name = name;
    this.coordinates = coords;
}

Triangle.prototype = new Shape();
Quadrilateral.prototype = new Shape();
Square.prototype = new Quadrilateral();

// inheritence should come before creating instances

//var shape=new Shape();
var triangle = new Triangle("name", 0, 9);
//var quadrilateral= new Quadrilateral();
var square = new Square("name", 0, 1, 2, 3, 4, 5);

console.log(square.pEdge());
console.log(square)
```
