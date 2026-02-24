import 'dart:io';

void main() {
  print("Enter the bill");
  var a = double.parse(stdin.readLineSync()!);
  var unit = 0.0;
  if (a >= 0 && a <= 100) {
    unit = a * 1.5;
    print(1.5);
  } else if (a >= 101 && a <= 200) {
    unit = a * 2.5;
    print(2.5);
  } else if (a >= 201 && a <= 300) {
    unit = a * 4.0;
    print(4.0);
  } else {
    unit = a * 5.0;
    print(5.0);
  }
  print(unit);
}


