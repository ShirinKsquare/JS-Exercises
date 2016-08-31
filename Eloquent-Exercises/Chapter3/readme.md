 Chapter3 Exercise 1 
 ```javascript
 var min=function(a,b){
 	if (a<=b){
 		return a;
 	}
 	else if(b<a) {
 		return b;
 	}
 	}

// console.log(min(2,5))
// console.log(min(-3,0))
// console.log(min(-2,-5))
```

 Chapter3 Exercise 2 
```javascript
	 function isEven(N){
	 	if (N==0){
	 		return true;
	 	}
	 	else if (N==1){
	 		return false;
	 	}
	 	else{
	 		return isEven(N-2);
	 	}
	 }
	 ```
	 output:
	// console.log(isEven(50));
	// console.log(isEven(75));
	// console.log(isEven(-1));
// if (character == character.toUpperCase()) {
//             alert ('upper case true');
//         }

 Chapter3 Exercise3 
 ```javascript
  function countBs(kalame)
// 	var countBs=function(kalame){
 		var num=0;
 		for (var count=0;count< kalame.length; count++){
 			console.log(count,kalame,kalame.length);
 			if (kalame.charAt(count)=="B") {
 				num++;
 			}
 		}

 	    return num;
 	}
``` output:
// console.log(countBs("BBC"),num);

 Chapter3 Exercise3 part2 

```javascript
	 function countChar(kalame,chr){

	 		var num=0;
	 		for (var count=0;count<kalame.length;count++){
	 			if (kalame.charAt(count)==chr){
	 				num++;
	 			}
	 		}
	 		return num;
	 	}
	 	```
	// 	console.log(countChar("kakkerlack","k"))
```javascript
			 function Fibo(N){
			 var result =[];
			 if (N==1){
			 	return 1;
			 }
			 else if (N==2){
			 	return 1;
			 }
			 else{
			 	return Fibo(N-1)+Fibo(N-2);
			 }
			 }
```
