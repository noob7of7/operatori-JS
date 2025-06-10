let a = 10;
let b = 5;
let c = 2;

console.log(a+c-b); //7
console.log(a*b/c); //25
console.log(a%b); //0


let x =7;
console.log(x++ + ++x); //16
console.log(x-- - --x); //2


let num1 = 4;
let num2 = 5;
let result = num1+num2; //4+5
console.log("The result is: "+result); //The result is: 9

let more = (a>b)>0;
console.log(more); //True
let or = c<10 || 10 == 2;
console.log(or); //true


let num11 = 10;
let num22 = '10'
console.log(num11 == num22);  // не учитовает тип данных
console.log(num11 === num22); // тип данных стр и нам они разные из за этого false


let d = 4;
let srovnenie = (d%2 == 0 || d%3 == 0)&& d%6 != 0; //true
console.log(srovnenie); //true


let e = 7;
let srovnenie1 = (10<e || e<5);
console.log (srovnenie1) //false