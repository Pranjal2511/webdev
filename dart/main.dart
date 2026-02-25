void main() {
  fetchData();
}

void fetchData() async {
  print("data is loading...");
  getData().then((data) {
    print(data);
  });
  print("Data Loading Successfully");
}

Future<String> getData() async {
  await Future.delayed(Duration(seconds: 4));
  return "Data is Loaded.";
}