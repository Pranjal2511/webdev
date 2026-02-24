//  new Promise(function(resolve,reject){
//     setTimeout(() => {
//        console.log("Doing asynchronous task") 
//        resolve()
//     },2000 );
// })
// .then(function(){
//     console.log("Promise executed")
// })


//Method 2

// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout (() => {
//         console.log("Doing asynchronous task") 
//         resolve({username:"Ram",id:111});
        
//     }, 3000);
// })
// promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.username

// })
// .then((username)=>{
//     console.log(username)
// })



//error




let promiseOne = new Promise(function(resolve, reject){
    let error = true
    if(!error){
        resolve({ username: "Ramesh", id: 223 })
    } else {
        reject("Something went wrong")
    }
})

promiseOne
.then(function(u1){
    console.log(u1)
    return u1.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
