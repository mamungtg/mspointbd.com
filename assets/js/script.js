document.addEventListener("DOMContentLoaded", function () {

    // Brand Name
    const brandName = "MS POINT";

    // SVG Icon (Shield with M + red S)
    const iconSVG = `
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M32 4L8 14V30C8 44 18 56 32 60C46 56 56 44 56 30V14L32 4Z" 
                  stroke="#ffffff" stroke-width="3" fill="none"/>
            <text x="18" y="40" font-size="24" font-weight="bold" fill="#ffffff">M</text>
            <text x="32" y="40" font-size="22" font-weight="bold" fill="#ff3b3b">S</text>
        </svg>
    `;

    // Insert Logo + Name Into Header
    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
        brandLogo.innerHTML = iconSVG + `<span class="brand-text">${brandName}</span>`;
    }

    // Make Logo Clickable → Go to Homepage
    brandLogo.addEventListener("click", () => {
        window.location.href = "index.html";
    });

});
