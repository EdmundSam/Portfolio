import { musicManager } from "../entities/musicManager.js";

export function schoolPage(k) {
    const ASSETS = "/Portfolio/assets/";

    musicManager.play(`${ASSETS}Audio/School.wav`);

    const schoolOverlay = document.createElement("div");
    schoolOverlay.id = "school-overlay";
    schoolOverlay.style.position = "fixed";
    schoolOverlay.style.top = "0";
    schoolOverlay.style.left = "0";
    schoolOverlay.style.width = "100%";
    schoolOverlay.style.height = "100%";
    schoolOverlay.style.background =
        `url('${ASSETS}Images/Desk.png') no-repeat center center`;
    schoolOverlay.style.backgroundSize = "cover";
    schoolOverlay.style.display = "flex";
    schoolOverlay.style.justifyContent = "center";
    schoolOverlay.style.alignItems = "center";
    schoolOverlay.style.zIndex = "999";

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.id = "close-school";
    closeBtn.textContent = "✕";
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        fontSize: "22px",
        fontWeight: "bold",
        cursor: "pointer",
    });

    // Resume link (IMPORTANT PART)
    const resumeWrapper = document.createElement("div");
    resumeWrapper.style.width = "28%";
    resumeWrapper.style.height = "75%";

    const resumeLink = document.createElement("a");
    resumeLink.target = "_blank";
    resumeLink.href = `${ASSETS}Images/Resume.pdf`; // ← resolved correctly

    const resumeImg = document.createElement("img");
    resumeImg.src = `${ASSETS}Images/ResumeImage.png`;
    resumeImg.style.width = "100%";
    resumeImg.style.height = "100%";
    resumeImg.style.cursor = "pointer";

    resumeLink.appendChild(resumeImg);
    resumeWrapper.appendChild(resumeLink);

    schoolOverlay.appendChild(closeBtn);
    schoolOverlay.appendChild(resumeWrapper);
    document.body.appendChild(schoolOverlay);

    closeBtn.addEventListener("click", () => {
        document.body.removeChild(schoolOverlay);
        musicManager.stop();
        k.go("HomePage", { spawn: "School Spawn" });
        document.querySelector("canvas")?.focus();
    });
}
