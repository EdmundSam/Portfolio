import {setBackgroundColor} from "./roomsUtil.js";

export function intro(k) {
    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(0, 0, 0),
        k.pos(0, 0),
    ]);

    const textStr = "Welcome to Edmund's Portfolio!\n\nMove around using the arrow keys and enter the buildings to explore my portfolio.\n\nClick anywhere to continue.";

    const size = 24;
    const lineSpacing = 6;

    // Centered text using origin
    const introText = k.add([
        k.text(textStr, {
            size: size,
            width: k.width(),
            align: "center",
            font: "Pokemon",
            baseline: "top",      // Safari-safe
            lineSpacing: lineSpacing,
        }),
        k.pos(k.width() / 2, k.height() / 2), // center point
        k.origin("center"),                    // horizontally and vertically centered
        k.color(255, 255, 255),
    ]);

    // Wait for click or key press to continue
    const proceed = () => {
        k.go("HomePage");
    };

    k.onMouseDown(proceed);
    k.onKeyPress(["space", "enter"], proceed);
}
