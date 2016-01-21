//PERSON CLASS
class Person {
    //PRIVATE INSTANCE VARIABLES
    private _name:string;
    //CONSTRUCTOR FUNCTION
    constructor(name:string) {
        this._name = name;
    }
    
    public sayHello():void {
        console.log(this._name + " says Hello!");
    }
}