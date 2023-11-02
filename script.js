let myGreeting = "Hello, how are you?"
console.log(myGreeting);

const pi = 3.14;

//pi = 2;
//We're unable to reassign the value of "pi" since its a constant and can't be changed.
let myNumber = 7;

console.log(Math.min(myNumber, pi));
//It unable to excute the code because of the attempt to override its original value.
//But if line 6 is deleted or //, the code will execute and return the minimum value, which is 3.14 (value of pi).