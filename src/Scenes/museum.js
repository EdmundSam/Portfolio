export function museumPage(k) {
    // Overlay container
    const museumOverlay = document.createElement("div");
    museumOverlay.id = "museum-overlay";
    museumOverlay.style.position = "fixed";
    museumOverlay.style.top = "0";
    museumOverlay.style.left = "0";
    museumOverlay.style.width = "100%";
    museumOverlay.style.height = "100%";
    museumOverlay.style.background = "url('./assets/Gradient.png') repeat";
    museumOverlay.style.backgroundSize = "auto";
    museumOverlay.style.display = "flex";
    museumOverlay.style.flexDirection = "row";
    museumOverlay.style.justifyContent = "space-between";
    museumOverlay.style.padding = "60px";
    museumOverlay.style.boxSizing = "border-box";
    museumOverlay.style.zIndex = "999";
    museumOverlay.innerHTML = `
        <!-- Exit button -->
        <button id="close-museum" style="position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius:50%; font-size:22px; font-weight:bold; cursor:pointer;">✕</button>
        
        <div style="display:flex; width:100%; height:100%; justify-content:center; align-items:flex-start; padding:40px; gap:40px;">
    
        <!-- Left Column (65%) -->
        <div style="flex: 0 0 65%; display:flex; flex-direction:column; align-items:center;">
            
            <div style="
                width: 1040px; 
                height: 603px; 
                background: url('./assets/PictureFrame.png') no-repeat center center; 
                background-size: cover; 
                display: flex; 
                justify-content: center; 
                align-items: center;
            ">
                <iframe 
                    src="https://www.youtube.com/embed/aVZ_uZB_F7M?si=b3b9q4CAy0tXSAtS" 
                    frameborder="0" 
                    allowfullscreen
                    style="width: 1000px; height: 563px;"
                ></iframe>
            </div>

            <!-- Small Plaque -->
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                max-width: 600px;
                height: 120px;
                background: url('./assets/BlankPlaque.png') no-repeat center center;
                background-size: contain;
                padding: 25px; /* optional padding inside the plaque */
            ">
                <!-- Logo -->
                <img src='./assets/Cat Burglars Icon.png' style='max-width:50px;'>

                <!-- Game title -->
                <h2 style='margin:5px 0 0 0;'>Cat Burglars</h2>
            </div>
        </div>

        <!-- Right Column (35%) -->
        <div style="flex: 0 0 35%; display:flex; justify-content:center; align-items:center; padding:20px;">
            <div style="max-width:400px; font-size:16px; line-height:1.6; text-align:left; color:white;">
                <h2 style="margin-top:150px;">Contributions</h2>
                <ul style="padding-left:20px; margin:0;">
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
