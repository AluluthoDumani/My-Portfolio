
// ========================
// Dark/Light Mode Toggle
// ========================
// Dark/Light Mode Toggle with icon bounce
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  body.classList.add("theme-transition");
  setTimeout(() => {
    body.classList.remove("theme-transition");
  }, 500);

  // Bounce effect on toggle
  const icon = toggle.checked 
    ? document.querySelector(".moon") 
    : document.querySelector(".sun");

  icon.style.transform = "scale(1.3)";
  setTimeout(() => {
    icon.style.transform = "scale(1)";
  }, 300);
});
// ========================
// Smooth Scroll
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ========================
// Fade-in on Scroll
// ========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section, .project-card, .skill, .timeline-item").forEach(el => observer.observe(el));

// ========================
// Contact Form (Demo)
// ========================
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! 🚀");
});
// ========================
// Hamburger Menu Toggle
// ========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

