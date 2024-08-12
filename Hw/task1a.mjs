let input = "nitAn"
let ar1 = input.split("")

let outputAr1 = ar1.map((value, i)=>{
    if(i===0)
    {
        return value.toUpperCase();
    }
    else{
        return value.toLowerCase();
    
    }
})

let output = outputAr1.join("");
console.log(output)