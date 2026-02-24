    function checkLogin(callback){
        setTimeout(() => {
        console.log("User is login in to the application")
            callback()
        
    },3000);
}
function verifyCart(callback){
    setTimeout(() => {
        console.log("User verify cart")
        callback()
    }, 3000);
}
function proceedToPayment(callback){
    setTimeout(() => {
        console.log("Payment Done")
        callback()
        
    }, 3000);
}
function placeOrder(callback){
    setTimeout(() => {
        console.log("Order placed")
        callback()
        
    }, 3000)
}
checkLogin(() => {
    verifyCart(()=>{
        proceedToPayment(()=>{
            placeOrder(() => {
                console.log("All task Completed")
            })
        })
    })
})