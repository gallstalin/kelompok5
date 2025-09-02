function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="primogem"]:checked');
  if (!selected) return;

  const jumlahPrimogem = selected.value;
  const hargaPrimogem = parseInt(selected.dataset.price);

  document.getElementById("jumlahPrimogem").textContent = jumlahPrimogem;
  document.getElementById("totalHarga").textContent =
    formatRupiah(hargaPrimogem);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".primogem-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
