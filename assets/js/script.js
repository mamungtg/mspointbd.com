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
function openFiverrPopup() {
  document.getElementById("fiverrPopup").style.display = "block";

  setTimeout(() => {
    document.querySelector(".popup-content").classList.add("active");
  }, 20);
}

function closeFiverrPopup() {
  const content = document.querySelector(".popup-content");
  content.classList.remove("active");

  setTimeout(() => {
    document.getElementById("fiverrPopup").style.display = "none";
  }, 300);
}

window.onclick = function(event) {
  const overlay = document.getElementById("fiverrPopup");
  const box = document.querySelector(".popup-content");

  if (event.target === overlay) {
    closeFiverrPopup();
  }
};
