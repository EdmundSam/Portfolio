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
    schoolOverlay.style.background = "url(''./assets/Images/Desk.png') no-repeat center center";
    schoolOverlay.style.backgroundSize = "cover";
    schoolOverlay.style.display = "flex";
    schoolOverlay.style.justifyContent = "center";
    schoolOverlay.style.alignItems = "center";
    schoolOverlay.style.zIndex = "999";

    // Inject most of the layout with innerHTML
    schoolOverlay.innerHTML = `
        <!-- Close button -->
        <button 
            id="close-school" 
            style="position:absolute; 
            top:20px; 
            right:20px; 
            width:40px; 
            height:40px; 
            border-radius:50%; 
            font-size:22px; 
            font-weight:bold; 
            cursor:pointer;">
            ✕
        </button>

        <!-- Resume -->
        <div style="width:28%; height:75%">
            <a id="resume-link" target="_blank">
                <img src="./assets/Images/ResumeImage.png" 
                     alt="Resume" 
                     style="width:100%; height:100%; display:block; cursor:pointer;">
            </a>
        </div>

        <!-- Credits -->
        <div style="
                position: fixed;
                bottom: .5vh;
                left: .5vw;
                color: white;
                font-family: 'Pokemon';
                font-size: 1.25vh;
                padding: .5vh .5vw;
                border-radius: 1vh;
                white-space: normal;
                word-wrap: break-word;
                background: rgba(0, 0, 0, 0.5);
            ">
                Custom Music: 
                <a href="https://www.youtube.com/@ronjoshtin" target="_blank" style="
                    color: #00d0ff;
                    text-decoration: underline;
                    cursor: pointer;">
                Aaron Hipolito<br>
                </a>
                Art: ME!
        </div>
    `;

    document.body.appendChild(schoolOverlay);

    const resumeLink = document.getElementById("resume-link");
    resumeLink.href = `./assets/Images/Resume.pdf`;

    // Close Button
    document.getElementById("close-school").addEventListener("click", () => {
        document.body.removeChild(schoolOverlay);
        musicManager.stop();
        k.go("HomePage", { spawn: "School Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) canvas.focus();
    });
}
