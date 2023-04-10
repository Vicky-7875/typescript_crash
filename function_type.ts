function stringFunction() {
  console.log("Hello I m string");
}

function calc(val1: number, val2: number): number {
  let total: number = 1 + val2;
  return total;
}
calc(2, 3);

let universal: (value1:number,value2:number) => number;

universal= calc;

//  universal = calc//stringFunction;
console.log(universal(2,3))
