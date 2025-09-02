function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="cp"]:checked');
  if (!selected) return;

  const jumlahCP = selected.value;
  const hargaCP = parseInt(selected.dataset.price);

  document.getElementById("jumlahCP").textContent = jumlahCP;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaCP);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".cp-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
