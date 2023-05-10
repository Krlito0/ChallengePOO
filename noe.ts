class Animals {
name: string;
animal:string;

constructor (name:string, animal:string){
    this.name=name;
    this.animal=animal;  
}

picture(){
    console.log(`Quelle belle photo de ${this.name} le ${this.animal} je vais l'envoyer a 30 Millions d'amis`);
}
}

class Color extends Animals{
    color?:string;

    constructor(name:string, animal:string, color:string){
        super(name,animal);
        this.color=color;
    }

feed(){ console.log(`Come ${this.name} le ${this.animal} it's time to eat!!`);
}
}

class Quadrupede extends Color{
    legs: number;

    constructor(name:string, animal:string, color:string, legs:number){
        super(name, animal, color);
        this.legs=legs;
    }

    quadru (){ console.log(`Come ${this.name} im gonna give you some caress!`);
    }
}

class Cat extends Quadrupede {
    race : string;

    constructor (name:string, animal:string, color:string, legs:number, race:string){
        super(name, animal, color,legs);
        this.race=race;
    }

    meow(){ console.log(`${this.name} the ${this.race} Cat meowing : meeeoooowwwwwww!!`);
}
}

class Dog extends Cat {

    constructor (name:string, animal:string, color:string, legs:number, race:string){
        super(name, animal, color, legs, race);
}

    bark(){ console.log(`${this.name} the ${this.race}'dog is barking : wouuff wouff!!`);
}
}

class Bird extends Color {
    species:string;
    constructor (name:string, animal:string, color:string,species:string){
        super(name, animal, color);
        this.species=species;
    }

    fly(){ console.log(`${this.name} the ${this.species} is flying,woaww it's wonderful!`);
}
}

class Fish extends Animals {
    type?:string;

    constructor(name:string, animal:string, type:string){
        super(name,animal);
        this.type = type;
    }

    swim(){ console.log(`Careful there are so many ${this.animal} swimming !`)
}
}

class Insect extends  Cat {

    constructor (name:string, animal:string, color:string, legs:number, race:string){
        super(name, animal, color,legs,race);
    }
}

// interface Ani {
//     name : string,
//     animal: string,
//     color?:string,
//     legs:number,
//     race:string,
//     species:string,
//     type:string,

// };

let animal1 = new Cat("Kiwi","Cat","black",4,"Européen");
let animal2 = new Cat("Chacha","Cat","",4,"Chartreux");
let animal3 = new Dog("Thérese","Dog","black",4,"Terre-Neuve");
let animal4 = new Dog("Miewmiew", "Dog", "",4,"Moon Moon");
let animal5 = new Bird("Kuamé","Bird","","Mésange"); 
let animal6 = new Bird("Tomer","Bird","black","Merle");
let animal7 = new Fish("Totto","Thon","");  
let animal8 = new Fish("Baby","Shark","");
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

