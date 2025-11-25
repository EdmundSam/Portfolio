export function schoolPage(k) {
    // Overlay container
    const schoolOverlay = document.createElement("div");
    schoolOverlay.id = "school-overlay";
    schoolOverlay.style.position = "fixed";
    schoolOverlay.style.top = "0";
    schoolOverlay.style.left = "0";
    schoolOverlay.style.width = "100%";
    schoolOverlay.style.height = "100%";
    schoolOverlay.style.background = "url('./assets/Desk.png') no-repeat center center";
    schoolOverlay.style.backgroundSize = "cover";
    schoolOverlay.style.display = "flex";
    schoolOverlay.style.justifyContent = "center";
    schoolOverlay.style.alignItems = "center";
    schoolOverlay.style.zIndex = "999";

    schoolOverlay.innerHTML = `
        <button id="close-school" style="position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius:50%; font-size:22px; font-weight:bold; cursor:pointer;">✕</button>
        <div style="width:28%; height:75%">
            <a href='./assets/Resume.pdf' target='_blank'>
                <img src="./assets/ResumeImage.png" alt='Resume' style='width:100%; height:100%; display:block; cursor:pointer;'>
            </a>
        </div>
    `;

    document.body.appendChild(schoolOverlay);

    document.getElementById("close-school").addEventListener("click", () => {
        document.body.removeChild(schoolOverlay);
        k.go("HomePage", { spawn: "School Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}
