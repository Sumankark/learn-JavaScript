let ar1 = [1, false, null, null,[1, 2], [1, 2], {name: "suman"},{name: "suman"}];

let uniqueValue = [...new Set(ar1)];

console.log(uniqueValue)

// set remove duplicate value if the value is primitive.
