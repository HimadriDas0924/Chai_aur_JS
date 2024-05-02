// a property descriptor is the one that is defined directly on the object and is not inherited from the object's prototype.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // obj, prop(string format)

console.log(descriptor); /* op: {
    value: 3.14...,
    writable: false, // i.e you cannot change this property
    enumerable: false,
    configurable: false
} */

// NOTE: so we cannot change the value of MATH.PI for this reason

// NOTE: now if we create our own object, we should atleast have the freedom tao set writable: false for a property.

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: false,

    order: function() {
        console.log('chai nhi bni');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
/* op(by default): {
    writable: true,
    enumerable: true, 
    configurable: true
} */

// now we want to change the property descriptors of this property

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false // enumerable means iterable
})// obj, property, {changes}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));



// can we change all the property descriptors of an object using a loop ??
    // yes

for (let key of Object.keys(chai)) {

    Object.defineProperty(chai, `${key}`, {
        writable: false, 
        enumerable: false
    })
}


// iterating the object
    // bcz we make enumerable: false for all the properties of chai: so this object will not be iterable

for (let [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// cannot change Math.PI like this

// Object.defineProperty(Math, "PI", {
//     writable: true
// })

console.log(Math.PI);
