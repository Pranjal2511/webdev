void main() {
  fetchData();
}

void fetchData() {
  print("Data is loading");

  Future.delayed(Duration(seconds: 5)).then((abc) {
    print("Data is displayed after 5 sec");
  });
    print("Doing some other operation");
}