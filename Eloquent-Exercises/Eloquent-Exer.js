


/* Chapter2 Exercise1 */
// var PoundCount=1;
// var count=0;
// var result= "";
// for(count=0;count<7;count+=1){
// 	for(PoundCount=1;PoundCount<=count+1;PoundCount+=1){
// 		result+="#"
// 	}
// 	console.log(result);
// 	console.log("\n");
// 	PoundCount=1;
// 	result="";
// }

/* Chapter 2 Exercise2 Version1*/

// var count=1;
// for (count=1;count<101;count+=1){
// 	if (count%3==0){
// 		console.log("fizz")
// 	}
// 	else if(count%5==0 && !count%3==0){
// 		console.log("buzz")
// 	}
// 	else{
// 		console.log(count)
// 	}
// }

/* Chapter2 Exercise2 Version2*/
// var count=1;
// for (count=1;count<101;count+=1){
// 	if (count%3==0){
// 		console.log("Fizz")
// 	}
// 	else if(count%5==0 && !count%3==0){
// 		console.log("Buzz")
// 	}
// 	else if (count%5==0 && count%3==0){
// 		console.log("FizzBuzz")
// 	}
// 	else{
// 		console.log(count)
// 	}
// }
/* Chapter2 Exercise3 */

// var count1=1;
// var count2=1;
// var sum=0;
// var result=""

// for (count1=1;count1<9;count1+=1){
// 	for (count2=1; count2<9;count2+=1){
// 		sum=count1+count2;
// 		if (sum%2==0){
// 			result=result+" ";
// 		}
// 		else{
// 		result=result+"#";
// 		}
// 	}
//  	console.log(result);
//  	console.log("\n");
//  	result="";
// }

/* Chapter3 Exercise 1 */
// var min=function(a,b){
// 	if (a<=b){
// 		return a;
// 	}
// 	else if(b<a) {
// 		return b;
// 	}
// 	}

// console.log(min(2,5))
// console.log(min(-3,0))
// console.log(min(-2,-5))

/* Chapter3 Exercise 2 */

	// function isEven(N){
	// 	if (N==0){
	// 		return true;
	// 	}
	// 	else if (N==1){
	// 		return false;
	// 	}
	// 	else{
	// 		return isEven(N-2);
	// 	}
	// }
	// console.log(isEven(50));
	// console.log(isEven(75));
	// console.log(isEven(-1));
// if (character == character.toUpperCase()) {
//             alert ('upper case true');
//         }

/* Chapter3 Exercise3 */
// or function countBs(kalame)
// 	var countBs=function(kalame){
// 		var num=0;
// 		for (var count=0;count< kalame.length; count++){
// 			console.log(count,kalame,kalame.length);
// 			if (kalame.charAt(count)=="B") {
// 				num++;
// 			}
// 		}

// 	    return num;
// 	}

// console.log(countBs("BBC"),num);

// /* Chapter3 Exercise3 part2 */


	// function countChar(kalame,chr){

	// 		var num=0;
	// 		for (var count=0;count<kalame.length;count++){
	// 			if (kalame.charAt(count)==chr){
	// 				num++;
	// 			}
	// 		}
	// 		return num;
	// 	}
	// 	console.log(countChar("kakkerlack","k"))

			// function Fibo(N){
			// var result =[];
			// if (N==1){
			// 	return 1;
			// }
			// else if (N==2){
			// 	return 1;
			// }
			// else{
			// 	return Fibo(N-1)+Fibo(N-2);
			// }
			// }

// Fibo(9);
/* Chapter4 Exercise1 */

// function add(start,end){
// 	var argument=[];
// 	sum=0;
// 	while (start<=end){
// 		argument.push(start);
// 		sum=sum+start;
// 		satrt=start++;
// 	}
// 	return sum;
// }


// just for two arguments functions
/* limiter function */

	// function add(a,b){
	// 	return a+b;
	// }

	//  function limitor(fn, n){
	//  	var count=1;
	//  	return function(){
	//  	if (count<=n){
	//  		count++;
	//  		return fn.apply(undefined,arguments);
	//  	}
	//  	else if (count>n){
	//  		alert("no");
	//  	}
	//  	}
	//  }
	// var x =limitor(add,2)
	// console.log (x(2,3))
	// console.log (x(1,5))
	// console.log (x(3,4))

	//  function reverseArray(array){
	// 	var newarray=[];
	// 	for (var i=array.length-1;i>=0;i--){
	//   		newarray.push(array[i]);
	// 	}
	// 	return newarray;
	// }

	// console.log(reverseArray(["A", "B", "C"]));

	// function reverseArrayInPlace(array){
	// 	var swap;
	// 	for (var i=0;i<Math.floor(array.length/2);i++){
	// 		swap=array[i];
	// 		array[i]=array[array.length-1-i];
	// 		array[array.length-1-i]=swap;
	// 	}
	// 	return array;

	// }
	//  console.log(reverseArrayInPlace([1,2,3,4,5]))

	// note: the first one is used in more situations because we keep both arrays.
	// but, the second one is more efficient.


/* Exercise3 Chapter4 */
// function arrayToList(array){
// 	var list={};
// 	var pointer=list;
// 	 	for (var i=0; i<array.length;i++){
// 		pointer.value=array[i]
// 		pointer.rest={};
// 		if(i==(array.length-1))
// 			pointer.rest=null;
// 		else
// 			pointer=pointer.rest;
// 	}
// 	pointer=null;
// 	return list;
// }

// 	 console.log (arrayToList([10,20]));

// /* Exercise3 Chapter4 Part2 */
// function listToArray(list){
// 		var array=[];
// 		var i=0;
// 		for (var node = list; node; node = node.rest) {
// 			console.log(node)
// 		  array[i]=node.value;
// 		  i++;
// 		}
// 		return array;
// }
// console.log(listToArray(arrayToList([10, 20, 30])))

/* Exercise3 Chapter4 part 3 */
// function prepend(list,element){
// 	if (element==null){
// 		var lst={};
// 		lst.value=list;
// 		lst.rest=null;
// 		list=lst;
// 		// return lst;
// 	}
// 	else{
// 		list.rest=element;
// 		// return list;
// 	}
// 	return list;
// }
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


	// var listNew={
	// 	value:1,
	// 	res:null
	// }
 //console.log(prepend(listNew,{value:5,res:null}));
// console.log(prepend(20,null));
 console.log(prepend(10, prepend(20, null)));
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

}
