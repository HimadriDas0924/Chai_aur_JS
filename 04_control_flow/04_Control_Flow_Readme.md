# truthy and falsy values

- eg: if(value) {} -> if value is truthy then if block is executed
- Falsy Values:
    - false, 0, -0, 0n, "", undefined, null, NaN
- Truthy values:
    - everything else: 
        - eg: "false", "undefined" -> bcz non empty string
        - eg: {}, [], function fn() {}

# how to check if array/ object returned by a fn is empty 

- `ArrayName.length === 0`
- `Object.keys(obj_name).length === 0`

# Nullish Coalescing Operator (??)

- IMP in places where `val1 = function_call1 ?? function_call2 ?? 10`
    - *if fun1 return null/UD -> go for returned val of fun2 -> if it also returns null/UD -> then go for 10*
- `let val1 = 5 ?? 10` // 5
- `let val1 = null ?? 15` // 15 
- `let val1 = undefined ?? 12 ?? 15` // 12: i.e 1st value after null/ undefined