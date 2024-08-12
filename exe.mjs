// map method 
// 

// let product = [
//     {name: "earphone" , price: 1000},
//     {name: "battery", price: 2000},
//     {name: "charger", price: 500}
// ]
// make a program to find the list of name only[earphone, battery, charger]
let product = [
    { name: "earphone", price: 1000 },
    { name: "battery", price: 2000 },
    { name: "charger", price: 500 },
  ];
  
  // Use the map function to extract the 'name' property from each object
  let namesOnly = product.map((value, i) =>{
    return value.name;
  })
  
  console.log(namesOnly);

  let productPrice = product.map((value, i) =>{
    return value.price;
  })
console.log(productPrice)
  
let priceG700 = product.filter((value, i) =>{
    if(value.price  > 700){
        return true;
    }
    else{
        return false;
    }
});

let productPriceG700 = priceG700.map((value, i) =>{
    return value.price;
});
 
console.log(productPriceG700)

let productNameG700 = priceG700.map((value, i) =>{
    return value.name;
})

console.log(productNameG700)

let productTotalPrice = productPrice.reduce((pre, cur) =>{
    return pre + cur;
}, 0)

console.log(productTotalPrice)


