const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");

menuToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-q")?.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((other) => other.classList.remove("open"));
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

document.querySelectorAll("[data-animate]").forEach((el) => el.classList.add("in-view"));
