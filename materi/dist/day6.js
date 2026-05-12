"use strict";
// ============== OBJECT ==============
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_instances, _Vehicle_chassisNumber, _Vehicle_test;
Object.defineProperty(exports, "__esModule", { value: true });
const obj1 = {}; // cara 1
const obj2 = new Object(); // cara 2
const user = {
    name: "jordan",
    job: "programmer",
    address: {
        street: "",
        city: "",
        postalCode: "",
    },
    hobby: ["mancing", "renang", "ngoding"],
    makan() {
        console.log("makan");
    },
};
console.log(user.name);
console.log(user["job"]);
user.makan();
// ============== ADD PROPERTY ==============
const person = {
    name: "jack",
    age: 30,
};
console.log(person);
person.hobby = "ngoding";
console.log(person);
person["address"] = "Jakarta";
console.log(person);
// ============== DELETE PROPERTY ==============
delete person.name;
console.log(person);
// ============== IMMUTABLE & MUTABLE ==============
/*
    immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat (primitive data types)
    mutable: merujuk pada tipe data yang bisa diubah setelah dibuat (non primitive data types)
*/
// immutable
let count = 10;
let count2 = count;
count2 = 20;
console.log(count);
console.log(count2);
// mutable
const orang1 = { name: "budi" };
// const orang2: any = orang1;
const orang2 = { ...orang1 }; // shallow copy
orang2.age = 30;
console.log(orang1);
console.log(orang2);
// ============== OPTIONAL CHAINING ==============
const user2 = {};
console.log(user2.address);
console.log(user2.address?.street);
// ============== FOR IN ==============
const person2 = {
    name: "siti",
    age: 20,
    hobby: "ngoding",
};
for (const key in person2) {
    console.log(key);
    console.log(person2[key]);
}
// ============== DESTRUCTURING ASSIGNMENT ==============
// mengeluarkan property dalam object/array menjadi variable
// versi object
const animal = {
    name: "joe",
    age: 2,
};
console.log(animal.name);
console.log(animal.age);
const { name, age } = animal;
console.log(name);
console.log(age);
// versi array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);
const [a, b] = array;
console.log(a);
console.log(b);
// ============== SPREAD OPERATOR ==============
// digunakan untuk copy isi object / menggabungkan object
const objectOne = { name: "budi", email: "budi@mail.com" };
const objectTwo = { password: "Admin123", name: "joko" };
const result = { ...objectOne, ...objectTwo };
console.log(result);
// ============== THIS KEYWORD ==============
// mengakses preperty lain di dalam object
const person3 = {
    firstName: "jack",
    lastName: "blake",
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    },
};
person3.greet();
// ============== CLASS ==============
// template / cetakan untuk membuat object
// class declaration
class Person {
    greet() {
        console.log("hello");
    }
}
// class expression
const Person2 = class {
    greet() {
        console.log("hello");
    }
};
const human = new Person();
const human2 = new Person();
human.greet();
human2.greet();
// ============== CONSTRUCTOR ==============
// method bawaan dari class yang akan dijalankan pertama kali saat menbuat object baru
class Vehicle {
    constructor(brand, type, chassisNumber) {
        _Vehicle_instances.add(this);
        _Vehicle_chassisNumber.set(this, void 0); // private
        this.brand = brand;
        this.type = type;
        __classPrivateFieldSet(this, _Vehicle_chassisNumber, chassisNumber, "f");
    }
    start() {
        __classPrivateFieldGet(this, _Vehicle_instances, "m", _Vehicle_test).call(this);
        return `${this.brand} ${this.type} engine started!`;
    }
}
_Vehicle_chassisNumber = new WeakMap(), _Vehicle_instances = new WeakSet(), _Vehicle_test = function _Vehicle_test() {
    console.log("test");
};
const kendaraan = new Vehicle("Toyota", "Avanza", "12312312123");
console.log(kendaraan.brand);
console.log(kendaraan.type);
console.log(kendaraan.start());
// console.log(kendaraan.#chassisNumber);
// console.log(kendaraan.#test());
const kendaraan2 = new Vehicle("Honda", "Brio", "321321321312");
console.log(kendaraan2.brand);
console.log(kendaraan2.type);
console.log(kendaraan2.start());
// console.log(kendaraan2.#chassisNumber);
// ============== INHERITANCE ==============
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa diakses oleh child class
// TIDAK MENGGUNAKAN INHERITANCE
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
// MENGGUNAKAN KONSEP INHERITANCE
class Employee2 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager2 extends Employee2 {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
}
const manager = new Manager2("Budi", 5000000, "HR");
console.log(manager.name);
console.log(manager.salary);
console.log(manager.department);
console.log(manager.work());
