// No 1
interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

const students: Student[] = [
  { name: "budi", email: "budi@mail.com", age: 20, score: 90 },
  { name: "joko", email: "joko@mail.com", age: 21, score: 80 },
  { name: "siti", email: "siti@mail.com", age: 22, score: 85 },
];

class CalculateStudent {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  calculate() {
    const scores = this.students.map((student) => student.score); // [90,80,85]
    const ages = this.students.map((student) => student.age); // [20,21,22]

    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);
    const avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
    };
  }
}

const calculateStudent = new CalculateStudent(students);
console.log(calculateStudent.calculate());

// No 2
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

interface Cart {
  product: Product;
  qty: number;
}

class Transaction {
  total: number;
  carts: Cart[];

  constructor() {
    this.total = 0;
    this.carts = [];
  }

  private formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  addToCart(product: Product, qty: number) {
    // 1. cek dulu di this.carts udah ada datanya atau belom
    const existingProduct = this.carts.find(
      (cart) => cart.product.name === product.name,
    );

    // 2. kalo udah ada tambahin qty nya aja
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      // 3. kalo belum tambahin product baru ke keranjang
      this.carts.push({ product, qty });
    }

    // 4. totalin harga dan qty yang ada di this.total
    this.total += product.price * qty;

    return "Add to cart berhasil";
  }

  showCart() {
    return this.carts;
  }

  showTotal() {
    return this.total;
  }

  checkout(userMoney: number) {
    if (userMoney < this.total) {
      return "Uang tidak cukup";
    }

    const result = {
      total: this.formatPrice(this.total),
      message: "Transaksi berhasil",
      kembalian: this.formatPrice(userMoney - this.total),
    };

    this.carts = [];
    this.total = 0;

    return result;
  }
}

const baju = new Product("baju", 100_000);
const celana = new Product("celana", 150_000);
const kemeja = new Product("kemeja", 200_000);

const transaction = new Transaction();

console.log(transaction.addToCart(baju, 4));
console.log(transaction.addToCart(baju, 4));
console.log(transaction.addToCart(celana, 2));

console.log(transaction.showCart());
console.log(transaction.showTotal());

console.log(transaction.checkout(1_200_000));
