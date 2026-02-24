import 'dart:io';
void main() {
  print("Simple Calculator");
  stdout.write("Enter first number: ");
  double num1 = double.parse(stdin.readLineSync()!);
  stdout.write("Enter operator (+, -, *, /): ");
  String operator = stdin.readLineSync()!;
  stdout.write("Enter second number: ");
  double num2 = double.parse(stdin.readLineSync()!);
  double result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      print("Result: $result");
      break;
    case '-':
      result = num1 - num2;
      print("Result: $result");
      break;
    case '*':
      result = num1 * num2;
      print("Result: $result");
      break;
    case '/':
      if (num2 != 0) {
        result = num1 / num2;
        print("Result: $result");
      } else {
        print("Error: Division by zero is not allowed.");
      }
      break;
    default:
      print("Invalid operator selected.");
  }
}