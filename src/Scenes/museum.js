import { musicManager } from "../entities/musicManager.js";

export function museumPage(k) {
    musicManager.stop();

    const museumOverlay = document.createElement("div");
    museumOverlay.id = "museum-overlay";
    museumOverlay.style.position = "fixed";
    museumOverlay.style.top = "0";
    museumOverlay.style.left = "0";
    museumOverlay.style.width = "100%";
    museumOverlay.style.height = "100%";
    museumOverlay.style.background = "url('./assets/Gradient.png') no-repeat center center";
    museumOverlay.style.backgroundSize = "100% 100%";
    museumOverlay.style.display = "flex";
    museumOverlay.style.flexDirection = "row";
    museumOverlay.style.justifyContent = "space-between";
    museumOverlay.style.padding = "60px";
    museumOverlay.style.boxSizing = "border-box";
    museumOverlay.style.zIndex = "999";
    museumOverlay.innerHTML = `
        <!-- Exit button -->
        <button 
            id="close-museum" 
            style="position:absolute; 
            top:20px; 
            right:20px;
            width:40px; 
            height:40px; 
            border-radius:50%; 
            font-size:22px; 
            font-weight:bold; 
            cursor:pointer;"
            >✕
        </button>
        
        <div style="
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-between;
            align-items: stretch;
            gap: 4vw;
            flex-wrap: wrap;">

    
        <!-- Left Column -->
        <div style="
        flex: 0 0 60%; 
        min-width: 300px; 
        display:flex; 
        flex-direction:column; 
        align-items:center; 
        justify-content:center">
            
            <div style="
                width: 100%;           
                aspect-ratio: 16 / 9;
                background: url('./assets/PictureFrame.png') no-repeat center center;
                background-size: contain;
                display: flex;
                justify-content: center;
                align-items: center;">
                <iframe 
                    src="https://www.youtube.com/embed/aVZ_uZB_F7M?si=b3b9q4CAy0tXSAtS"
                    allowfullscreen
                    style="width: 94%; height: 95%; border: none; border-radius: 8px;"
                ></iframe>
            </div>

            <!-- Small Plaque -->
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: url('./assets/BlankPlaque.PNG') no-repeat center center;
                background-size: contain;
                padding: 10px; 
                margin-top: 2vh;
            ">
                <!-- Logo -->
                <img src='./assets/Cat Burglars Icon.png' style='width: clamp(5%, 2vw, 30%);'>

                <!-- Game title -->
                <h2 style='margin:5px 0 0 0; font-size: clamp(10px, 1vw, 30px) font-family: Charter;'>Cat Burglars</h2>
            </div>
        </div>

        <!-- Right Column -->
        <div style="
        flex: 0 0 35%; 
        min-width: 250px; 
        display:flex; 
        justify-content:center; 
        align-items:center;">
            <div style="max-width:60%; font-size: clamp(10px, 2vh, 30px); line-height:1.6; text-align:left; color:white;">
                <h2 style="font-family: Copperplate;">Contributions</h2>
                <ul" style="font-family: Charter;">
                    <li>Designed and created all 2D artwork and user interface elements.</li>
                    <li>Implemented networking functionality to support online co-op gameplay.</li>
                    <li>Developed in-game puzzles and programmed core gameplay mechanics.</li>
                    <li>Collaborated with a partner to shape the game toward a cohesive player experience goal.</li>
                    <li>Coordinated with Berklee College of Music to integrate original music and sound effects.</li>
                    <li>Edited the promotional trailer to effectively showcase the game.</li>
                    <li>Conducted playtests and interviews, incorporating feedback to refine gameplay and mechanics.</li>
                </ul>
            </div>
        </div>
    </div>
`;
    
    document.body.appendChild(museumOverlay);

    // Exit button listener
    document.getElementById("close-museum").addEventListener("click", () => {
        document.body.removeChild(museumOverlay);
        k.go("HomePage", { spawn: "Museum Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}
