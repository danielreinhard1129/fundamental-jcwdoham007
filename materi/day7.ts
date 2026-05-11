function test() {
  for (let i = 0; i < 10; i++) {
    console.log("testt");
  } // O(n)

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; i++) {
      console.log("testt");
    }
  } // O(n2)

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; i++) {
      for (let k = 0; k < 10; i++) {
        console.log("testt");
      }
    }
  } // O(n3)
}

// ========== MAP ==========

const myMap = new Map();

myMap.set("name", "John");
myMap.set("address", "Jakarta");

console.log(myMap.get("address"));
console.log(myMap.get("name"));

console.log(myMap.has("asdasdasda"));

console.log(myMap.has("address"));
myMap.delete("address");
console.log(myMap.has("address"));

// ========== Set -> only unique values ==========

const fruits: string[] = ["apple", "mango", "apple", "orange"];

const mySet = new Set(fruits);

console.log(mySet);

console.log(Array.from(mySet));

console.log(mySet.size);

/*
    No 1
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"

    =============================================
    No 2

    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/
