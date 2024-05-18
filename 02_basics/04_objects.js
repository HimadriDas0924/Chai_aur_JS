// const user = new Object() // singleton object: Doubt ?? singleton objects are ones who follow singleton pattern. So does this obj follow it?
// console.log(user);

// nested object
const regularUser = {
    fullName : {
        userFullName: {
            firstName: "himadri",
            lastName: "das"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// object obj1,obj2 into a single object

// const obj3 = {obj1, obj2} // op: not in a single obj -> nested obj

const obj3 = {...obj1, ...obj2} // m1) use spread operator

// const obj3 = Object.assign({}, obj1, obj2) 
// m2) IMP: Object.assign(target_obj, source_objects..) => combine all among target_obj, souce_objs and put it into the target object && this also returns the target object.

// IMP: if obj3 = Object.assign(obj1, obj2), then (obj1 === obj3) -> true

// console.log(obj3);


const tinderUser = {
    id: "123abc",
    name: "himadri",
    email: "himadri@gmail.com",
    isLoggedIn: "false"
}

// VIMP: get all the keys Or all values of an Object
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); // [[k1, v1], [k2, v2], ..]

// IMP: before accessing property: check if obj has it or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// DESTRUCTURING: {}
    // useful for extracting values from an object
    // 2 types: array Destructure && object destructure

const course = {
    courseName: "js in hindi",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course;
// console.log(courseInstructor); // not defined: bcz now "instructor" holds it's value
console.log(instructor);

// What does an API return ?
    // could return a JSON
    // or could return an array of objects
