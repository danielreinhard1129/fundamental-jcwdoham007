// ================ ARRAY ================

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

const arrayOfString: string[] = ["A", "B", "C", "D"];
console.log(arrayOfString[0]);

const arrayOfNumber: number[] = [100, 200, 300, 1000];
console.log(arrayOfNumber[2]);

interface Student {
  hobby?: string;
  name: string;
  age: number;
}

type Student2 = {
  name: string;
  age: number;
};

const siswa: Student = {
  name: "Budi",
  age: 15,
};

console.log(siswa.name); // cara pertama untuk mengakses value dari object
console.log(siswa["hobby"]); // cara kedua untuk mengakses value dari object

// array of object
const students: Student2[] = [
  { name: "budi", age: 10 }, // 0
  { name: "joko", age: 10 }, // 1
  { name: "siti", age: 9 }, // 2
];

console.log(students[1].name);
console.log(students[2]["age"]);

// ================ FOR OF ================

const fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// ================ FUNCTION ================

// function declaration
/* 
    function namaFunc(){
        logic
    };
*/

function sayHello() {
  console.log("Hello World");
}

sayHello();

// function expression
/* 
    const namaFunc = function () {
        logic
    }
*/

const sayHello2 = function () {
  console.log("Hello World");
};

sayHello2();

// ================ FUNCTION SCOPE ================
// variable yg di define di dalam function, hanya bisa diakses didalam func tsb
function greeting() {
  const hello: string = "hello";

  console.log(hello);

  return hello;
}

console.log(greeting());
console.log(greeting());

// ================ PARAMETER & ARGUMENT ================
// parameter -> variable yang mewakili value dari argument yang di masukkan
// argument -> value yang dimasukkan saat pemanggilan function

function greeting2(name: string, company?: string) {
  const welcome: string = "Welcome";

  if (company) {
    return `${welcome}, ${name} from ${company}`;
  } else {
    return `${welcome}, ${name}`;
  }
}

console.log(greeting2("Budi", "Gojek"));
console.log(greeting2("Joko", "Grab"));
console.log(greeting2("Siti"));

// ================ DEFAULT PARAMETER ================
function multiply(a: number, b: number = 10) {
  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(3, 5));

// ================ REST PARAMETER ================
// mewakili sisa argument ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ================ NESTED FUNCTION ================
// fungsi yang berada di dalam fungsi
// inner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses parameter dari inner function

// outer func
function getMessage(firstName: string) {
  // inner func
  function sayHello() {
    return "Hello " + firstName + ", ";
  }

  // inner func
  function welcome() {
    return "Welcome to Purwadhika";
  }

  return sayHello() + welcome();
}

console.log(getMessage("Jack"));

// ================ RECURSIVE ================
// fungsi yang memanggil dirinya sendiri

function countdown(angka: number) {
  console.log(angka);

  let nextNumber = angka - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// ================ ARROW FUNCTION ================
// shortcut untuk menuliskan function expression
/* 
    const namaFunc = () => {}
*/

// func expression
const square = function (angka: number) {
  return angka * angka;
};

// arrow func
const square2 = (angka: number) => {
  return angka * angka;
};

// kalo cmn 1 line bisa disingkat
const square3 = (angka: number) => angka * angka;

// ================ ARRAY BUILT IN METHOD ================
// JOIN -> menggabungkan value yang ada dalam array ke bentuk string
const words: string[] = ["hello", "world", "test"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["hello", "world", "test"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "test"];
console.log(words4);
words4.unshift("budi");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling belakang array
const words5: string[] = ["hello", "world", "test"];
console.log(words5);
words5.push("siti");
console.log(words5);

// SPLICE -> menghapus, mengganti atau menambahkan value pada array
// syntax -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];

// menambahkan data
months.splice(1, 0, "feb");
console.log(months);

// menghapus data
months.splice(4, 1);
console.log(months);

// mengganti data
months.splice(3, 1, "may");
console.log(months);

// SORT -> mengurutkan isi array berupa string / number
const fruits2: string[] = ["banana", "orange", "apple", "mango"];
fruits2.sort();
console.log(fruits2);
console.log(fruits2.reverse());

const numbers: number[] = [4, 2, 5, 8, 9, 10];
numbers.sort((a, b) => a - b); // asc
// numbers.sort((a, b) => b - a); // desc
console.log(numbers);

// INCLUDES -> mengecek value pada array ada atau tidak. hasilnya boolean
const fruits3: string[] = ["banana", "orange", "apple", "mango"];
console.log(fruits3.includes("apple"));

// MAP -> melakukan looping pada array dan akan mereturn array baru
const points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = points.map((point, idx) => {
  console.log(idx);

  return point * 2;
});

console.log(result);

const students2 = [
  { id: 1, name: "budi" },
  { id: 2, name: "joko" },
  { id: 3, name: "siti" },
];

// [1, 2, 3]
const result2 = students2.map((student) => {
  return student.id;
});

console.log(result2);

// FOREACH -> melakukan looping pada array tapi tidak me return array baru
const fruits4: string[] = ["banana", "orange", "apple", "mango"];

fruits4.forEach((fruit, index) => {
  console.log(fruit);
  console.log(index);
});

// FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi pada return functionnya
const ages: number[] = [12, 44, 66, 32, 17, 20, 56];

const result3 = ages.filter((age) => {
  return age > 20;
});

console.log(result3);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [12, 44, 66, 32, 17, 20, 56];

const result4 = ages2.find((age) => {
  return age === 100;
});

console.log(result4);

// FIND INDEX -> sama kaya find tapi yang dihasilkan adalah indexnya. kalo tidak ketemu akan menghasilkan -1
const students3 = [
  { id: 100, name: "budi" },
  { id: 101, name: "joko" },
  { id: 102, name: "siti" },
  { id: 103, name: "siti" },
  { id: 104, name: "siti" },
];

const result5 = students3.findIndex((student) => {
  return student.id === 105;
});

console.log(result5);

// REDUCE ->

const numbers2: number[] = [200, 50, 100, 50];

const result6 = numbers2.reduce((a, b) => {
  return a + b;
});

console.log(result6);
