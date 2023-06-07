// Q1)Create one function with zero parameter having a console statement;
function hello(){
    console.log("Hello World!")
}
hello();

//Q2)Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    s=a+b;
    return s;
}

console.log(`Sum of of 3, 4 is ${add(3,4)}`)

//Q3)Create one arrow function
const mul=(a,b)=>{
    m=a*b;
    return m;
}
console.log(`Multiplication of 3, 4 is ${mul(3,4)}`)

//Q4
// var x = 21;
//     var girl = function () {
//         console.log(x);
//         var x = 20;
//     };
//     girl ();


//Q5
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

//Q6

var x = 21;
a();
b();

function a(){
    x=20;
    console.log(x);
}
function b(){
    x=40;
    console.log(x);
}
console.log(x);


//Q7
var n=5;
console.log(`Factorial of ${n} is ${fact(n)}`);
fact(n)
function fact(n)
{
    let f=1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}

//DAY2
//Q1
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(20, 3));

//Q2

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

//Q3 
// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })
// ();

//Q4
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")