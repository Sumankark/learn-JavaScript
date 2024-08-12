export let ticketCose =(age)=>{
    if(age >= 1 && age <= 17){
        return "Your ticket is free"
    }
    else if(age <= 25){
        return "Your ticket cost 100"
    }
    else{
        return "Your ticket cost 200"
    }
}