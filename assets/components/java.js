document.addEventListener("DOMContentLoaded", function () {
  fetch("../assets/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbar = document.getElementById("navbar");
      navbar.innerHTML = data;

      // Cierra el menú hamburguesa al hacer clic en un enlace
      navbar.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          const navbarCollapse = navbar.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).toggle();
          }
        });
      });
    });

  fetch("../assets/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});


