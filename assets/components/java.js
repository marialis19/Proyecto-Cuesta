 document.addEventListener("DOMContentLoaded", function () {
      fetch("../assets/components/navbar.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("navbar").innerHTML = data;
        });

      fetch("../assets/components/footer.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("footer").innerHTML = data;
        });
    });