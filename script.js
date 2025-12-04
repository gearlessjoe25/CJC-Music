document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  document.body.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Ripple position
    ripple.style.left = `${e.pageX - 10}px`;
    ripple.style.top = `${e.pageY - 10}px`;

    document.body.appendChild(ripple);

    // Remove ripple animation
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });

  // Reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal-section').forEach(section => {
    observer.observe(section);
  });

  // Parallax Scroll 
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax-group .release-img').forEach((img, i) => {
      const speed = (i + 1) * 0.2;
      const offset = window.scrollY * speed * 0.03;
      img.style.transform = `translateY(${offset}px)`;
    });
  });
});
