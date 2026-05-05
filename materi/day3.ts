// ============= IF STATEMENT =============
/* 
    if(condition){
        code block
    }
*/

const age: number = 11;

if (age >= 17) {
  console.log("Anda bisa buat ktp");
}

// ============= ELSE STATEMENT =============
// backup plan dari if statement

const age2: number = 20;

if (age2 >= 17) {
  console.log("Anda bisa buat ktp");
} else {
  console.log("Anda belum bisa buat ktp");
}

// ============= ELSE IF STATEMENT =============

const grade: string = "test";

if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan");
} else if (grade === "C") {
  console.log("Nilai buruk");
} else {
  console.log("Nilai tidak diketahui");
}

// ============= SWITCH CASE =============
/* 
    switch(value){
        case value1:
            result
            break;
        case value2:
            result
            break
        default:
            result
            break
    }
*/

const day: string = "asdadadadsada";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak ditemukan");
    break;
}

// ============= LOGICAL OPERATOR =============
// && -> and
// || -> or
// ! -> not

// AND -> harus keduanya bernilai true agar menghasilkan nilai true
const umur: number = 18;
const punyaSIM: boolean = false;

if (umur >= 17 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// OR -> kalau salah 1 ada yang nilainya true, akan menghasilkan nilai true
const car: string = "bmw";

if (car === "bmw" || car === "mercy") {
  console.log("kendaraan eropa");
} else {
  console.log("kendaraan jepang");
}

// NOT -> membalikkan nilai boolean

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ============= TERNARY OPERATOR =============
// shortcut untuk penulisan if else condition
/* 
    condition ? true : false
*/

const str: string = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

// condition ? true : condition ? true : condition ? true : false

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
      ? "typescript"
      : "not found",
);

// ============= LOOP STATEMENT (perulangan) =============
// rangkaian instruksi yg dilakukan berulangkali hingga kondisinya tidak terpenuhi

// type : for loop, while loop, do while loop

/* 
    FOR LOOP -> mempunyai 3 statement
    statement 1 : menginisialisasikan variable dari looping itu sendiri
    statement 2 : mendefine kondisi dari looping tersebut
    statement 3 : kode yang di eksekusi diakhir setiap iterasi
*/

/* 
    for(statement1; statement2; statement3) {
        code block yang akan diulang
    }
*/

for (let i = 0; i < 10; i++) {
  console.log("Hello World");
}

// WHILE LOOP
/* 
    while(condition){
        code block yang akan diulang
    }
*/

let i: number = 11;

while (i < 10) {
  console.log("Hello world");

  i++;
}

// DO WHILE LOOP
/* 
    do {
        code block yang akan diulang
    } while (condition);
*/

let count: number = 1;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

// ============= BREAK =============
// untuk menghentikan loop

let sum: number = 0;

while (true) {
  console.log(sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

// ============= CONTINUE =============
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
