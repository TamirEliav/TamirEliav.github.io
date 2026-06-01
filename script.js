// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (persists in localStorage, respects system preference)
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = stored || (prefersDark ? "dark" : "light");
applyTheme(initial);

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
// Close menu after clicking a link (mobile)
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);
