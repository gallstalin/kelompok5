function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="crowns"]:checked');
  if (!selected) return;

  const jumlahCrowns = selected.value;
  const hargaCrowns = parseInt(selected.dataset.price);

  document.getElementById("jumlahCrowns").textContent = jumlahCrowns;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaCrowns);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".crowns-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
