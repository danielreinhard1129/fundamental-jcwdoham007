console.log("Hello World");

// ini adalah comment 1

/* 
    ini 
    adalah
    comment 2
*/

// =================== VARIABLE ===================
// storage / penampungan data
// var, let, const

var person = "Budi";
console.log(person);

let person2 = "Siti";
person2 = "Joko";
console.log(person2);

const person3 = "Jack";
// person3 = "Test"; // ini gak bisa
console.log(person3);

// =================== VARIABLE NAMING ===================
/*
- must contain only letters, digit, or symbol "$" and "_"
- the first character must not digit
- case sensitive
*/

const companyName = "Purwadhika"; // camel case
const CompanyName = "Purwadhika"; // pascal case
const company_name = "Purwadhika"; // snake case

// =================== DATA TYPES ===================
// primitive data types : string, number, boolean, null dan undefined
// non primitive data types : object dan array

// string -> "" '' ``
console.log("Hello");
console.log('Hello');
console.log(`Hello`);

// number -> 1 2 3 10 25 1000
console.log(1);
console.log(1.5);
console.log(10);
console.log(40);
console.log(-40);

// boolean -> true or false
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined -> js tidak tau isinya
let orang2 = undefined;
