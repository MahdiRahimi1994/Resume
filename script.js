// Slideshow
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dot-navigation");
let currentSlide = 0;
let slideInterval;

// Build dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot-navigation-item");
  dot.addEventListener("click", () => navigateToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll(".dot-navigation-item");

// Set initial active slide + dot
function setActive(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

setActive(currentSlide);

// Navigate
function navigateToSlide(index) {
  clearInterval(slideInterval);
  currentSlide = index;
  setActive(currentSlide);
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  setActive(currentSlide);
}

slideInterval = setInterval(nextSlide, 5000);

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
