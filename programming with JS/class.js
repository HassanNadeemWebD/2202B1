class Car{
constructor(carmodel , company){



this.carmodel = carmodel;
this.company = company;

}

displaySpecs(){

console.log("My Car Model is :" + this.carmodel )


}

} 

class MyCar extends Car{
    constructor( myColor , mySpeed, carmodel , company){
        super(carmodel , company);
        this.color = myColor;
        this.speed = mySpeed;
       



    }

display(){
    console.log()

console.log(`My Car Model: ${this.carmodel} and Car Company ${this.company}  color ${this.color}  ${this.speed} `)



}

}

let myCar = new Car("2011" , "Mercedes");
// myCar.displaySpecs()
// console.log("Hello")

let myCars = new MyCar("red","120");

myCars.display();