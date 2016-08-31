 
 <a href="https://repl.it/DFsO"> here </a>
 
 Chapter2 Exercise1 

```javascript 
 var PoundCount=1;
 var count=0;
 var result= "";
 for(count=0;count<7;count+=1){
 	for(PoundCount=1;PoundCount<=count+1;PoundCount+=1){
 		result+="#"
 	}
 	console.log(result);
 	console.log("\n");
 	PoundCount=1;
 	result="";
 }
```

 Chapter 2 Exercise2 Version1

```
   var count=1;
 for (count=1;count<101;count+=1){
 	if (count%3==0){
 		console.log("fizz")
 	}
 	else if(count%5==0 && !count%3==0){
 		console.log("buzz")
 	}
 	else{
 		console.log(count)
 	}
 }
```

 Chapter2 Exercise2 Version2
 
 ```
 var count=1;
 for (count=1;count<101;count+=1){
 	if (count%3==0){
 		console.log("Fizz")
 	}
 	else if(count%5==0 && !count%3==0){
 		console.log("Buzz")
 	}
 	else if (count%5==0 && count%3==0){
 		console.log("FizzBuzz")
 	}
 	else{
 		console.log(count)
 	}
 }
 ```
 Chapter2 Exercise3 
```
 var count1=1;
 var count2=1;
 var sum=0;
 var result=""
 for (count1=1;count1<9;count1+=1){
 	for (count2=1; count2<9;count2+=1){
 		sum=count1+count2;
 		if (sum%2==0){
 			result=result+" ";
 		}
 		else{
 		result=result+"#";
 		}
 	}
  	console.log(result);
  	console.log("\n");
  	result="";
 }
```
