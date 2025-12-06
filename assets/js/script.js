document.addEventListener("DOMContentLoaded", function () {

    const brandLogo = document.getElementById("brand-logo");
    if (!brandLogo) {
        console.error("Brand logo div not found!");
        return;
    }

    const brandName = "MS POINT";

    // Inline SVG → guaranteed to show
    const iconSVG = `
        <svg width="34" height="34" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 4L8 14V30C8 44 18 56 32 60C46 56 56 44 56 30V14L32 4Z"
                  stroke="#ffffff" stroke-width="3" fill="none"/>
            <text x="15" y="40" font-size="22" font-weight="bold" fill="#ffffff">M</text>
            <text x="30" y="40" font-size="22" font-weight="bold" fill="#ff3b3b">S</text>
        </svg>
    `;

    brandLogo.innerHTML = iconSVG + `<span class="brand-text">${brandName}</span>`;

    brandLogo.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
<script>
function toggleWAPopup() {
    let popup = document.getElementById("whatsappPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}
</script>
