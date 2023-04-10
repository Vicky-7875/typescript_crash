var automobile = {
    brand: "bmd",
    speed: 200,
    speedMethod: function () {
        console.log("this ".concat(this.brand, " is going at ").concat(this.speed, " miles and hour"));
    },
};
//implementing interfaces to functions
function car3(automobile) {
    console.log("this ".concat(automobile.brand, " is going at ").concat(automobile.speed, " miles and hour"));
}
// car3(automobile);
//implementing interfaces to classes
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
        this.brand = "vivek";
        this.speed = 10;
    }
    // constructor(brand: string, speed: number) {
    //   this.brand = brand;
    //   this.speed = speed;
    // }
    AutoMobileClass.prototype.speedMethod = function (speed1) {
        console.log("Hi my car is going at ".concat(speed1));
    };
    return AutoMobileClass;
}());
var carObject = new AutoMobileClass();
carObject.speedMethod(1000);
