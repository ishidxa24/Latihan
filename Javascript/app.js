// // output penulisan javascript

// // console.log("Hello World!");

// // // Menampilkan pop pada web
// // alert("Hello World!");

// // // prompt mengeluarkan dialog untuk meminta input dari user
// // prompt("Masukkan nama Anda:");

// // mendeklarasikan variabel
// // var, let, const
// // var sudah jarang digunakan, lebih baik menggunakan let atau const

// // let nama = "Adi Kusuma"; // variabel yang bisa diubah
// // let kotafavorit = "Jakarta"; // variabel yang bisa diubah
// // const tanggalLahir = "12 maret 2005"; // variabel yang tidak bisa diubah
// // const umur = "20"; // variabel yang tidak bisa diubah

// // kotafavorit = "Bandung"; // variabel bisa diubah
// // nama = "Adi"; // variabel bisa diubah

// // console.log(nama);
// // console.log(umur);

// // console.log(tanggalLahir);
// // console.log(kotafavorit);

// // number
// // let nomer = 10; // tipe data number
// // let berat = 20; // tipe data number
// // let nan = "abc"; // tipe data string

// // // boolean
// // let benertidak = 1 > 2; // tipe data boolean

// // // undefined
// // let tidakada; // tipe data undefined

// // // null
// // let kosong = null; // tipe data null

// // Data non primitif

// // tipe data object
// let saya = {
//     nama: "Adi Kusuma",
//     umur: 20,
//     kotafavorit: "Jakarta",
//     hobi: ["membaca", "menulis", "bermain game"],
//     Game : {
//         pagi : 'Cs2',
//         malam : 'Dota2',
//     },
//     alamat: {
//         jalan: "Jl. Raya No. 1",
//         kota: "Jakarta",
//         provinsi: "DKI Jakarta"
//     },
//     isnikah: false,

//     hitungUmur: function() {
//         console.log(`hallo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`); // backtick untuk string template penggunaan $ hanya untuk backtick
//         // this digunakan jika ada object di dalam object
//     }
// }

// let indomie = {
//     rasa: "Ayam Bawang",
//     harga: 3000,
//     kemasan: "Cup",
//     isHalal: true,
//     stok: 100,
// }

// console.log(`indomie rasa`);

let makananmie = {
  nama: "Indomie",
  harga: 3500,
  varianMie: ["Ayam Bawang", "Soto Mie", "Mi Goreng", "Kari Ayam"],
  rasafavorit: "Ayam Bawang",
  rasafavorit2: "Soto Mie",

  favorit: {
    rasa1: "Ayam Bawang",
    rasa2: "Soto Mie",
    rasa3: "Mi Goreng",
  },

  mie: function () {
    console.log(
      `Mie favorit saya adalah ${this.rasafavorit} dan ${this.rasafavorit2}.`
    );
  }
}

console.log(makananmie.nama);
makananmie.mie();
