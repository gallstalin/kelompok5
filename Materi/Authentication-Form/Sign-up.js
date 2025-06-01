AOS.init();

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // cegah submit default

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Harap isi email dan kata sandi.");
      return;
    }

    // jika valid, redirect ke halaman home
    window.location.href = "../home/home.html";
  });
