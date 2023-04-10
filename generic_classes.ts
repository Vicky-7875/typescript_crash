let array1: number[] = [1, 232, 4344];
let array2: Array<number> = [1, 232, 4344];
let array3: Array<string> = ["sadsas", "sad", "sda"];

class ObjGenerClass<TYPE1, TYPE2> {
  constructor(public value1: TYPE1, public value2: TYPE2) {}
}

class ObjGenerClassContraint<TYPE1, TYPE2 extends string> {
  constructor(public value1: TYPE1, public value2: TYPE2) {}
}

let obj1 = new ObjGenerClass<string, number>("sda", 2);
let obj2 = new ObjGenerClass<boolean, number>(true, 32);

let cObje1 = new ObjGenerClassContraint("dsfd", "4444");
let cObje2 = new ObjGenerClassContraint<boolean, string>(true,'asdsa');
