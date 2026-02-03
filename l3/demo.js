const student={
    name:"Pranjal",
    age:20,
    city:"Lucknow",
    country:"India"
}

function ShowStudent({name,age,city}){
    console.log("Name: ",name);
    console.log("Age: ",age);
    console.log("City: ",city);
}
ShowStudent(student)