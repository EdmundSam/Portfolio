import {setBackgroundColor} from "./roomsUtil.js";

export function intro(k)
{
     // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(0, 0, 0), 
        k.pos(0, 0),
    ]);

    // Text box
    const textStr = "Welcome to Edmund's Portfolio!\n\nMove around using the arrow keys and enter the buildings to explore my portfolio.\n\nClick anywhere to continue.";

    const size = 24;
    const lineSpacing = 6;

    const lines = textStr.split("\n").length;
    const totalHeight = lines * (size + lineSpacing);

    // Center Y manually
    const introText = k.add([
        k.text(textStr, {
            size: size,
            width: k.width(),
            align: "center",
            font: "Pokemon",
            baseline: "top",
            lineSpacing: lineSpacing,
        }),
        k.pos(0, k.height()/2 - totalHeight/2),
        k.color(255,255,255),
    ]);


    // Wait for click or key press to continue
    const proceed = () => {
        k.go("HomePage");
    };

    k.onMouseDown(proceed);
    k.onKeyPress(["space", "enter"], proceed);
}