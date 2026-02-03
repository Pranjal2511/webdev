// const obj={
//     name:"Rahul",
//     normalFn:function(){
//     console.log("Normal:",this.name);
//     },
//     arrowFn:()=>{
//         console.log("Arrow:",this.name);
//     }
// };
// obj.normalFn();
// obj.arrowFn();


//lexical scope of 'this'

const obj = {
    name:"Rahul",
    showName: function(){
        const arrowFn= () =>{
            console.log("Arrow:",this.name);
        }
        arrowFn();
    }
};
obj.showName();