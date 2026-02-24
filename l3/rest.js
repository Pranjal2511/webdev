const sum=(...num) =>{
    total=0
    num.forEach((n)=>{
        total=total+n
    })
    console.log(num)
    console.log(total)


} 
sum(1,2,3,4,5,6,7,8,9)


function showDetails(name,...skills){
    console.log(name)
    console.log(skills)
}
showDetails("Pranjal","C","c++","JAva")