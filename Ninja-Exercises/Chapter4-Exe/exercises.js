function addRec(arr){
	console.log(arr)
		return arr.length>1 ? arr.pop() + addRec(arr):arr[0];
}

var arr=[1,3,5,7];
var sum=addRec(arr);
console.log(sum);

/* Exercise 3 */
//Private variable
//Get method that allow access to private variable
// create and access local variables.
// function store(value){
// 	var x=value;
// //	return "value stored";
// function getter(){
// 	return x;
// }
// function setter(value){
// 	x=value;

// }
// //return setter;
// //return getter;
// return {getFn:getter,
// 		setFn:setter
//      	}
// }


// var storeVal=store(5);
// console.log(storeVal);
// storeVal();
// console.log(x)
// console.log(storeVal)
// console.log(storeVal.getFn());
// console.log(storeVal.setFn(12));

// // to return more than one thing in function we use object
// var storeA=store(5);
// console.log


// function Store (value){
// 	var x=value;
// 	this.getFn=function(){
// 		return x;
// 	}
// 	this.setFn=function(value){
// 		x=value;
// 		return x;
// 	}
// }
// var storeA=new Store(5);
// // we don't want to return in constructor because every time we return we create but we want to have a shared peoperties.

// function Store (value){
// 	this.x=value;
// }
// Store.prototype.getFn=function(value){
// 	this.x=value;
// 	return this.x;
// }
//  //no access to x


/*Exercise 4 */
function dataType(){
	var args = Array.prototype.slice.call(arguments); //change arguments to array
	for (var i=0;i<arguments.length;i++){
		console.log(typeof args[i]);
	}
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {});



/* Exercise 5 */
function distance(){
	if (arguments.length==4) {
		return Math.sqrt(
			Math.pow(arguments[0]-arguments[2],2)+Math.pow(arguments[1]-arguments[3],2)
			);
	}
	if (arguments.length==6){
		return Math.sqrt(
			Math.pow(arguments[0]-arguments[3],2)+Math.pow(arguments[1]-arguments[4],2)+Math.pow(arguments[2]-arguments[5],2)
			);
	}
	else
	return ("there are not enough arguments or there are many arguments");
}

console.log (distance(1,2,2,1))
console.log(distance(1,2,1,-1,2,3))


// /*Exercise 6 */
