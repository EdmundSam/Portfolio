import { musicManager } from "../entities/musicManager.js";

export function housePage(k) {
    musicManager.play('./assets/Audio/House.wav');

    const houseOverlay = document.createElement("div");
    
    houseOverlay.id = "house-overlay";
    Object.assign(houseOverlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        background: "url('./assets/Images/Fireplace.png') no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "999",
    });

    houseOverlay.innerHTML = `
        <!-- Close button -->
        <button id="close-house" style="
            position:fixed;
            top:20px;
            right:20px;
            width:40px;
            height:40px;
            border-radius:50%;
            font-size:22px;
            font-weight:bold;
            cursor:pointer;
        ">✕</button>

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
                    cursor: pointer;
                ">
                Aaron Hipolito<br>
                </a>
                Art: ME!
        </div>

        <!-- Scrollable Panel -->
        <div id="house-panel" style="
            position: relative;
            width: 60%;
            height: auto;
            top: 66vh;
            background: rgba(0,0,0,0.6);
            padding: 40px;
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
            border-left: 2px solid rgba(255,255,255,0.1);
            border-right: 2px solid rgba(255,255,255,0.1);
        ">
            <div id="house-content" style="
                color: white;
                text-align: center;
            ">
                <h1 style="font-size: 32px; font-family: Pokemon">About Me</h1>
                <p style="font-size: 16px; font-family: Pokemon">
                    Hi, I’m Edmund!<br><br> 
                    My path to game development wasn’t straightforward. I started in computer engineering, then, after graduating, drifted into IT and customer service while trying to figure out what I actually wanted to do. A year went by, and I realized that circuits, signals, and customer service definitely weren’t for me. I did really enjoy the coding aspect, but I’d always been someone who loved creative work, and I wanted something that combined both.<br><br>
                    Serendipitously, one of my passions is interior design. I love exploring furniture stores, touring homes, and watching renovation videos. It’s fascinating to see how different people create different atmospheres and experiences through design. I wanted to do something similar to that, while also utilizing the technical skills I picked up in school. I started to explore graduate programs to see if I could find anything that spoke to me.<br><br>
                    That’s when I found a master’s program in game development and everything clicked. It is the perfect mix of creativity, programming, and design, which is exactly what I was looking for.<br><br>
                    It made so much sense, because I grew up loving video games. They helped me bond with family, explore new worlds, and escape from reality. Game development blends my creative interests, my technical background, and the hobby I’ve loved since I was a kid, and I’m looking forward to making meaningful experiences for others like they were for me.<br><br>
                    Even though I reached this path reluctantly, I’m glad everything worked out and I’m excited to see where it takes me.<br><br>
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(houseOverlay);

    const panel = document.querySelector("#house-panel");

    // Scrollable overlay
    houseOverlay.addEventListener("scroll", () => {
        const scrollPos = houseOverlay.scrollTop;

        const maxSlide = 66; 
        const finalTop = 5; 

        const limit = 300;
        const progress = Math.min(scrollPos / limit, 1);

        const newTop = maxSlide - (maxSlide - finalTop) * progress;

        panel.style.top = `${newTop}vh`;
    });

    // Close button
    document.getElementById("close-house").addEventListener("click", () => {
        document.body.removeChild(houseOverlay);
        k.go("HomePage", { spawn: "House Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) canvas.focus();
    });
}
