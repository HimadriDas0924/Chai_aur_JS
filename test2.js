class MyClass {
    constructor() {
      // This is the constructor variable
      this._value = 0;
    }
  
    // Getter
    get value() {
      return this._value;
    }
  
    // Setter
    set value(newValue) {
      // Perform some validation or other operations here if needed
      this._value = newValue;
    }
}
  
  const obj = new MyClass();
  
  // Using the getter and setter
  obj.value = 10; // Calls the setter
  console.log(obj.value); // Calls the getter
  