// small helper: make sections fade in using the 'fade-up' class when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up").forEach((el, i) => {
    el.classList.add("delay-"+Math.min(2, i));
  });

  // Gallery lightbox
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lightbox-img");
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.querySelector("img").dataset.large || item.querySelector("img").src;
      lbImage.src = src;
      lightbox.classList.add("open");
    });
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.id === "close-lightbox") {
      lightbox.classList.remove("open");
    }
  });

  // small nav highlight for current page
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(a => {
    if (a.href === location.href || location.pathname.endsWith(a.getAttribute("data-path"))) {
      a.classList.add("active");
      a.style.boxShadow = "0 10px 28px rgba(255,80,150,0.12)";
    }
  });
});
