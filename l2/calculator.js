const calculator = (a, b, op) => {
  switch (op) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b !== 0 ? a / b : "Error: Divide by zero";

    default:
      return "Invalid operator";
  }
};

console.log(calculator(10, 5, "+")); 
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/")); 
