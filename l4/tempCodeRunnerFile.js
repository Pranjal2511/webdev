function greet(name="Gautam"){
    console.log("Hello : "+name);
}
greet("Pranjal")
greet()


let marks = [80]
let [math = 0, science = 0] = marks;
console.log(math)
console.log(science)

let data = []
let [a = 10, b = 20] = data;
console.log(a);
console.log(b)