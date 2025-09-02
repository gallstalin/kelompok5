function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateSummary() {
  const selected = document.querySelector('input[name="tokens"]:checked');
  if (!selected) return;

  const jumlahTokens = selected.value;
  const hargaTokens = parseInt(selected.dataset.price);

  document.getElementById("jumlahTokens").textContent = jumlahTokens;
  document.getElementById("totalHarga").textContent = formatRupiah(hargaTokens);
}

document.addEventListener("DOMContentLoaded", () => {
  updateSummary();

  document.querySelectorAll(".tokens-option").forEach((radio) => {
    radio.addEventListener("change", updateSummary);
  });
});
