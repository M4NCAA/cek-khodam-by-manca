let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

tombol.addEventListener("click", cekKhodam);

function cekKhodam() {
  nama.innerHTML = input.value;
  let angkaRandom = Math.floor(Math.random() * namaKhodam.length);
  hasil.innerHTML = `${namaKhodam[angkaRandom]}`;
}

const namaKhodam = [
  "Masako ayam",
  "Jomblo akut",
  "Sandal jepit ",
  "Nyi blorong ",
  "Rawa rontek",
  "Bandar bokep",
  "Katak sepuh",
  "Monyet raja ",
  "Kucing garong ",
  "Dukun beranak ",
];
