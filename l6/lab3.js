const promiseOne = new Promise(function(resolve,reject){
    const condition=false
    setTimeout(() => {
        if(condition){
            resolve("Success: Promise resolved")
        }
        else{
            reject("Error: Condition failed")
        }
    }, 2000);
})
promiseOne
.then((message)=>{
    console.log(message)
} )
.catch((error)=>{
    console.error(error)
})





