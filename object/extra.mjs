// this(operator).
// this operator are those which point itself.
// dif between arrow function and normal function.
// arrow function doesn't support this operator but the normal function does.

let info ={
    name: "nitin",
    surname: "thapa",
    age: 29,
    fullDetails: function(){
        console.log(`My name is ${this.name} ${this.surname}. i am ${this.age}`);
        console.log(`${this.info1.address}`)
    },
    info1:{address: "gagal"},
    favFood:["apple", "banana"],

};

console.log(info.name);
info.fullDetails();
