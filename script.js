// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.createElement("button");
    btn.innerText = "Toggle Dark Mode";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.padding = "10px";
    btn.style.background = "#FFD700";
    btn.style.color = "black";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    document.body.appendChild(btn);

    btn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

// Dark Mode CSS (Add to styles.css)
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .dark-mode {
            background: black !important;
            color: white !important;
        }
    </style>
`);
