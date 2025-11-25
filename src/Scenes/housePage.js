export function housePage(k) {
    const houseOverlay = document.createElement("div");
    houseOverlay.id = "house-overlay";
    Object.assign(houseOverlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "url('./assets/Fireplace.png') no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "999",
    });

    houseOverlay.innerHTML = `
        <button id="close-house" style="
            position:absolute;
            top:20px;
            right:20px;
            width:40px;
            height:40px;
            border-radius:50%;
            font-size:22px;
            font-weight:bold;
            cursor:pointer;
        ">✕</button>

        <!-- Full-height black panel -->
        <div id="house-panel" style="
            width: 60%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            overflow-y: auto;
            padding: 40px;
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
            border-left: 2px solid rgba(255,255,255,0.1);
            border-right: 2px solid rgba(255,255,255,0.1);
            transform: translateY(60vh);
        ">
            <div id="house-content" style="
                color: white;
                text-align: center;
            ">
                <h1>About Me</h1>
                <p>Your content begins at the top of the container, not centered.</p>
            </div>
        </div>
    `;

    document.body.appendChild(houseOverlay);

    const panel = document.querySelector("#house-panel");
    const content = document.querySelector("#house-content");

    // Reveal upward on scroll
    panel.addEventListener("scroll", () => {
        if (panel.scrollTop > 50) {
            content.style.marginTop = "20px";
        } else {
            content.style.marginTop = "80vh";
        }
    });

    document.getElementById("close-house").addEventListener("click", () => {
        document.body.removeChild(houseOverlay);
        k.go("HomePage", { spawn: "House Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) canvas.focus();
    });
}
