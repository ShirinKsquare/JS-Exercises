function addRec(arr) {
    console.log(arr)
    return arr.length > 1 ? arr.pop() + addRec(arr) : arr[0];
}

var arr = [1, 3, 5, 7];
var sum = addRec(arr);
console.log(sum);

/* Exercise 3 */
//Private variable
//Get method that allow access to private variable
// create and access local variables.
function store(value) {
    var x;
    setter(value);
    // //	return "value stored";
    function getter() {
        return x;
    }

    function setter(value) {
        if (!isNaN(value)) {
            x = value;
            return x;
        } else
            return "not a valid input";
    }

    return {
        getFn: getter,
        setFn: setter
    };

}



var storeVal = store(5);
console.log(storeVal);
console.log(storeVal.getFn());
console.log(storeVal.setFn("string"));



/*Exercise 4*/
//This will use Anish method and it will write it in a row.

function dataType() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            //			console.log("array");
            args[i] = "array";
        } else if (!isNaN(arguments[i]) && !Number.isInteger(arguments[i])) {
            //		 	console.log("float");
            args[i] = "float";
        } else {
            //			console.log(typeof(arguments[i]));
            args[i] = typeof(arguments[i]);
        }
    }
    var str = args.join(', ');
    console.log(str);
}

dataType(1, 6.2831, "pi*2", [function() {}, 1], {}, function() {});

/*Exercise 4 */
function dataType() {
    var args = Array.prototype.slice.call(arguments); //change arguments to array
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(args[i])) {
            args[i] = "array";
        } else
            args[i] = (typeof args[i]);
    }
    var str = args.join(', ');
    console.log(str);
}

/* Exercise 5 */
function distance() {
    if (arguments.length == 4) {
        return Math.sqrt(
            Math.pow(arguments[0] - arguments[2], 2) + Math.pow(arguments[1] - arguments[3], 2)
        );
    }
    if (arguments.length == 6) {
        return Math.sqrt(
            Math.pow(arguments[0] - arguments[3], 2) + Math.pow(arguments[1] - arguments[4], 2) + Math.pow(arguments[2] - arguments[5], 2)
        );
    } else
        return ("there are not enough arguments or there are many arguments");
}

console.log(distance(1, 2, 2, 1))
console.log(distance(1, 2, 1, -1, 2, 3))

/*Exercise 6 */

function distance2() {
    if ((arguments.length == 2) && (arguments[0].length == arguments[1].length)) {
        sum = 0;
        for (var i = 0; i < arguments[0].length - 1; i++) {
            sum += Math.pow(arguments[0][i] - arguments[1][i], 2);
            console.log(sum)
            sum = Math.sqrt(sum);
        }
        return sum;
    } else if (arguments.length == 4) {
        return Math.sqrt(
            Math.pow(arguments[0] - arguments[2], 2) + Math.pow(arguments[1] - arguments[3], 2)
        );
    } else if (arguments.length == 6) {
        return Math.sqrt(
            Math.pow(arguments[0] - arguments[3], 2) + Math.pow(arguments[1] - arguments[4], 2) + Math.pow(arguments[2] - arguments[5], 2)
        );
    } else
        return "incompatible";
}

console.log(distance2(1, 2, 2, 2));
console.log(distance2([1, 2], [2, 2, 4]));
