function greet(sayGoodbye) {
    sayGoodbye();
  }
  
  function sayGoodbye() {
    var a = 1;
    console.log(a);
  }
  
  greet(sayGoodbye);
  