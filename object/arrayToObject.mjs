// ["name", "age", "isMarried"]

// [["name", "nitin"], ["age", 29], ["isMarried", "false"]]


let ar = [
    ["name", "nitin"],
    ["age", "29"],
    ["isMarried", "false"]
];

let info = Object.fromEntries(ar);

console.log(info);