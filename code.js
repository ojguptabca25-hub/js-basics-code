var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);


let x = 10;
x = 20;
console.log(x);
const y = 10;
y = 20;

let college = "United University";
function show() {
    console.log(college);
}
show(); 


function test() {
    let x = 10;
    console.log(x);
}

test();
console.log(x);


if (true) {\
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y);
}
console.log(x); // Error


if (true) {
    var a = 10;
    let b = 20;
}
console.log(a); // 10
console.log(b); // Error


let college = "United University";
function teacher() {
    let subject = "JavaScript";
    function lecture() {
        let topic = "Scope";
        console.log(college);
        console.log(subject);
        console.log(topic);
    }
    lecture();
}
teacher();


let name = "Rahul";        // String
let age = 20;         // Number
let passed = true;         // Boolean
let x;        // Undefined
let y = null;          // Null
console.log(typeof name);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof x);
console.log(typeof y);
let big = 12345678901234567890n; // BigInt
let id = Symbol("id");     // Symbol
