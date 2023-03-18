const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
    containerEl.innerHTML = `<div class="container">
    <div class="mouse-event">
        ${event.clientX}
        <h4>MOUSE X Prosition(px)</h4>
        </div>
    <div class="mouse-event">
        ${event.clientY}
        <h4>MOUSE Y Prosition(px)</h4>
    </div>`
});