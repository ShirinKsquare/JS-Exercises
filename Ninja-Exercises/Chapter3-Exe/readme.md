
 Exercise1
 ```javascript
  function reverseArray(array){
  		var newarray=[];
 			for (var i=array.length-1;i>=0;i--){
 		  		newarray.push(array[i]);
 			}
 			return newarray;
 	}
```
```javascript
 	function mult(x,y){
 	  var array=[];
 	  var i=0;
 	  var result=x*y;
 	   do{
 	   var div = Math.floor(result/13);
 	   var rem = result % 13;
 	   array[i]=rem;
 	   result=div;
 	   i++;
 	 	}while(result!=0);
 	 	// return i;
 	 //return array.join("\n");
 	 array=reverseArray(array)
 	 return array.join(" ");
 	}
output:
// console.log(mult(6,8));
```

// // function foo() {
// //   for (var i = 0; i < arguments.length; i++) {
// //     alert(arguments[i]);
// //   }
// // }

Exercise 2 
```javascript
 function add(){
 	var sum=0;
 	for (var i=0;i<arguments.length;i++){
 		sum=sum+arguments[i];
 	}
 	return sum;
 }
 
output: // console.log(add(1,2)+add(2,3,9));
```

 Exercise 3
```javascript
 function mult(){
 	var result=1;
 	for (var i=0;i<arguments.length;i++ ){
 		result=result*arguments[i];
 	}
 	return result;
 }

output: // console.log(mult(2,2,5))
```
```javascript
 function fac(N){
 	if ((N==1) || (N==0)){
 		return 1;
 	}
 	else{
 		return N*fac(N-1);
 	}
 }
output: // console.log(fac(3));
```
```javascript
  var MyMath={
  	addition: add,
  	multiplication: mult,
  	factorial: fac
  }

 output: //console.log(MyMath.addition(1,2,3));
 output: //console.log(MyMath.factorial(5));
```
 Exercise 4
```javascript
 function Image(data,width,height,name){
 	this.data=data;
 	this.width=width;
 	this.height=height;
 	this.name=name;
 	console.log("hi");
 	this.pixelData=function(){}
 }
 output:
 //var data=new Array(40*40);
 //var img = new Image(data, 40,40,'myImage');

 //console.log(img.width); // 40
 //console.log(img.height); // 40
 //console.log(img.name); // ‘myImage’

// console.log(img.pixelData (20, 4)); // returns the color of the pixel at that position.


/* Algorithm */

//var array=[1,2,[3,4,[5,6,[7], ],8],9,10,11,12];
 //console.log(Array.isArray(array[1]))
 //console.log(array.slice(-1))
//  var array=[1,[3,-7]];
//  var result=[];
// function transform (array){
// 	if (array.length==0){
// 		return array;
// 	}
// 	else if ((array.length==1) && (Array.isArray(array[0]))){
// 		 array[0]=array[0][0];
// //		console.log(element);
// 		return array;
// 	}
// 	else {
// 		for (var i=0;i<array.length;i++){
// 			if (Array.isArray(array[i])){
// 				array=array.concat(transform(array[i]));
// 			}
// 		}
// }
// return array;
// }
// console.log(transform(array))



// var array=[1,2,[3,4,[5,6,[7], ],8],9,10,11,12];
// // var array=[1,[-1,7]];
// function transform(array){
// 	var newarray=[];
// //	var j;
// 	function add(array){
// 	for (var i=0;i<array.length;i++){
// 		if(Array.isArray(array[i]))
// 			add(array[i]);
// 	    else
// 		 newarray.push(array[i]);
// 	}
// 	return newarray;
// 	}
// 	return add(array);
// }




// console.log (transform(array))




function CustomObject (a, b) {
  this.a = a;
  this.b = b;
}
var obj = new CustomObject (1, 2);
CustomObject.prototype.c = function () { return this.a + this.b; };

function printObjProp(obj,test){
	var key;
	if (!test) {
	 for (key in obj){
	 	console.log (key,obj.hasOwnProperty(key));
	 }
	}
	else if (test){
		for (key in obj){
			if(obj.hasOwnProperty(key))
				console.log(key);
		}
		// only object properties
	}
}


//printObjProp (obj); // output: a, b, c
//printObjProp (obj, false); // output: a, b, c
//printObjProp (obj, true); // output: a, b


function Person(name,age,dob){
	this.name=name;
	this.age=age;
	this.dob=dob;
}

Person.prototype.birthday=function(){

}


function CustomObject (a, b) {
  this.a = a;
  this.b = b;
}
var obj = new CustomObject (1, 2);
CustomObject.prototype.c = function () { return this.a + this.b; };
/* instance has a c property but that does not belog to it */
function printObjProp(obj,test){
	var key;
	if (!test) {
	 for (key in obj){
	 	console.log (key,obj.hasOwnProperty(key));
	 }
	}
	else if (test){
		for (key in obj){
			if(obj.hasOwnProperty(key))
				console.log(key);
		}
		// only object properties
	}
}


//printObjProp (obj); // output: a, b, c
//printObjProp (obj, false); // output: a, b, c
//printObjProp (obj, true); // output: a, b
