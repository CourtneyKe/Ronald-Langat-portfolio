document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffffff";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#ffcc00";
        });
    });
});