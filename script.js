const hamburger_icon = document.querySelector("#hamburger_icon");
const nav = document.querySelector("header nav");
hamburger_icon.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  hamburger_icon.src = hamburger_icon.src.match("images/icon-hamburger.svg")
    ? "images/icon-close.svg"
    : "images/icon-hamburger.svg";
});
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tab_contents article");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // removes any highlighted tab
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    // highlights the clicked tab
    tab.classList.add("active");

    // gets the content id of the tab clicked
    const target = document.querySelector(tab.dataset.tabTarget);
    // removes any tab content
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    // shows the the current tab content
    target.classList.add("active");
  });
});

const accordion_headers = document.querySelectorAll(".accordion-header");

accordion_headers.forEach((header) => {
  header.addEventListener("click", () => {
    const accordion = header.closest(".accordion");
    accordion.classList.toggle("active");
  });
});

form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const email_input = form.querySelector("#email");
  e.preventDefault()
  if (email_input.value == "") form.classList.add("active");
  else form.classList.remove("active");
});
