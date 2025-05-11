// Load navbar from external HTML
fetch("navbar.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);

// Hero Image Slider
const images = document.querySelectorAll('.hero-image');
let current = 0;
let interval;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });

  const heroText = document.getElementById('hero-text');
  if (index === 0) {
    heroText.innerHTML = `
      <div class="frosted-box">
        PekanGo: Your Intelligent Travel Companion
      </div>
    `;
  } else {
    heroText.innerHTML = '';
  }
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
  resetTimer();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

interval = setInterval(nextSlide, 5000);
showSlide(current);

// Scroll carousel left/right
function scrollThings(direction) {
  const container = document.getElementById('things-carousel');
  const scrollAmount = container.offsetWidth * 0.9;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Filter categories in "Things to Do"
function selectCategory(category) {
  const items = document.querySelectorAll('.carousel-item');
  const buttons = document.querySelectorAll('.category-icons button');

  // Highlight active button
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons.forEach(btn => {
    const text = btn.textContent.toLowerCase();
    if (
      (category === 'all' && text === 'all') ||
      (category === 'nature' && text.includes('nature')) ||
      (category === 'culture' && text.includes('culture')) ||
      (category === 'food' && text.includes('food'))
    ) {
      btn.classList.add('active');
    }
  });

  // Show/hide items
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  document.getElementById('things-carousel').scrollLeft = 0;
}

window.addEventListener('DOMContentLoaded', () => {
  selectCategory('all');
});

// Map integration
const places = [
  { name: "Museum Sultan Abu Bakar", coords: [3.4998, 103.4283] },
  { name: "Pahang River Cruise", coords: [3.4979, 103.4321] },
  { name: "Pekan Food Street", coords: [3.5002, 103.4260] }
];

const map = L.map('map').setView([3.4998, 103.4283], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = places.map((place, i) =>
  L.marker(place.coords).addTo(map).bindPopup(place.name)
);

function focusPlace(index) {
  map.setView(places[index].coords, 16);
  markers[index].openPopup();
}

// Event popup logic
function openPopup(id) {
  const popup = document.getElementById('event-popup');
  const title = document.getElementById('popup-title');
  const desc = document.getElementById('popup-desc');
  const images = document.getElementById('popup-images');

  popup.classList.remove('hidden');

  if (id === 'flick') {
    title.textContent = "Flick – PEKAN";
    desc.textContent = "Experience an unforgettable evening in Pekan’s Warisan Riverside Park. Enjoy Gamelan music, light shows, and local Mak Yong dances beside the scenic river. Family-friendly food stalls and handicraft vendors await!";
    images.innerHTML = `
      <img src="./images/hero5.jpg" alt="Flick 1">
      <img src="./images/hero6.JPG" alt="Flick 2">
      <img src="./images/hero7.jpg" alt="Flick 3">
    `;
  } else if (id === 'photo') {
    title.textContent = "Photography Showcase – PEKAN";
    desc.textContent = "Visit the Pekan Heritage Exhibition, a showcase of local artistry, traditional crafts, and historical artifacts at the Cultural Hall. Discover intricate songket weaving, rare photographs of royal ceremonies, and rotating art displays that highlight the rich identity of Pekan as Pahang’s royal capital.";
    images.innerHTML = `
      <img src="./images/17.jpg" alt="Photo 1">
      <img src="./images/18.jpg" alt="Photo 2">
      <img src="./images/19.jpg" alt="Photo 3">
    `;
  } else if (id === 'culture') {
    title.textContent = "Gala Night – PEKAN";
    desc.textContent = "Immerse yourself in the Pekan Heritage Cultural Show, featuring traditional dances like Zapin and Mak Yong, live Gamelan performances, and storytelling of royal legends. Held at the historic town square, the show honors the rich legacy of Pahang’s royal town through music, costume, and captivating stage art.";
    images.innerHTML = `
      <img src="./images/12.jpg" alt="Culture 1">
      <img src="./images/13.jpg" alt="Culture 2">
      <img src="./images/14.jpg" alt="Culture 3">
    `;
  } else if (id === 'culture2') {
    title.textContent = "Cultural Night – PEKAN";
    desc.textContent = "Celebrate the vibrant Pekan Cultural Lantern Festival, where the riverside glows with handcrafted lanterns, traditional music, and folk dance performances. Enjoy street food, fire shows, and interactive art displays that light up the night with heritage and joy";
    images.innerHTML = `
      <img src="./images/8.jpg" alt="Culture 1">
      <img src="./images/9.jpg" alt="Culture 2">
      <img src="./images/10.jpg" alt="Culture 3">
    `;
  }
}

function closePopup(event) {
  const popup = document.getElementById('event-popup');
  if (!event || event.target === popup || event.target.classList.contains('close-btn')) {
    popup.classList.add('hidden');
  }
}
