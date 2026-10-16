// Add your real project URLs and contact email here.
const projectLinks = {
  todo: "https://sayyedaamnah-hash.github.io/to-do-listt/",       // Example: "https://yourusername.github.io/todo-list/"
  tictactoe: "https://sayyedaamnah-hash.github.io/tic-tac-toe",
  rps: "https://sayyedaamnah-hash.github.io/rock-paper-scissor/",
  meals: "https://sayyedaamnah-hash.github.io/meals-search/ "       // Meals Search Application URL
};

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const projectKey = link.dataset.project;
    const destination = projectLinks[projectKey];
    if (!destination) {
      event.preventDefault();
      alert("Add your live project URL in script.js to make this link work.");
      return;
    }
    link.href = destination;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});

// IMPORTANT: Replace this sample email in index.html with your real contact email.


// Contact form: prepares an email in the visitor's default email application.
// A static GitHub Pages site cannot send email by itself without a backend/service.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:aamnahsayyed@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formNote.textContent = "Opening your email app…";
    window.location.href = mailto;
  });
}

// Replace these # links with your real LinkedIn and GitHub profile URLs.
