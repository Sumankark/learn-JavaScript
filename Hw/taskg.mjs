export let age = (a)=>{
    if(a <= 17){
        console.log("Your ticket is free")
    }
    else if(a >= 18 && a <=25){
        console.log("Your ticket cost is 100.")
    }
    else if(a === 26){
        console.log("Your ticket is 150")
    }
    else{
        console.log("Your ticket cost is 200.")
    }
}