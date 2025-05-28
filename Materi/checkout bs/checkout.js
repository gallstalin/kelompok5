function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="bsp"]:checked');
  if (!selected) return;

  const jumlahBSP = selected.value;
  const hargaBSP = parseInt(selected.dataset.price);

  document.getElementById("jumlahBSP").textContent = jumlahBSP;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaBSP);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".bsp-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
