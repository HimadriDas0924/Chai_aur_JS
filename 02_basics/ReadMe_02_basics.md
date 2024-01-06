# 2. Objects 

- 2 methods to declare objects
    - *Constructor* -> Object.create() -> singleton created
    - *object literals* -> obj = {} -> no singleton created

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