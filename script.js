// Load external components
function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      if (file === "navbar.html") {
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("navLinks");
        const themeToggle = document.getElementById("themeToggle");
        const searchInput = document.getElementById("searchInput");

        // Hamburger toggle
        if (hamburger && navLinks) {
          hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }

        // Dark mode toggle
        if (themeToggle) {
          themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const mode = document.body.classList.contains("dark") ? "dark" : "light";
            localStorage.setItem("theme", mode);
            themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
          });

          const savedTheme = localStorage.getItem("theme");
          if (savedTheme === "dark") {
            document.body.classList.add("dark");
            themeToggle.textContent = "☀️";
          }
        }

        // Search filter
        if (searchInput) {
          searchInput.addEventListener("keyup", function () {
            let filter = this.value.toLowerCase();
            let links = navLinks.getElementsByTagName("a");
            for (let i = 0; i < links.length; i++) {
              let text = links[i].textContent.toLowerCase();
              links[i].style.display = text.includes(filter) ? "" : "none";
            }
          });
        }
      }
    })
    .catch(error => console.error("Error loading " + file, error));
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("navbar")) loadComponent("navbar", "navbar.html");
  if (document.getElementById("footer")) loadComponent("footer", "footer.html");

  let form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting Liberty Chapel International! We will get back to you soon.");
      this.reset();
    });
  }
});

function showGiving() {
  alert("Redirecting to Giving Page or Payment Gateway...");
}
