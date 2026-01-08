import { setBackgroundColor } from "./roomsUtil.js";

export function intro(k) {
    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(0, 0, 0),
        k.pos(0, 0),
    ]);

    const textStr = `Welcome to Edmund's Portfolio!

Move around using the arrow keys and enter the buildings to explore my portfolio.

Click anywhere to continue.`;

    const maxHeight = k.height() * 0.8; // text cannot exceed 80% of canvas height
    const maxWidth = k.width() * 0.9;   // allow some padding on sides
    let fontSize = 24;                  // starting font size
    const minFontSize = 12;             // smallest readable size
    const lineSpacing = 6;

    let introText;

    // Autoscale loop: create, check height, reduce size if needed
    while (fontSize >= minFontSize) {
        if (introText) k.destroy(introText); // remove previous attempt

        introText = k.add([
            k.text(textStr, {
                size: fontSize,
                width: maxWidth,
                font: "Pokemon",
                align: "center",
                baseline: "top",   // Safari-safe
                lineSpacing: lineSpacing,
            }),
            k.pos(k.width() / 2, k.height() / 2),
            k.origin("center"),    // center horizontally and vertically
            k.color(255, 255, 255),
        ]);

        if (introText.height <= maxHeight) break; // fits, done
        fontSize--; // reduce size and try again
    }

    // Safety: if font hits minimum, leave as is
    if (fontSize < minFontSize) {
        console.warn("Intro text may be too long for screen!");
    }

    // Wait for click or key press to continue
    const proceed = () => k.go("HomePage");

    k.onMouseDown(proceed);
    k.onKeyPress(["space", "enter"], proceed);
}
