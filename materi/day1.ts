// versi JS
const message = "Hello";

// versi TS
const message2: string = "Hello";

console.log(message);
console.log(message2);

// windows: ctrl + k + q
// mac : cmd + k + q

// ============== STRING BUILT IN METHOD ==============
const name: string = "BuBdi Hello";
const name2: string = "Ucok";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.concat(name2));
console.log(name.concat(" ").concat(name2));
console.log(name + " " + name2);
console.log(name.slice(0, 3));
console.log(name.slice(1, 4));
console.log(name.split(""));
console.log(name.split(" "));

// ============== TEMPLATE LITERALS / TEMPLATE STRING ==============
const welcome: string = "Welcome";
const name3: string = "Jack";

console.log(welcome + " " + name3);
console.log(`${welcome} ${name3}`);

// ============== NUMBER BUILT IN METHOD ==============

const angka: string = "4000";

console.log(Number(angka));
console.log(parseInt(angka));

// ============== STRING CONVERSION ==============

const angka2: number = 5000;

console.log(String(angka2));
console.log(angka2.toString());

// ============== BOOLEAN CONVERSION ==============

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean("budi"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ============== DATE ==============
const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getMinutes());

// ============== BASIC OPERATOR ==============
/* 
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(4 * 2);
console.log(8 / 2);
console.log(9 % 2);
console.log(3 ** 2);

// ============== MODIFY IN PLACE ==============

let n: number = 4;

n += 2; // n = n + 2;

console.log(n);

// ============== INCREMENT & DECREMENT ==============
let counter: number = 1;

counter++; // increment
console.log(counter);

counter--; // decrement
console.log(counter);

// ============== COMPARISON OPERATOR ==============
/* 
    ==
    ===
    <
    >
    <=
    >=
*/

// console.log(2 == "2"); // pengecekan di valuenya saja
// console.log(2 === "2"); // pengecekan di value dan tipe data
console.log(2 < 5);
console.log(5 > 2);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 <= 5);

// ============== MATH ==============
// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.4));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(4, 3, 2, 7, 19, 70));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(4, 3, 2, 7, 19, 70));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-400));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());

// angka random 1 - 100
console.log(Math.floor(Math.random() * 100) + 1);

// Math.floor(Math.random() * (max - min + 1) + min)
const min: number = 12;
const max: number = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

console.log("testtt");
