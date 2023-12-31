## Chai_aur_JS
JS revision


NOTES:

6. # Number and Maths
    
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

-   Math.floor(3.95) // 3
    Math.ceil(3.11) // 4
    Math.PI.toFixed(2) // 3.14
    Math.min(2,3,4,1,4,53,1) // 1, sim we have Math.max()
    Math.abs(-2) // 2
    Math.sqrt(25) // 5
    Math.pow(2,4) // 16
    
-   `const min = 10`
    `const max = 30`
    `console.log( Math.floor(Math.random() * (max - min + 1) ) + min);`

    *NOTE: Math.random()*(max-min+1) => always between [0,21) i.e [0, diff+1) 
    => floor it => value always between [0 to (max-min)]*
