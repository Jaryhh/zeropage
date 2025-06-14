// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for nav links
  const links = document.querySelectorAll("nav a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
