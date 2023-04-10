abstract class People {
  displayDate() {
    console.log("some data");
  }
}
//give error
// let people = new People;
// people.displayDate()



class Kids extends People{

}

let kidClass = new Kids;
kidClass.displayDate();

