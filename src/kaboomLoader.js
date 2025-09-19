import kaboom from "../lib/kaboom.mjs"

export const scale = 1;
export const k = kaboom({
    width: 640,
    height: 540,
    background: [0, 0, 0],
    letterbox: true,
    global: false,
    scale,
    scaleMode: "pixel-perfect",
});

// Load map
k.loadSprite("map", "./maps/Portfolio Map.png");

k.loadSpriteAtlas("./sprites/PortfolioTileMap.png",
    {
        player:
        {
            x: 32,
            y: 256,
            width: 128,
            height: 128,
            sliceX: 4,
            sliceY: 4,
            anims:
            {
                down: {from: 0, to: 3, loop: true},
                left: {from: 4, to: 7, loop: true},
                right: {from: 8, to: 11, loop: true},
                up: {from: 12, to: 15, loop: true},
            },
        },
    }
);

k.loadFont("Pokemon", "./assets/PokemonClassic.ttf");