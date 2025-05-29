let angka = prompt('masukan angka');
let angka2 = prompt('masukan angka ke 2');
let operator = prompt('Masukkan operator (+, -, *, /):');

let hasil;

switch (operator) {
    case '+':
        hasil = Number(angka) + Number(angka2);
        break;
    case '-':
        hasil = Number(angka) - Number(angka2);
        break;
    case '*':
        hasil = Number(angka) * Number(angka2);
        break;
    case '/':
        hasil = Number(angka) / Number(angka2);
        break;
    default:
        hasil = 'hasilnya salah dik';
        break;
}

alert(`Hasil: ${hasil}`);

