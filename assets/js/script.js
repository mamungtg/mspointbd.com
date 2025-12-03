<script>
    // Brand Name
    const brandName = "MS POINT";

    // Auto-generate SVG icon (shield with M & S)
    const iconSVG = `
        <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
            <path d="M32 4L8 14V30C8 44 18 56 32 60C46 56 56 44 56 30V14L32 4Z" 
                  stroke="#ffffff" stroke-width="3" fill="none"/>
            <text x="20" y="38" font-size="22" font-weight="bold" fill="#ffffff">M</text>
            <text x="32" y="38" font-size="20" font-weight="bold" fill="#ff3b3b">S</text>
        </svg>
    `;

    // Load into div
    document.getElementById("brand-logo").innerHTML = iconSVG + brandName;

    // Make logo clickable → Go to homepage
    document.getElementById("brand-logo").addEventListener("click", function () {
        window.location.href = "index.html";
    });
</script>
