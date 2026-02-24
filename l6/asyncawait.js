const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(error){
            resolve({username:"Pranjal",pass:123})
        }
        else{
            reject("Something went wrong")
        }
    }, 3000);
})
async function consumepromiseOne(){
    try{
    const response= await promiseOne
    console.log(response) 
    }
    catch(error){
        console.log(error)
    }
}
consumepromiseOne()




