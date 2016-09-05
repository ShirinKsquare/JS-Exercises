/* Exercise 1 */

function hextorgb(hex){


  var result= hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
	if (result){
	 var   r= parseInt(result[1],16);
      var  g= parseInt(result[2],16);
      var  b= parseInt(result[3],16);
     return 'rgb('+r+','+g+','+b+')';
	}
	 result=hex.match(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);
	if(result){

	   r= parseInt(result[1].concat(result[1]),16);
       g= parseInt(result[2].concat(result[2]),16);
       b= parseInt(result[3].concat(result[3]),16);
        return 'rgb('+r+','+g+','+b+')';

	}
}

hextorgb("#3020ff");
hextorgb("#32f");
hextorgb("3322ff");

//output:
//'rgb(48,32,255)'
//'rgb(51,34,255)'
//'rgb(51,34,255)'
