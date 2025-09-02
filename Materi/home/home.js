const slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 1; // mulai dari slide ke-1 (setelah clone)
let interval;
const totalSlides = slides.length;

// === CLONE ===
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

slider.appendChild(firstClone); // clone pertama di akhir
slider.insertBefore(lastClone, slides[0]); // clone terakhir di awal

// Perbarui slide list setelah cloning
slides = document.querySelectorAll(".slide");

// Atur lebar dan posisi awal
slider.style.transform = `translateX(-${currentIndex * 100}%)`;

// === DOTS ===
dotsContainer.innerHTML = "";
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i + 1));
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex - 1);
  });
}

function goToSlide(index) {
  slider.style.transition = "transform 0.5s ease-in-out";
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function nextSlide() {
  if (currentIndex >= slides.length - 1) return;
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  if (currentIndex <= 0) return;
  goToSlide(currentIndex - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

slider.addEventListener("transitionend", () => {
  if (slides[currentIndex].classList.contains("clone")) {
    slider.style.transition = "none";

    if (currentIndex === slides.length - 1) {
      // clone pertama (di akhir) -> balik ke slide pertama asli
      currentIndex = 1;
    } else if (currentIndex === 0) {
      // clone terakhir (di awal) -> balik ke slide terakhir asli
      currentIndex = slides.length - 2;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Re-enable transition after forcing jump
    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
    }, 20);
  }

  updateDots();
});

// === AUTOPLAY ===
function startAutoplay() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(interval);
}

slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);

startAutoplay();
