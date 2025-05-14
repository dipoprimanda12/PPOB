// UTILITY
function formatRupiah(angka) {
  return Number(angka).toLocaleString("id-ID");
}

// TANGGAL & WAKTU
function tampilkanTanggalWaktu() {
  const tanggal = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const jam = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const tanggalElement = document.getElementById("tanggal");
  const jamElement = document.getElementById("jam");

  if (tanggalElement) tanggalElement.textContent = tanggal;
  if (jamElement) jamElement.textContent = jam;
}

// PULSA
function pilihNominal(nominal) {
  localStorage.setItem("nominalPulsa", nominal);
  const output = document.getElementById("pulsa-output");
  if (output) output.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
}

// PLN
function pilihMeter(nominal) {
  localStorage.setItem("nominalPLN", nominal);
  const output = document.getElementById("pln-nominal");
  const transaksi = document.getElementById("pln-nominal-transaksi");
  if (output) output.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
  if (transaksi) transaksi.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
}

// LOAD DATA SAAT HALAMAN DIBUKA
window.addEventListener("DOMContentLoaded", () => {
  tampilkanTanggalWaktu();
  const path = window.location.pathname;

  if (path.includes("transaksi.html")) {
    const nomor = localStorage.getItem("nomorHP");
    const nominal = localStorage.getItem("nominalPulsa");
    const nomorInput = document.getElementById("nomor");
    const output = document.getElementById("pulsa-output");

    if (nomorInput && nomor) nomorInput.value = nomor;
    if (output && nominal)
      output.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
  }

  if (path.includes("transaksi-pln.html")) {
    const nomorPLN = localStorage.getItem("nomorPLN");
    const nominal = localStorage.getItem("nominalPLN");
    const input = document.getElementById("nomormeter");
    const output = document.getElementById("pln-nominal");
    const transaksi = document.getElementById("pln-nominal-transaksi");

    if (input && nomorPLN) input.value = nomorPLN;
    if (output && nominal)
      output.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
    if (transaksi && nominal)
      transaksi.textContent = `Nominal: Rp ${formatRupiah(nominal)}`;
  }
});
// FUNGSI BAYAR
function bayar() {
  alert("Proses pembayaran sedang dilakukan...");
}
// FUNGSI LANJUT TRANSAKSI
function lanjutTransaksiBaru() {
  localStorage.clear();
  window.location.href = "index.html";
}
function simpanNomor() {
  const nomor = document.getElementById("nomor").value;
  if (nomor) {
    localStorage.setItem("nomorHP", nomor);
    window.location.href = "transaksi.html";
  } else {
    alert("Silakan masukkan nomor terlebih dahulu.");
  }
}
function simpanNomorPLN() {
  const nomor = document.getElementById("nomorpln").value;
  if (nomor) {
    localStorage.setItem("nomorPLN", nomor);
    window.location.href = "transaksi-pln.html";
  } else {
    alert("Silakan masukkan Nomor Meter/ID PLN terlebih dahulu.");
  }
}

// BAGIAN KOTAK MASUK //===========
lucide.createIcons();

// Tampilkan jam sekarang pada pesan "Hari Ini"
document.getElementById("today-time").textContent =
  new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

// Fungsi hapus pesan
function hapusPesan(btn) {
  const message = btn.closest(".message");
  if (message) message.remove();
}

// BAGIAN AKTIVITAS //=============
function filterTransaksi(status, event) {
  // Hapus class 'active' dari semua tombol tab
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Tambahkan class 'active' ke tombol yang diklik
  if (event && event.target) {
    event.target.classList.add("active");
  }

  // Tampilkan/Filter item transaksi berdasarkan class
  document.querySelectorAll(".item").forEach((item) => {
    if (status === "all") {
      item.style.display = "flex";
    } else if (item.classList.contains(status)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
