//defining  interfaces
interface AutomobileInterface {
  brand?: string; //make optional with ?
  speed?: number;
  speedMethod?(velocidad: number): void;
}

//defining  interfaces
interface AutomobileInterface2 extends AutomobileInterface {
  brand: string;
  speed: number;
}

const automobile2: AutomobileInterface2 = {
  brand: "aas",
  speed:20
};

//and using interfaces
const automobile: AutomobileInterface = {
  brand: "bmd",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles and hour`);
  },
};

//implementing interfaces to functions
function car3(automobile: AutomobileInterface) {
  console.log(
    `this ${automobile.brand} is going at ${automobile.speed} miles and hour`
  );
}

// car3(automobile);

//implementing interfaces to classes

class AutoMobileClass implements AutomobileInterface {
  brand: string = "vivek";
  speed: number = 10;
  // constructor(brand: string, speed: number) {
  //   this.brand = brand;
  //   this.speed = speed;
  // }
  speedMethod(speed1: number) {
    console.log(`Hi my car is going at ${speed1}`);
  }
}

let carObject = new AutoMobileClass();
carObject.speedMethod(1000);
