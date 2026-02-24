function greet(name,callback1,callback2){
    console.log("Hello",name)
callback1()
callback2()
}
function sayBye(){
    console.log("Bye Bye")
}

function sayThanks(){
    console.log("Thanks")
}

greet("Monitor",sayBye,sayThanks)


//witoutt call back


function greet(name){
    console.log("Hello",name)

}
function sayBye(){
    console.log("Bye Bye")
}

function sayThanks(){
    console.log("Thanks")
}

greet("Monitor")
sayBye()
sayThanks()
