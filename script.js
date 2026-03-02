const button = document.getElementById("btn");
const show = document.getElementById("showtext");
button.addEventListener("click", () => {
    const showing = prompt("note");
    if (showing) {
        const p = document.createElement("p");
        p.textContent = showing;
        show.appendChild(p);
    }
});