const myObj = {
    'cpp': 'C++',
    'js': 'javascript',
    'swift': 'Swift by apple'
}

// using FOR IN: we can iterate the keys of an Object
    
for (const k in myObj) {
    // console.log(`${k} is key and it's value is ${myObj[k]}`);
}

// But can we use FOR IN for arrays

    // Array is also an Object: with indices as "keys" and arr[indices] as values

const arr = ["js", "cpp", "java", "py", "go"]

for (const k in arr) {
    console.log(`elem at ind ${k} is ${arr[k]}`);
}

// can we use FOR IN in maps
    // are maps objects ??
        // A map is any Object but unlike an Object it doesn't contain keys by default

    // to iterate an Object: 
        // use FOR IN: to iterate the 'keys' of object
    // to iterate a map: 
        // use FOR OF -> with destructuring of the array rep by val