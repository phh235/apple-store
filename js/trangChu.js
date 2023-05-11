// image slider
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("img");
const dots = document.createElement("div");
dots.classList.add("dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    showSlide(i);
  });
  dots.appendChild(dot);
}
slider.appendChild(dots);

let currentSlide = 0;
function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  dots.children[currentSlide].classList.remove("active");
  slides[index].classList.add("active");
  dots.children[index].classList.add("active");
  currentSlide = index;
}

function prevSlide() {
  let index = currentSlide - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

function nextSlide() {
  let index = currentSlide + 1;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}
showSlide(currentSlide);

setInterval(() => {
  let index = currentSlide + 1;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}, 6000);

