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



/* Exercise2 */
function div(a,b){
	return ~~(a/b);
}
function mod(a,b){
	return a-~~(a/b)*b;
}

function gregorian_to_jalali(USDate){
  var result = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(USDate);
  var gm = result[1];
  var gd = result[2];
  var gy = result[3];
  var i,j;
 g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
 jy=(gy<=1600)?0:979;
 gy-=(gy<=1600)?621:1600;
 gy2=(gm>2)?(gy+1):gy;
 days=(365*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+99)/100)) 
+(parseInt((gy2+399)/400)) -80 +gd +g_d_m[gm-1];
 jy+=33*(parseInt(days/12053)); 
 days%=12053;
 jy+=4*(parseInt(days/1461));
 days%=1461;
 jy+=parseInt((days-1)/365);
 //j=4*jy+139361631;
 //j=j+div(div(4*jy+183187720,146097)*3,4)*4-3908;
 //i=div(mod(j,1461),4)*5+308;
 //jy=div(j,1461)-100100+div(8-gm,6);
 if(days > 365)days=(days-1)%365;
 jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
 jd=1+((days < 186)?(days%31):((days-186)%30));
 return [jy,jm,jd];
}


gregorian_to_jalali("09/16/2014");
// the year is not working


