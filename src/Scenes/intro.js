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

    const size = 24;
    const lineSpacing = 6;
    const maxWidth = k.width() * 0.9;

    // Create the text at the top first
    const introText = k.add([
        k.text(textStr, {
            size: size,
            width: maxWidth,
            font: "Pokemon",
            align: "center",
            baseline: "top",    // Safari-safe
            lineSpacing: lineSpacing,
        }),
        k.pos(k.width() / 2, 0), // temporary Y
        k.color(255, 255, 255),
    ]);

    // Wait one frame to ensure height is calculated correctly in Safari
    k.wait(0, () => {
        introText.pos.y = (k.height() / 2) - (introText.height / 2);
    });

    // Wait for click or key press to continue
    const proceed = () => k.go("HomePage");

    k.onMouseDown(proceed);
    k.onKeyPress(["space", "enter"], proceed);
}
