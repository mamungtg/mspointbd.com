document.addEventListener("DOMContentLoaded", function () {

    // Inject Fiverr popup box into hero section
    const hero = document.querySelector(".hero");

    if (hero) {
        const fiverrBox = document.createElement("div");
        fiverrBox.className = "hero-right-box";

        fiverrBox.innerHTML = `
            <img src="assets/img/fiverr-icon.png" class="hero-fiverr-icon">
            <span>Hire Me on Fiverr</span>
        `;

        // Add click action
        fiverrBox.addEventListener("click", function () {
            window.open("https://www.fiverr.com/s/ljGaxjj", "_blank");
        });

        hero.appendChild(fiverrBox);
    }
});
