const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// REVEAL ON SCROLL
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (sectionTop < windowHeight - visiblePoint) {
      section.classList.add("active");
    }
  });
}

reveal();
