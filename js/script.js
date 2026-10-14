window.addEventListener("load", () => {
  setTimeout(() => document.querySelector(".loader").classList.add("done"), 500);
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 70));

const burger = document.querySelector(".hamburger");
burger?.addEventListener("click", () => header.classList.toggle("mobile"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => header.classList.remove("mobile")));

const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const tabs = document.querySelectorAll(".tabs button");
const boxes = document.querySelectorAll(".menu-box");
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(x => x.classList.remove("active")); boxes.forEach(x => x.classList.remove("active"));
  tab.classList.add("active"); document.getElementById(tab.dataset.tab).classList.add("active");
}));

document.getElementById("year").textContent = new Date().getFullYear();
