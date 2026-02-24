import 'dart:io';

void main() {
  var age = int.parse(stdin.readLineSync()!);

  if (age >= 18) {
    print("Eligble for voting");
  } else {
    print("not eligble");
  }
}
