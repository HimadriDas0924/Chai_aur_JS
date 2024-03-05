## for of v/s for in
- *FOR OF*
    - to iterate the values of array and maps
    - map: contain unique key,value pair => `const myMap = new Map(), myMap.set(key,value)`
    - iterate map: for(const val of myMap): but val rep the whole [key,value] => so just destructure the array
    - `for(const [k,v] of myMap)`

- *FOR IN*
    - to iterate the keys of an object
    - `for(const key in myObj) {console.log(`key: ${key}, value: ${myObj[key]}`)}`

### Higher Order Functions: 
- *FOR EACH*, *FILTER*, *MAP*, *REDUCE* => present in the prototye of Array.

    - **FOR EACH :**
        - *for each elem of the array, executes a cb fn*
        - `DOESN'T return anything` i.e *returns undefined*
        - `ArrayName.forEach((item) => console.log(item)`
        - also takes other args: **NOTE:** `ArrayName.forEach((item, index, arr) => some oper)`

    - **FILTER :**
        - *returns a **`shallows copy`** of array containing elem that passes the condition*
        - `const passedCond = ArrayName.filter((item) => item > 4)`
        - or if item is an object: `ArrayName.filter((obj) => obj.subject == "Maths")`
            - *returns all the objects* in which subject == "MATHS"
    
    - **MAP :**
        - returns **`Shallow copy`** of the Array with **all the elem modified** = result of some fn called on the ith elem.
        - `const modifiedArray = ArrayName.map((item) => item + 10)`
            - new array contains : [a0 + 10, a1 + 10, ...., an-1 + 10]

    - **REDUCE :**
        - Calls reducer fn() on each elem: 
            - And returns and store the **`ans of the ith itern back into the accumulator variable for the next itern`**.
        - **Result** of Array.reduce() = **`return value from the last itern of reducer()`**.
        - **USE CASE:** *for the ith elem > you want to use the result generated till the i-1th ind*.
        - eg: arr = [1,2,3], `const totSum = arr.reduce((accumulator, item) => (accumulator + item), 0)` 
            - 0th itern: accumulator = 0, item = 1 && res = 1 which is stored in accumulator.
            - 1th itern: accumulator = prev itern return val = 1, item = 2 && accumulator = 1 + 2.
            - 2th itern: accumulator = 3, item = 3 && accumulator = 3+3
            - Return value i.e value in accumulator = 3+3 = 6
        - eg: arr = [1,2,3,4,5,6,7]: find sum of square of all the elem of the array
            -> `let totSum = arr.reduce((acc, item) => ((item*item) + acc), 0)`