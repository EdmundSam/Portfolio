import { makePlayer } from "../entities/player.js";
import { setBackgroundColor, setMapColliders, setDoors, setMapLayers, setBehind} from "./roomsUtil.js";
import { musicManager } from "../entities/musicManager.js";

export function homePage(k, roomData, sceneData = {})
{
    musicManager.play('./assets/Audio/Main.wav');

    setBackgroundColor(k, "#000000");
    const spawn = sceneData.spawn || "Spawn";

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0), k.sprite("map")]);
    
    const colliders = [];
    const positions = [];
    const doors = [];
    const behinds = [];

    for (const layer of roomLayers)
    {
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
        if(layer.name === "Wall Colliders" || layer.name === "Building Colliders")
        {
            colliders.push(...layer.objects);
            continue;
        }
        if(layer.name === "Behind Zones")
        {
            behinds.push(...layer.objects);
            continue;
        }
    }
    
    setMapLayers(k, map, roomData);
    setMapColliders(k, map, colliders);
    setDoors(k, map, doors);

    // Create and spawn player at location
    const player = map.add(makePlayer(k));
    const spawnPosition = positions.find(pos => pos.name === spawn);

    if (spawnPosition) 
    {
        player.setPosition(spawnPosition.x, spawnPosition.y);
    }
    player.setControls();

    setBehind(k, map, behinds, player);

    // Camera zoom and follow player
    k.camScale(2);
    k.onUpdate(() => {
        k.camPos(player.pos.x, player.pos.y);
    });

    // Door collision actions
    player.onCollide("door", (door) => {
        if (door.name === "Museum Door") {
            console.log("Entering Museum!");
            musicManager.stop();
            k.go("museumPage");
        }
        if (door.name === "Restaurant Door") {
            console.log("Entering Restaurant!");
            musicManager.stop();
            k.go("restaurantPage");
        }
        if (door.name === "House Door") {
            console.log("Entering House");
            musicManager.stop();
            k.go("housePage");
        }
        if (door.name === "School Door") {
            console.log("Entering School");
            musicManager.stop();
            k.go("schoolPage");
        }
    });

    // Set up Quicklinks and notes
    const kaboomCanvas = document.querySelector("canvas");

    if (kaboomCanvas) 
    {
        const uiLayer = document.createElement("div");
        uiLayer.style.position = "fixed";
        uiLayer.style.top = "0";
        uiLayer.style.left = "0";
        uiLayer.style.width = "100%";
        uiLayer.style.height = "100%";
        uiLayer.style.pointerEvents = "none";

        const quickLinks = document.createElement("div");
        quickLinks.innerHTML = `
        <div style="
            position: fixed;
            top: .5vh;
            left: .5vw;
            color: white;
            font-family: 'Pokemon';
            font-size: 1.5vh;
            padding: .5vh .5vw;
            border-radius: 1vh;
            z-index: 9999;
            width: 300px;
            white-space: normal;
            word-wrap: break-word;
            pointer-events: auto;
        ">
            <div style="font-size: 2vh; text-align: center;">Quick Links<br></div>
            <a href="#" id="toHouse" style="color: #00d0ff; cursor: pointer;">About Me</a><br>
            <a href="#" id="toSchool" style="color: #00d0ff; cursor: pointer;">Resume</a><br><br>

            <div style="font-size: 1.75vh;">Projects:<br></div>
            <a href="#" id="toRestaurant" style="color: #00d0ff; cursor: pointer;">Order Up!</a><br>
            <a href="#" id="toMuseum" style="color: #00d0ff; cursor: pointer;">Cat Burglars</a><br>
        </div>
        `;

        const wipLabel = document.createElement("div");
        wipLabel.innerHTML = `
            <div style="
                position: fixed;
                bottom: .5vh;
                right: .5vw;
                color: white;
                font-family: 'Pokemon';
                font-size: 1.5vh;
                padding: .5vh .5vw;
                border-radius: 1vh;
                width: 300px;
                white-space: normal;
                word-wrap: break-word;
            ">
                This is still a work in progress. Please excuse the bugs.
            </div>
        `;

        uiLayer.appendChild(quickLinks);
        uiLayer.appendChild(wipLabel);

        kaboomCanvas.parentNode.insertBefore(uiLayer, kaboomCanvas.nextSibling);

        // Link directions
        quickLinks.querySelector("#toMuseum").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Going to museum page");
            k.go("museumPage");
        });

        quickLinks.querySelector("#toRestaurant").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Going to restaurant page");
            k.go("restaurantPage");
        });

        quickLinks.querySelector("#toHouse").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Going to house page");
            k.go("housePage");
        });

        quickLinks.querySelector("#toSchool").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Going to school page");
            k.go("schoolPage");
        });
    } 
    
    else 
    {
        console.error("Kaboom canvas not found!");
    }
}