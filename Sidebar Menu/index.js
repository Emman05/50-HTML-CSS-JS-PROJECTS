const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar")

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
});