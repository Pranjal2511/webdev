const even=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            sum +=(arr[i]*arr[i]);
            console.log(arr[i])
            
        }
    }
    return sum;
};
const number=[1,2,3,4,5,6,7,8,9]
console.log(even(number))