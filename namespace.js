var myNameSpacets;
(function (myNameSpacets) {
    myNameSpacets.name = "vvive";
    function dData(value) {
        return value;
    }
    myNameSpacets.dData = dData;
})(myNameSpacets || (myNameSpacets = {}));
///<reference path="module1.ts"/>
var thisSpace = myNameSpacets;
console.log(thisSpace.dData('hello his this'));
console.log(thisSpace.name);
