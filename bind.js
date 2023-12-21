
// function greet() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const person = { name: "Alice" };

// const boundGreet = greet.bind(person); // Creates a new function with the context set to 'person'

// boundGreet(); // Output: Hello, my name is Alice

function a(b,c){
  return b+c
  
}
const v=a.bind(this,12,4)
console.log(v());