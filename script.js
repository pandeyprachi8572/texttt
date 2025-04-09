const slides = [
  {
    img: 'img/banner_1.jpg',
    title: 'often for marketing or communication purposes. ',
    desc: 'Content writing is the process of blog posts, website copy, and social media updates, to inform, educate, or persuade a target audience, often for marketing or communication purposes. '
  },
  {
    img: 'img/banner_2.jpg',
    title: 'Blog posts and articles',
    desc: 'Adaptability: The ability to adapt writing style to different platforms and audiences.fkgjfd jfdlkgjfd f'
  },
  {
    img: 'img/banner_3.jpg',
    title: 'Excellent Writing Skills: ',
    desc: 'Excellent Writing Skills: Clear, concise, and engaging writing is essential Research Skills The ability to research topics thoroughly and accurately'
  }
];
let current = 0;
const imgEl = document.getElementById('slide-image');
const titleEl = document.getElementById('slide-title');
const descEl = document.getElementById('slide-description');
function updateSlide(index) {
  // Start with zoom animation
  imgEl.style.animation = 'none';
  void imgEl.offsetWidth; // Trigger reflow
  imgEl.style.animation = 'zoomIn 1.5s ease-out forwards';
  
  // Change slide content immediately
  imgEl.src = slides[index].img;
  titleEl.textContent = slides[index].title;
  descEl.textContent = slides[index].desc;
  
  // Reset text animations
  titleEl.classList.remove('animate-title');
  descEl.classList.remove('animate-desc');
  void titleEl.offsetWidth; 
  void descEl.offsetWidth;
  
  // Apply animations
  titleEl.classList.add('animate-title');
  descEl.classList.add('animate-desc');
}
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide(current);
});
document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
});
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});
// Auto-play slider
setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlide(current);
}, 5000);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});


