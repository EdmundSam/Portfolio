export function housePage(k) {
    // Overlay container
    const houseOverlay = document.createElement("div");
    houseOverlay.id = "house-overlay";
    houseOverlay.style.position = "fixed";
    houseOverlay.style.top = "0";
    houseOverlay.style.left = "0";
    houseOverlay.style.width = "100%";
    houseOverlay.style.height = "100%";
    houseOverlay.style.background = "url('./assets/HouseBackground.png') repeat";
    houseOverlay.style.backgroundSize = "cover";
    houseOverlay.style.display = "flex";
    houseOverlay.style.justifyContent = "center";
    houseOverlay.style.alignItems = "center";
    houseOverlay.style.zIndex = "999";

    houseOverlay.innerHTML = `
        <button id="close-house" style="position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius:50%; font-size:22px; font-weight:bold; cursor:pointer;">✕</button>
        <div style="max-width:600px; width:90%; background:#fff; padding:20px; box-shadow:0 6px 25px rgba(0,0,0,0.4);">
            <a href='./assets/Resume.pdf' target='_blank'>
                <img src="./assets/ResumeImage.png" alt='Resume' style='width:100%; height:auto; display:block; cursor:pointer;'>
            </a>
        </div>
    `;

    document.body.appendChild(houseOverlay);

    document.getElementById("close-house").addEventListener("click", () => {
        document.body.removeChild(houseOverlay);
        k.go("HomePage", { spawn: "House Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}
