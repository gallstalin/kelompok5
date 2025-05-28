function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="cashpoint"]:checked');
  if (!selected) return;

  const jumlahCashPoint = selected.value;
  const hargaCashPoint = parseInt(selected.dataset.price);

  document.getElementById("jumlahCashPoint").textContent = jumlahCashPoint;
  document.getElementById("totalHarga").textContent =
    formatRupiah(hargaCashPoint);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".cashpoint-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
