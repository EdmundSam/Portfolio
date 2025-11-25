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

k.loadSprite("PortfolioTileMap", "./sprites/PortfolioTileMap.png", {
  sliceX: 12, 
  sliceY: 6  
});

k.loadSprite("Buildings", "./sprites/Buildings.png", {
  sliceX: 17,
  sliceY: 12
});

k.loadSprite("player", "./sprites/Character.png",
{
    sliceX: 4,
    sliceY: 4,
    anims:
    {
        down: {from: 0, to: 3, loop: true},
        left: {from: 4, to: 7, loop: true},
        right: {from: 8, to: 11, loop: true},
        up: {from: 12, to: 15, loop: true},
    },
});

k.loadFont("Pokemon", "./assets/PokemonClassic.ttf");
k.loadFont("Charter", "./assets/Charter.ttf");
k.loadFont("Copperplate", "./assets/Copperplate.otf");
k.loadFont("BarlowXB", "./assets/BarlowXB.ttf");