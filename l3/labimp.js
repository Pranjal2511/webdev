const sum=(...num) =>{
    total=0
    num.forEach((n)=>{
        total=total+n
    })
    console.log(num)
    console.log(total)
} 
 sum(1,2,3,4,5,6,7,8,9)

const csStudents=["Pranjal","Prashant","Piyush"]
const itStudents=["Avi","Prince","Aashu"]
const allstudent=[...csStudents,...itStudents]
console.log(allstudent)

//copy and update and object using the spread operatr
const student = {
    name: "Ayush",
    branch: "CS",
    year: 2
}
const updatedStudent = {
    ...student,
    year: 3,
    college: "KIET"
}
console.log(updatedStudent)

//demonstrate passing array elements as function arguments using spread

const numbers = [10, 20, 30]
const add = (a, b, c) => {
    console.log(a + b + c)
}
add(...numbers)

