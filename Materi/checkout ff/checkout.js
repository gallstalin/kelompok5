function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="diamond"]:checked');
  if (!selected) return;

  const jumlahDiamond = selected.value;
  const hargaDiamond = parseInt(selected.dataset.price);

  document.getElementById("jumlahDiamond").textContent = jumlahDiamond;
  document.getElementById("totalHarga").textContent =
    formatRupiah(hargaDiamond);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".diamond-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
