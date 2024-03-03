## Chai_aur_JS
JS revision


NOTES:

# 6. Number and Maths
    
**Numbers**

- **Number.toString()** 
    - *convert no to string*

- **Number.toFixed(2)** 
    -  *to set precision to 2 decimal points*

- **Number.toPrecision(3)** 
    - *precision to 3 significant figures But remember to not include 'e' -> set precision to be >= no of digits before decimal points*

- **Number.toLocaleString('en-IN')** 
    - *rep 1000000 as 10,00,000*

**MATH**

-   Math.floor(3.95) // 3 \
    Math.ceil(3.11) // 4  \
    Math.PI.toFixed(2) // 3.14 \
    Math.min(2,3,4,1,4,53,1) // 1, sim we have Math.max() \
    Math.abs(-2) // 2 \
    Math.sqrt(25) // 5 \
    Math.pow(2,4) // 16 
    
-   `const min = 10`
    `const max = 30`
    `console.log( Math.floor(Math.random() * (max - min + 1) ) + min);`

    *NOTE: Math.random()*(max-min+1) => always between [0,21) i.e [0, diff+1) 
    => floor it => value always between [0 to (max-min)]*

# 7. Dates in JS

- `let myDate = new Date()`
    - creating a *Date Object* of current Date and time from 1st Jan 1970.
    - has properties like: 
        - **myDate.toDateString()** -> *day month date yr*
        - **myDate.toLocaleDateString()** -> *date*
        - **myDate.toLocaleString()** -> *date + time*
        - all 3 converts the Date Obj to *String*

- we can create Date Object of a particular Date and time
    - `let myCreatedDate = new Date(2023, 0, 23, 13, 23)` 
        - (yr, month(0 based), date, hr, min) 
        - we can even ommit the hr, min, sec
    
    - `let myCreatedDate = new Date("2023-01-23")`

- Can Create timestamps => USE CASE : booking apps : person with lesser timestamp gets priority.
    - `Date.now()` => returns a *number* i.e *no of miliseconds* from 1st Jan 1970 till now
    - we can convert a Date Obj to timeStamps and then compare both
        - `myDate.getTime()` => returns a *number* i.e *no of ms* from 1st Jan 1970 till this date of date Object.

- we can also fetch date, month, day, hours, seconds from date obj
    - `myDate.getDate()`, `myDate.getMonth()`, `myDate.getHours()`

- **NOTE => explore arguments of myDate.toLocaleString() ** 

# 8. Arrays in JS 

- Objects, 0 based indexing, Resizable, No specific data type
    - `const arr = [1,2,3,"himadri", "das"]`
    - `const arr2 = new Array(1,2,3,"himadri","das")`
    - `arr[ind]`, `arr["1"]` and `arr[1]` both same bcz finally value in [] is converted to string only
    - `arr.push(elem)`, `arr.pop()`, `arr.includes(elem)` -> bool, `arr.indexOf(elem)` -> returns ind, else -1
    - `arr.unshift(elem)` -> add elem at 0th pos
    - `arr.shift()` -> removes the 0th pos elem
    - `arr.join()` -> converts array to string -> every elem separated by ','

- IMP: **slice** v/s **splice** => *both returns a new Array*
    - *SLICE*
        - `const myArr1 = myArr.slice(st,end)` -> copied the part of array from ind: st to end-1 and return it.
        - original array => no change.
    - *SPLICE*
        - `const myArr2 = myArr.splice(st, deleteCnt)` -> from ind: st, starts removing deleteCnt no of elem from the original Array, and return those elem in an array
        - `const myArr3 = myArr.splice(st, deleteCnt, item1, item2,...)` -> from ind: st takes out deleteCnt no of elem from myArr and from st: insert item1, item2,.. into original Arr. \
    - eg: 
        - `const myArr = new Array(1,2,3,4,5)`
        - `const myArr1 = myArr.slice(1,3)` -> `[2,3], myArr -> same`
        - `const myArr2 = myArr.splice(1,3,"himadri", "das")` 
            - op: `myArr2 = [2,3,4]`
            - `myArr = [1,"himadri", "das", 5]` => even though we deleted 3 elem but we can add > 3 or < 3 elems into orgArr

- **concat** and **spread** operator -> *both returns a new array*
    - `const newArr = arr1.concat(arr2)`
    - `const newArr = [...arr1, ...arr2]` -> spread every elem of the individual array and combine them.
        - `**NOTE** : sqaure bracket in spread operator`
        - `const arr1 = [1,2,3,4]`, `const arr2 = [5,6,7,8]`
        - `const arr3 = [...arr1, ...arr2]` -> [1,2,....,8]

- *NOTE*: 
    - multiple nesting in a single array && we want to combine them in a single array -> `const newArr = arr.flat(Infinity)` -> flat(depth of maximum nesting) to be safe keep it INF
    - `Array.isArray(arr)` -> bool 
    - `Array.from(arr)` -> arr will be converted to an array 
        - *IMP*: `Array.from({name: "himadri"})` -> OP: [] bcz we haven't mentioned which one of key/value to be considered as array elem
    - `Array.of(elem1, elem2, elem3)` -> [1,2,3]