let a = 10;
let b = 5;
let c = 2;

console.log(a+c-b);
console.log(a*b/c);
console.log(a%b);


let x =7;
console.log(x++ + ++x);
console.log(x-- - --x);


let num1 = 4;
let num2 = 5;
let result = num1+num2;
console.log("The result is: "+result);

let more = (a>b)>0;
console.log(more);
let or = c<10 || 10 == 2;
console.log(or);


let num11 = 10;
let num22 = '10'
console.log(num11 == num22);  // не учитовает тип данных
console.log(num11 === num22); // тип данных стр и нам они разные из за этого false


let d = 4;
let srovnenie = (d%2 == 0 || d%3 == 0)&& d%6 != 0; //true
console.log(srovnenie);


let e = 7;
let srovnenie1 = (10<e || e<5);
console.log (srovnenie1)
