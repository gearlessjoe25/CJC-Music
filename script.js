// Ripple animatin
document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  // Ripple position
  ripple.style.left = `${e.pageX - 10}px`;
  ripple.style.top = `${e.pageY - 10}px`;

  document.body.appendChild(ripple);

  // Remove ripple after animation
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});


  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

