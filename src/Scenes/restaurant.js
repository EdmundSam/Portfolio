export function restaurantPage(k) {
    // Overlay container
    const overlay = document.createElement("div");
    overlay.id = "orderup-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "url('./assets/Restaurant Background.png') repeat";
    overlay.style.backgroundSize = "cover";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999";
    overlay.style.overflow = "auto";

    overlay.innerHTML = `
        <!-- Menu -->
        <div style="position: relative; width: 60%; height: 80%; padding: 15px; background: white; box-shadow: 0 6px 25px rgba(0,0,0,0.4); display: flex; overflow: hidden;">

            <!-- Content -->
                <div style="
                position: absolute;
                top: 2%;
                left: 2%;
                right: 2%;
                bottom: 2%;
                box-sizing: border-box;
                padding: 1vh; 
                border: 3px solid #0cc0df;
                display: flex;
                overflow: auto;
            ">

                <!-- Vertical Section -->
                <div style="max-width: 80%; padding: 1vh; padding-left: 1.5vh; border-right: 2px dotted #0cc0df; text-align: center; display: flex; flex-direction: column; align-items: center;">
                    <img src='./assets/Order Up Logo.png' style='width:15vw; margin:5px;' alt='Order Up! Logo'>
                    <div style="width:100%; border-top:2px dotted #0cc0df; margin:2vh 0;"></div>

                    <!-- Images -->
                    <div style="width: 100%; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center">
                        <!-- Art -->
                        <a href='./assets/Order Up Cards.png' target='_blank'>
                            <img src='./assets/Order Up Cards.png' style='width: 12vw; margin-bottom:1vh;' alt='Order Up Artwork Preview'>
                        </a>
                        <p style = "margin: 0;">
                            <a href='./assets/Order Up Cards.png' target='_blank'>Artwork</a>
                        </p>

                        <!-- Rules -->
                        <a href='./assets/Order Up! Rules.png' target='_blank'>
                            <img src='./assets/Order Up! Rules.png' style='width:12vw; margin-bottom:1vh; margin-top: 2vh;' alt='Order Up Rulebook Preview'>
                        </a>
                        <p style = "margin: 0;">
                            <a href='./assets/Order Up! Rules.png' target='_blank'>Rules</a>
                        </p>
                    </div>
                </div>

                <!-- Horizontal Section -->
                <div style="flex:1; display:flex; flex-direction: column; padding:1.5vw; padding-left: 1vw; text-align:center;">
                    <div style="border-bottom:2px dotted #0cc0df; padding-bottom:1.5vh;">
                        <h2 style=
                            "font-size: clamp(14px, 3vw, 120px);
                            color: #f3c432; 
                            margin-top: 1vh;
                            margin-bottom: 1vh;
                            text-shadow: 
                                -.1vh -.1vh 0 #7A5C00,  
                                .1vh -.1vh 0 #7a5c00,
                                -.1vh  .1vh 0 #7a5c00,
                                .1vh  .1vh 0 #7a5c00;">
                            About the Game
                        </h2>
                        <p style="text-align: center; font-size: clamp(10px, 2.5vh, 46px);">Order Up! is a fast-paced, chaotic card game where players frantically pass ingredients around to complete shared burger recipes in the center. Gather all the ingredients, ring the bell, and snatch the card before someone else gets to it! The chef who completes the most recipes after all orders are done wins. Expect constant action, quick thinking, and a lot of fun!</p>
                    </div>
                    <div>
                        <h2 style=
                            "font-size: clamp(16px, 3vw, 120px);
                            color: #f3c432; 
                            margin-top: 3vh;
                            margin-bottom: 1vh;
                            text-shadow: 
                                -.1vh -.1vh 0 #7A5C00,  
                                .1vh -.1vh 0 #7a5c00,
                                -.1vh  .1vh 0 #7a5c00,
                                .1vh  .1vh 0 #7a5c00;">
                            My Contributions
                        </h2>
                        <p style="text-align: left; font-size: clamp(12px, 3vh, 46px)"><strong> Role: Producer / Game Designer </strong></p>
                        <ul style="text-align:left; margin:0 auto; padding-left:1.5vw; font-size: clamp(10px, 2.5vh, 46px)">
                            <li>Delegated tasks, addressed blockers and dependancies, and scheduled meeting to maintain workflow.</li>
                            <li>Managed project timelines, set deadlines, and ensured tasks were completed efficiently.</li>
                            <li>Collaborated with a team of 3 on game design, playtesting, gathering feedback, and iterating on game mechanics and rules.</li>
                            <li>Created the artwork, designing the cards and visual assets using Canva and online resources.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

     document.body.appendChild(overlay);

    // Create close button outside of container
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.style.position = "fixed";
    closeBtn.style.top = "20px";
    closeBtn.style.right = "20px";
    closeBtn.style.width = "40px";
    closeBtn.style.height = "40px";
    closeBtn.style.borderRadius = "50%";
    closeBtn.style.fontSize = "22px";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.background = "rgba(244, 67, 54, 0.9)";
    closeBtn.style.color = "white";
    closeBtn.style.border = "none";
    closeBtn.style.zIndex = "1000";
    closeBtn.onmouseover = () => closeBtn.style.background = "rgba(200,50,40,1)";
    closeBtn.onmouseout = () => closeBtn.style.background = "rgba(244,67,54,0.9)";

    closeBtn.addEventListener("click", () => {
        document.body.removeChild(overlay);
        document.body.removeChild(closeBtn);
        k.go("HomePage", { spawn: "Restaurant Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });

    document.body.appendChild(closeBtn);
}
