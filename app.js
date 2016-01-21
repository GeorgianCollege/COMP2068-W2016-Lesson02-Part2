//PERSON CLASS
var Person = (function () {
    //CONSTRUCTOR FUNCTION
    function Person(name) {
        this._name = name;
    }
    Person.prototype.sayHello = function () {
        console.log(this._name + " says Hello!");
    };
    return Person;
})();
