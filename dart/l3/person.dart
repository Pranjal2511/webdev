// class Person {
//   String? name;
//   int? age;
//   String? city;

//   Person(this.name, this.age,  this.city);

//     void display() {
//     print("$name $age $city");
//   }
// }

// void main(){
//   Person p1 = Person("Ramesh", 38, "Lucknow");

//     p1.display();
//   }

class Person {
  String? name;
  int? age;
  String? _city;

  Person(this.name, this.age);
  set setCity(String city) {
    _city = city;
  }

  get getCity {
    return _city;
  }

  display() {
    print("$name $age ");
  }
}


