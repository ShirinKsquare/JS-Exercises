building = {
    F1: {
        R1: ["pc", "mouse"],
        R2: ["pc", "mouse"]
    },
    F2: {
        R1: ["pc", "mouse"],
        R2: ["asa", "mouse"]
    },
    F3: {
        R1: ["pc", "mouse"],
        R2: ["asa", "mouse"]
    },
    F4: {
        R1: ["pc", "mouse"],
        R2: ["asa", "mouse"]
    },
    F5: {
        R1: ["pc", "mouse"],
        R2: ["asa", "mouse"]
    }
}

Function.prototype.memoized = function(key) {
    this._values = this._values || {}; //covention name to insist that this is going to be private; this.value would be private too
    console.log(this._values)
    return this._values[key] !== undefined ?
        this._values[key] :
        this._values[key] = this.apply(this, arguments);
};

Function.prototype.memoize = function() {
    var fn = this;
    return function() {
        return fn.memoized.apply(fn, arguments);
    };
};


var searchFn = function(value, obj) {
    var room;
    var floor;
    var result = [];
    console.log("inside search")

    function search(obj, value) {
        for (var key in obj) {
            if (Array.isArray(obj[key])) {
                room = key;
                for (var i = 0; i < obj[key].length; i++) {
                    if (obj[key][i] == value) {
                        result.push("Room: " + room + " Floor " + floor);
                    }
                }

            } else if (typeof obj[key] == 'object') {
                floor = key
                search(obj[key], value)
            }


        }

    }
    search(obj, value);
    return result
}.memoize();

//console.log(searchFn(building,'pc'))


console.log(searchFn("pc", building))
console.log(searchFn("pc", building))
