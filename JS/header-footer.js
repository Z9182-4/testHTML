window.onload = function () {
  const backToTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    const href = link.getAttribute('href').split("/").pop();
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
