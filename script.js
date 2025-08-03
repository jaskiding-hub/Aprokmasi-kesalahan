// Ne untuk tampilan gas, de ne ubah ci
function switchMode(mode, el) {
  document
    .querySelectorAll(".submenu-item")
    .forEach((i) => i.classList.remove("active"));
  document
    .querySelectorAll(".menu-item")
    .forEach((i) => i.classList.remove("active"));

  if (el) el.classList.add("active");

  document
    .querySelectorAll(".content-section")
    .forEach((c) => c.classList.remove("active"));
  document
    .querySelectorAll(".kalkulator")
    .forEach((k) => k.classList.remove("active"));

  document.getElementById("content-" + mode).classList.add("active");
  document.getElementById("calc-" + mode).classList.add("active");
}

const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});






// Ne mare kalkulator ne, otak atik be dini
function pembulatansatuan() {
  let angka=parseFloat(document.getElementById("nilaisatuan").value);
  let hasil=parseInt(angka+0.5)
  document.getElementById("hasilsatuan").innerText = "hasil : "+hasil;
}

function pembulatanDesimal() {
  let angka =parseFloat(document.getElementById("inputdesimal").value);
  let jumlahdesimal =parseInt(document.getElementById("jumlahdesimal").value)
  let pangkat =Math.pow(10,jumlahdesimal);
  let hasil =parseInt(angka*pangkat+0.5)/pangkat;
  document.getElementById("hasildesimal").innerText = "Hasil : "+hasil;
}

function pembulatanangkapenting(){
    let angka = parseFloat(document.getElementById("inputangka3").value);
    let angkapenting = parseInt(document.getElementById("jumlahangkapenting").value);

    let angkapositif = angka;
    if(angka <0){
        angkapositif = -angka //memastikan agar angka gak ada yg minus
    }

    let pangkat = 0; //menyimpan berpa kali dibagi 10 atau dikali 10
    let wadahsementara=angkapositif; //untuk mencari pangkat berapa

    if(wadahsementara>=10){ //jika angka lebih besar dari 10 akan dibagi 10 terus sampai lebih kecil dari 10
        while(wadahsementara>=10){
        wadahsementara = wadahsementara/10;
        pangkat++;
        }
    }else if(wadahsementara>0 && wadahsementara<1){//jika <1 maka akan dikali 10 sampai >1
        while(wadahsementara<1){
            wadahsementara=wadahsementara*10;
            pangkat--;
        }
    }//untuk mengetahui posisi angka penting misal 10^-2 (0.0 ...)

    let faktor = Math.pow(10, pangkat-angkapenting+1) //mencari bilangan untuk membuat angka penting didepan
    angka=angka/faktor; //membagi angka desimal dengan faktor agar angka penting muncul didepan koma
    let hasil=parseInt(angka+0.5); //membulatkan angka desimal dan menjadikan bilangan bulat
    hasil=hasil*faktor;//angka yang sudah bulat dikalikan dengam faktor agar kembali ke posisi semula

    document.getElementById("hasilAP").innerText = "Hasil : "+hasil;
}


function hitungMutlak() {
  const satuan = parseFloat(document.getElementById("satuanTerkecil").value);
  document.getElementById("hasilMutlak").innerText = "Δx = " + 0.5 * satuan;
}

function hitungRelatif() {
  const mutlak = parseFloat(document.getElementById("kesalahanMutlak").value);
  const nilai = parseFloat(document.getElementById("nilaiPengukuran").value);
  document.getElementById("hasilRelatif").innerText ="Hasil = " + mutlak / nilai;
}

function hitungPersen() {
  const relatif = parseFloat(document.getElementById("kesalahanRelatif").value);
  document.getElementById("hasilPersen").innerText =
    "Persen = " + (relatif * 100).toFixed(2) + "%";
}

function hitungPenjumlahan() {
  const A = parseFloat(document.getElementById("nilaiA").value);
  const eA = parseFloat(document.getElementById("errorA").value);
  const B = parseFloat(document.getElementById("nilaiB").value);
  const eB = parseFloat(document.getElementById("errorB").value);
  const total = A + B;
  const totalE = eA + eB;
  const max = A + eA + (B + eB);
  const min = A - eA + (B - eB);
  document.getElementById(
    "hasilPenjumlahan"
  ).innerText = `Total: ${total}\nΔTotal: ${totalE}\nMax: ${max}\nMin: ${min}`;
}

function hitungPerkalian() {
  const A = parseFloat(document.getElementById("nilaiKA").value);
  const eA = parseFloat(document.getElementById("errorKA").value);
  const B = parseFloat(document.getElementById("nilaiKB").value);
  const eB = parseFloat(document.getElementById("errorKB").value);
  const max = (A + eA) * (B + eB);
  const min = (A - eA) * (B - eB);
  document.getElementById("hasilPerkalian").innerText = `Max: ${max.toFixed(
    2
  )}\nMin: ${min.toFixed(2)}`;
}

function hitungToleransi() {
  const terukur = parseFloat(document.getElementById("nilaiTerukur").value);
  const standar = parseFloat(document.getElementById("nilaiStandar").value);
  const batas = parseFloat(document.getElementById("batasToleransi").value);

  const toleransi = ((terukur - standar) / standar) * 100;
  const status = Math.abs(toleransi) <= batas ? "DITERIMA" : "DITOLAK";

  document.getElementById(
    "hasilToleransi"
  ).innerText = `Toleransi: ${toleransi.toFixed(
    2
  )}%\nBatas: ±${batas}%\nStatus: ${status}`;
}

function resetCalc(inputId, hasilId) {
  document.getElementById(inputId).value = "";
  document.getElementById(hasilId).innerText = "";
}
