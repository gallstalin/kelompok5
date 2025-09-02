function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="uc"]:checked');
  if (!selected) return;

  const jumlahUC = selected.value;
  const hargaUC = parseInt(selected.dataset.price);

  document.getElementById("jumlahUC").textContent = jumlahUC;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaUC);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".uc-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
