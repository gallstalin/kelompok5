function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="fcpoints"]:checked');
  if (!selected) return;

  const jumlahFCPoints = selected.value;
  const hargaFCPoints = parseInt(selected.dataset.price);

  document.getElementById("jumlahFCPoints").textContent = jumlahFCPoints;
  document.getElementById("totalHarga").textContent =
    formatRupiah(hargaFCPoints);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".fcpoints-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
