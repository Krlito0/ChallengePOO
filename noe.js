var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(name, animal) {
        this.name = name;
        this.animal = animal;
    }
    Animals.prototype.picture = function () {
        console.log("Quelle belle photo de ".concat(this.name, " le ").concat(this.animal, " je vais l'envoyer a 30 Millions d'amis"));
    };
    return Animals;
}());
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(name, animal, color) {
        var _this = _super.call(this, name, animal) || this;
        _this.color = color;
        return _this;
    }
    Color.prototype.feed = function () {
        console.log("Come ".concat(this.name, " le ").concat(this.animal, " it's time to eat!!"));
    };
    return Color;
}(Animals));
var Quadrupede = /** @class */ (function (_super) {
    __extends(Quadrupede, _super);
    function Quadrupede(name, animal, color, legs) {
        var _this = _super.call(this, name, animal, color) || this;
        _this.legs = legs;
        return _this;
    }
    Quadrupede.prototype.quadru = function () {
        console.log("Come ".concat(this.name, " im gonna give you some caress!"));
    };
    return Quadrupede;
}(Color));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, animal, color, legs, race) {
        var _this = _super.call(this, name, animal, color, legs) || this;
        _this.race = race;
        return _this;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, " the ").concat(this.race, " Cat meowing : meeeoooowwwwwww!!"));
    };
    return Cat;
}(Quadrupede));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, animal, color, legs, race) {
        return _super.call(this, name, animal, color, legs, race) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " the ").concat(this.race, "'dog is barking : wouuff wouff!!"));
    };
    return Dog;
}(Cat));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, animal, color, species) {
        var _this = _super.call(this, name, animal, color) || this;
        _this.species = species;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " the ").concat(this.species, " is flying,woaww it's wonderful!"));
    };
    return Bird;
}(Color));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, animal, type) {
        var _this = _super.call(this, name, animal) || this;
        _this.type = type;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("Careful there are so many ".concat(this.animal, " swimming !"));
    };
    return Fish;
}(Animals));
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect(name, animal, color, legs, race) {
        return _super.call(this, name, animal, color, legs, race) || this;
    }
    return Insect;
}(Cat));
// interface Ani {
//     name : string,
//     animal: string,
//     color?:string,
//     legs:number,
//     race:string,
//     species:string,
//     type:string,
// };
var animal1 = new Cat("Kiwi", "Cat", "black", 4, "Européen");
var animal2 = new Cat("Chacha", "Cat", "", 4, "Chartreux");
var animal3 = new Dog("Thérese", "Dog", "black", 4, "Terre-Neuve");
var animal4 = new Dog("Miewmiew", "Dog", "", 4, "Moon Moon");
var animal5 = new Bird("Kuamé", "Bird", "", "Mésange");
var animal6 = new Bird("Tomer", "Bird", "black", "Merle");
var animal7 = new Fish("Totto", "Thon", "");
var animal8 = new Fish("Baby", "Shark", "");
// let animal9 = new Insect("Sticky","Asticot","",Nan,"");    
animal1.picture();
animal2.picture();
animal3.picture();
animal4.picture();
animal5.picture();
animal6.picture();
animal7.picture();
animal8.picture();
animal1.meow();
animal2.meow();
animal3.bark();
animal4.bark();
animal5.fly();
animal6.fly();
animal1.quadru();
animal2.quadru();
animal3.quadru();
animal4.quadru();
animal1.feed();
animal3.feed();
animal6.feed();
