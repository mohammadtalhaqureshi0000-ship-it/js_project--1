const button = document.getElementById("btn");
const show = document.getElementById("showtext");

button.addEventListener("click", () => {
    const showing = prompt("note");
    show.textContent = showing;
      if (showing) {
        show.textContent += note + "\n";
    }

});