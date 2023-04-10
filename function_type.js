function stringFunction() {
    console.log("Hello I m string");
}
function calc(val1, val2) {
    var total = 1 + val2;
    return total;
}
calc(2, 3);
var universal;
universal = calc;
//  universal = calc//stringFunction;
console.log(universal(2, 3));
