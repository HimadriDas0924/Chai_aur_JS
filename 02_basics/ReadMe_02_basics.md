# 2. Objects 

- 2 methods to declare objects
    - *Constructor* -> Object.create() -> singleton obj created
    - *object literals* -> obj = {} -> non-singleton obj created

- access property of object
    - Obj.key_name -> only mention name, no ""
    - Obj["key_name"] -> by default all {key,value} converted to string, so use "key_name" in []
    - eg: `obj = {name: "himadri", "full_name": "himadri das", age: 23}`
        - **CORRECT**: `obj.name`, `obj.full_name`, `obj["name"]`, `obj["full_name"]`
        - **ERROR**: `obj."full_name"`, `obj[name]`

- how to make a symbol act as an object:
    - `const mySym = Symbol("key1")`
    - `obj = {[mySym]: "my key 1"}` -> now mySym act as a symbol, not a string.
        - **ERROR**: `obj["mySym"]`, **CORRECT**: `obj.mySym`

- freeze an object: so that further no changes could be made in it, trying to make won't give error though
    - `Object.freeze(my_obj)`

- nested objects access -> `obj1.obj2.obj3.property1`
- *IMP*-> `obj3 = {...obj1, ...obj2}` -> get all the {key,values} of obj1,obj2 in obj3
- `Object.keys(obj1)` -> [containing all the keys of obj1]
- `Object.values(obj1)`, `Object.entries(obj1)` -> [[k1,v1], [k2,v2], ..]
- *IMP* -> `obj1.hasOwnProperty('isLoggedIn')` -> bool values return
    - check if obj has a property before accessing it