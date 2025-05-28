function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="vp"]:checked');
  if (!selected) return;

  const jumlahVP = selected.value;
  const hargaVP = parseInt(selected.dataset.price);

  document.getElementById("jumlahVP").textContent = jumlahVP;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaVP);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".vp-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
