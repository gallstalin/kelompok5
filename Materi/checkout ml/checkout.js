function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="diamond"]:checked');
  if (!selected) return;

  const jumlah = selected.value;
  const harga = parseInt(selected.dataset.price);

  document.getElementById("jumlahDiamond").textContent = jumlah;
  document.getElementById("totalHarga").textContent = formatRupiah(harga);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".diamond-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
