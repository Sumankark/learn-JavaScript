let info = {
    name: "nitan",
    age: 29,
    isMarried: false,
  };
  
  // ["name","age","isMarried"] keys
  // ["nitan",29,false]  values
  // [["name","nitan"],["age","29"],["isMarried",false]]entries
  
  // let keyArr = Object.keys(info);
  // console.log(keyArr);
  
  // let valueArr = Object.values(info);
  // console.log(valueArr);
  
  let proArr = Object.entries(info);
  console.log(proArr);