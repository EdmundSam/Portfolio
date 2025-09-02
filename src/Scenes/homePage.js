import { makePlayer } from "../entities/player.js";
import { setBackgroundColor, setMapColliders, setDoors} from "./roomsUtil.js";

export function homePage(k, roomData, sceneData = {})
{
    setBackgroundColor(k, "#000000");
    const spawn = sceneData.spawn || "Spawn";

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0), k.sprite("map")]);
    
    const colliders = [];
    const positions = [];
    const doors = [];

    for (const layer of roomLayers){
        if (layer.name === "Positions")
        {
            positions.push(...layer.objects);
            continue;
        }
        if (layer.name === "Doors")
        {
            doors.push(...layer.objects);
            continue;
        }
        if(layer.name === "Wall Colliders" || layer.name === "Building Colliders"){
            colliders.push(...layer.objects);
        }
    }
    
    setMapColliders(k, map, colliders);
    setDoors(k, map, doors);

    const player = map.add(makePlayer(k));

    const spawnPosition = positions.find(pos => pos.name === spawn);
    console.log(spawnPosition);
    if (spawnPosition) {
        player.setPosition(spawnPosition.x, spawnPosition.y);
    }
    player.setControls();

    k.camScale(2); // zoom in on player
    k.onUpdate(() => {
        k.camPos(player.pos.x, player.pos.y); // follow player
    });

    player.onCollide("door", (door) => {
    if (door.name === "Museum Door") {
        console.log("Entering Museum!");
        k.go("museumPage"); // show museum overlay
    }
    if (door.name === "Restaurant Door") {
        console.log("Entering Restaurant!");
        k.go("restaurantPage"); // show Restaurant overlay
    }
    if (door.name === "House Door") {
        console.log("Entering House");
        k.go("housePage"); // show House overlay
    }
});

const wipLabel = document.createElement("div");
wipLabel.innerText = "This is still a work in progress. Please excuse the bugs and obvious art issues!\n\n All artwork was done by me!";
wipLabel.style.position = "fixed"; 
wipLabel.style.bottom = "10px";
wipLabel.style.right = "10px";
wipLabel.style.color = "white";
wipLabel.style.fontFamily = "Arial, sans-serif";
wipLabel.style.fontSize = "14px";
wipLabel.style.background = "rgba(0,0,0,0.5)";
wipLabel.style.padding = "4px 8px";
wipLabel.style.borderRadius = "4px";
wipLabel.style.zIndex = "100"; 
wipLabel.style.width = "300px";
wipLabel.style.whiteSpace = "normal";
wipLabel.style.wordWrap = "break-word";

document.body.appendChild(wipLabel);
}