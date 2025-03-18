let currentIndex = 0;
const slider = document.getElementById("imageSlider");
const images = slider.querySelectorAll("img");
const totalImages = images.length;
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

nextButton.addEventListener("click", nextImage); //
prevButton.addEventListener("click", prevImage);
