export let input = (num)=> {
    if(num >= 1 && num <=10){
        return "category1"
    }
    else if(num >= 11 && num <=20){
        return "category2"
    }
    else if(num >= 21 && num <= 30){
        return "category3"
    }
    return
}