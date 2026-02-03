const user={
    firstName:"Pranjal",
    lastName:"Gautam",
    address:{
        city:"Lucknow",
        country:"India"
    }
}
// let a = user.firstName
// let b = user.lastName
// let c= user.address.city
// console.log(a)
// console.log(b)
// console.log(c)s
let{firstName:fn,lastName:ln,address:{city,country}} = user
//console.log(firstName,lastName)
console.log(fn,ln) //alliasing
console.log(city)
