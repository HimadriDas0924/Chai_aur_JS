


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

// if we inject a method in the Object, then array,strings,functions will be able to access it, since their prototype is Object.

Object.prototype.hitesh = function() {
    console.log('hitesh is present in all Objects');
}

// heroPower.hitesh()

// myHeros.hitesh()

// we can also inject a method specific to array
Array.prototype.heyHitesh = function() {
    console.log('hitesh says hello');
}

// myHeros.heyHitesh()

// injecting to greater hierarchy: lesser hierarchy is able to access it but vice versa is not possible 
    // i.e Object cannot access the method heyHitesh

// heroPower.heyHitesh() // error


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS Assignment', 
    fulltime: true,
    __proto__: TeachingSupport // prototypal inheritance: only this object inherits the properties of TeachingSupport and not all the Objects.
}

console.log(TASupport.isAvailable); // false
console.log(Teacher.isAvailable); // undefined


Teacher.__proto__ = User; 

// modern approach of prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherted Teacher

console.log(TeachingSupport.makeVideo); // true: so inherited


// create a method: such that all we can get the trueLength of all strings

let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function() {
    console.log(`${this}`); // this: jisne function call kiya
    
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"himadri das   ".trueLength()
"ice tea   ".trueLength()


