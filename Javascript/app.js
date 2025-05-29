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

// latihan
// let makananmie = {
//   nama: "Indomie",
//   harga: 3500,
//   varianMie: ["Ayam Bawang", "Soto Mie", "Mi Goreng", "Kari Ayam"],
//   rasafavorit: "Ayam Bawang",
//   rasafavorit2: "Soto Mie",

//   favorit: {
//     rasa1: "Ayam Bawang",
//     rasa2: "Soto Mie",
//     rasa3: "Mi Goreng",
//   },

//   mie: function () {
//     console.log(
//       `Mie favorit saya adalah ${this.rasafavorit} dan ${this.rasafavorit2}.`
//     );
//   },

//   indomieenak: function () {
//     console.log (`Indomie dengan harga Rp.${this.harga} bikin saya ketagihan!`);
//   }
// }

// makananmie.mie();
// makananmie.indomieenak();

// array
// let buah = ["apel", "jeruk", "mangga", "pisang", "anggur"];
// buah[2] = "kiwi"; // mengubah nilai pada indeks ke-2
// buah.push("semangka"); // menambahkan elemen baru ke akhir array


// console.log(`saya punya ${buah.length} buah yaitu: ${buah[0]}, ${buah[1]}, ${buah[2]}, ${buah[3]}, ${buah[4]} dan ${buah[5]}.`);

// Operator aritmatika

// let alas = prompt("Masukkan panjang alas jajargenjang: ");
// let tinggi = prompt("Masukkan tinggi jajargenjang: ");
// let luas = alas * tinggi;

// alert(`luas jajargenjang adalah ${alas} * ${tinggi} = ${luas}`);

// operator penugasan
// let a = 10;

// a *= 2;

// console.log(`Hasil penugasan a += 5 adalah ${a}`) 

// operator perbandingan
// let a = 10
// let b = 5
// let c = '10'
// let d = null

// console.log(a !== c )

// operator logika
// && (AND) true jika sama kedua operand true
// || (OR) true jika salah satu operand true
// ! (NOT) membalik nilai boolean

// Contoh
// let dewasa = true;
// let bawaMobil = true;
// let punyaSim = false;

// console.log(`Umurnya udah cukup?`, dewasa && bawaMobil);
// console.log(`Boleh bawa mobil`, dewasa && bawaMobil && punyaSim);


// object
// let saya = {
//   nama: "Adi Kusuma",
//   dewasa : false,
//   punyaTiket : false,
//   punyaKTP: false,
// }

// console.log(`Belum punya ktp?`, !saya.dewasa && !saya.punyaKTP );
// console.log(`Udah boleh masuk?`, !saya.dewasa || !saya.punyaTiket || !saya.punyaKTP);
// console.log(`nama anda siapa? ${saya.nama} udah punya tiket?`, saya.dewasa && saya.punyaTiket);

// operator terner

// let usia = 20

// let status = (usia>=17) ? 'Anda sudah dewasa' : 'Anda belum dewasa';
// console.log(status)


let usia = 10;
let input = prompt("Umur andi berapa ya");
let status = (usia>= 15) ? 'Anda boleh makan mie' : 'Anda belum boleh makan mie';
console.log(status);