document.addEventListener("DOMContentLoaded", function () {

    const brandName = "MS POINT";

    const iconSVG = `
        <svg width="30" height="30" viewBox="0 0 64 64" fill="none">
            <path d="M32 4L8 14V30C8 44 18 56 32 60C46 56 56 44 56 30V14L32 4Z" 
                  stroke="#ffffff" stroke-width="3" fill="none"/>
            <text x="18" y="40" font-size="22" font-weight="bold" fill="#ffffff">M</text>
            <text x="32" y="40" font-size="20" font-weight="bold" fill="#ff3b3b">S</text>
        </svg>
    `;

    const brandLogo = document.getElementById("brand-logo");
    brandLogo.innerHTML = iconSVG + `<span>${brandName}</span>`;

    brandLogo.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
