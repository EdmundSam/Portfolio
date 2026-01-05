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
    const introText = k.add([
        k.text(
            "Welcome to Edmund's Portfolio!\n\nMove around using the arrow keys and enter the buildings to explore my portfolio.\n\nClick anywhere to continue.",
            {
                size: 24,
                width: k.width(), // wrap text
                align: "center",
                font: "Pokemon",
                baseline: "middle",
            }
        ),
        k.pos(20, k.height() / 2 - 100),
        k.color(255, 255, 255),
    ]);

    // Wait for click or key press to continue
    const proceed = () => {
        k.go("HomePage");
    };

    k.onMouseDown(proceed);
    k.onKeyPress(["space", "enter"], proceed);
}