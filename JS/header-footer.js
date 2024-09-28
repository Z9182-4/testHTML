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
  const links = document.querySelectorAll('.dropdown-menu a');

  links.forEach(link => {
    const href = link.getAttribute('href').split("/").pop();
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menuItems = document.querySelector("header");

    menuButton.addEventListener("click", function() {
        menuItems.classList.toggle("menu-active"); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.menu-button');
    var navUl = document.querySelector('nav ul');

    button.addEventListener('click', function() {
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
    });
});


