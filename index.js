const images = [
    "./images/david-kovalenko-G85VuTpw6jg-unsplash.jpg",
    "./images/diego-ph-fIq0tET6llw-unsplash.jpg",
    "./images/ian-dooley-hpTH5b6mo2s-unsplash.jpg",
    "./images/katie-moum-iRMUDX0kyOc-unsplash.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function showImage(index) {
    slider.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);