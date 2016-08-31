
 Chapter4 Exercise1 
```javascrit
 function add(start,end){
 	var argument=[];
 	sum=0;
 	while (start<=end){
 		argument.push(start);
 		sum=sum+start;
 		satrt=start++;
 	}
 	return sum;
 }
```
```javascript
// just for two arguments functions
 limiter function 

	 function add(a,b){
	 	return a+b;
	 }

	  function limitor(fn, n){
	  	var count=1;
	  	return function(){
	  	if (count<=n){
	  		count++;
	  		return fn.apply(undefined,arguments);
	  	}
	  	else if (count>n){
	  		alert("no");
	  	}
	  	}
	  }
	output:
	// var x =limitor(add,2)
	// console.log (x(2,3))
	// console.log (x(1,5))
	// console.log (x(3,4))
```
```javascript
	  function reverseArray(array){
	 	var newarray=[];
	 	for (var i=array.length-1;i>=0;i--){
	   		newarray.push(array[i]);
	 	}
	 	return newarray;
	 }
output:
	// console.log(reverseArray(["A", "B", "C"]));
```
```javascript
	 function reverseArrayInPlace(array){
	 	var swap;
	 	for (var i=0;i<Math.floor(array.length/2);i++){
	 		swap=array[i];
	 		array[i]=array[array.length-1-i];
	 		array[array.length-1-i]=swap;
	 	}
	 	return array;
   }
   output:
	//  console.log(reverseArrayInPlace([1,2,3,4,5]))

	// note: the first one is used in more situations because we keep both arrays.
	// but, the second one is more efficient.

```
 Exercise3 Chapter4 
 ```javascript
 function arrayToList(array){
 	var list={};
 	var pointer=list;
 	 	for (var i=0; i<array.length;i++){
 		pointer.value=array[i]
 		pointer.rest={};
 		if(i==(array.length-1))
 			pointer.rest=null;
 		else
 			pointer=pointer.rest;
 	}
 	pointer=null;
 	return list;
 }
output:
// 	 console.log (arrayToList([10,20]));
```
  Exercise3 Chapter4 Part2 
 ```javascript 
 function listToArray(list){
 		var array=[];
 		var i=0;
 		for (var node = list; node; node = node.rest) {
 			console.log(node)
 		  array[i]=node.value;
 		  i++;
 		}
 		return array;
 }
output: // console.log(listToArray(arrayToList([10, 20, 30])))
```
 Exercise3 Chapter4 part 3 
 ```javascript
 function prepend(list,element){
 	if (element==null){
 		var lst={};
 		lst.value=list;
 		lst.rest=null;
 		list=lst;
 		// return lst;
 	}
 	else{
 		list.rest=element;
 		// return list;
 	}
 	return list;
 }
// this works
	function prepend(element,list){
		 if(list==null){
		 	list={};
		 	list.value=element;
		 	list.rest=null;
		 	return list;
		 }
		 else{
		 	var listMock={value:element}
		 	listMock.rest=list;
			return listMock;
		 }
	}

output:
	// var listNew={
	// 	value:1,
	// 	res:null
	// }
 //console.log(prepend(listNew,{value:5,res:null}));
// console.log(prepend(20,null));
 //console.log(prepend(10, prepend(20, null)));
 ```
 ```javascript
 var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

 function nth(list,n){
 	if(n==0){
 		// or return list;
 		return{
 			// list: list.value,
 			// next: null

 		};
 	}
 	else
 	{
 		return nth(list,n-1);
 	}
 }
 console.log(nth(list,0))
	// var objA={a:"",
	// 		  b:""};
	// var objB={a:"",
	// 		  b:""};
	// console.log (objA == objB)
	// console.log(objA===objB)
	// // Deep comparison
	// console.log(objA.a==objB.a);
	// console.log(objA.b===objB.b);

	// var objA={
	// 	a:{
	// 		a1:"",
	// 		a2:""
	// 	},
	// 	b:""
	// }
	// var objB={
	// 	a:{
	// 		a1:"1"
	// 	},
	// 	b:"3"
	// }

```
```javascript

	// 	function deepComparation(objA,objB){
	// 	for (var key in objA){
	// //		console.log(key,objA[key])
	// 		if(typeof objA[key]=='Object'){
	// 			for (var key2 in objA[key]){
	// 				if (objA[key][key2]!=objB[key][key2]){
	// 					// console.log(key2)
	// 					return false;
	// 				}
	// 			}
	// 		}else if(objA[key]!=objB[key]){
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// 	}

		var obj1={
			name: "",
			lastname="",
			location:{
				country:"",
				sttae:"",
				city:""
			},
			joined:2016
		}
		var obj2={
			name:"",
			lastname:"",
			location:{
				country:"",
				sttate:"",
				city:"",
				coordinates:{
					lat:432142,
					lon:
				}
			}
			joined:
		}
	 deepComparation(obj1,obj2){
	 	// get the length of objA and objB
	 	len1=obj1.length;
	 	len2=obj2.length;
	 	if (len1==1 && len2==1)
	 	for (var key1 in obj1){
	 		console.log('Object1.${key1}=${obj1[key1]}');
//	 		console.log('Object1.${key1} contains${obj1[key1]}');

//	 		console.log("Object1."+key1+"contains"+obj1[key1]);
		if((typeof obj1[key1]=="object") && (obj2.hasOwnProperty) && (typeof obj2[key1]=="object") ){
			deepComparison(obj1[key1],obj2[key1])
		}else if(){

		}
	 	 } else
	 	 for (var key1 in obj1)
	 	 	for (var key2 in obj2)
	 	 	  deepComaprison(key1,key2)
	}


function deepEqual(obj1,obj2){
	for (var key1 in obj1){
		console.log(`Object1.${key1}=${obj1[key1]}`);

		if((typeof obj1[key1]=='Object') && (obj2.hasOwnProperty)) && (typeof obj2[key1]=="objest")){
			if(!deepEqual(obj1[key1],obj2[key1]))
			return false;
		}
	//		deepEqual(obj1[key1],obj2[key1])
		else if(obj1[key1]!=obj2[key1]){
			console.log(`Object 2 does not have the same value '${obj2[key1]'`)
			return false;
	}
