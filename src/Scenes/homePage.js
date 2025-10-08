import { makePlayer } from "../entities/player.js";
import { setBackgroundColor, setMapColliders, setDoors, setMapLayers} from "./roomsUtil.js";

export function homePage(k, roomData, sceneData = {})
{
    setBackgroundColor(k, "#000000");
    const spawn = sceneData.spawn || "Spawn";

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0)]);
    
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
    //setBehind(k, map, behinds);

    const player = map.add(makePlayer(k));

    const spawnPosition = positions.find(pos => pos.name === spawn);

    if (spawnPosition) 
    {
        player.setPosition(spawnPosition.x, spawnPosition.y);
    }
    player.setControls();

    k.camScale(2); //Zooms on player
    k.onUpdate(() => {
        k.camPos(player.pos.x, player.pos.y); //Makes camera follow player
    });

    player.onCollide("door", (door) => {
        if (door.name === "Museum Door") {
            console.log("Entering Museum!");
            k.go("museumPage");
        }
        if (door.name === "Restaurant Door") {
            console.log("Entering Restaurant!");
            k.go("restaurantPage");
        }
        if (door.name === "House Door") {
            console.log("Entering House");
            k.go("housePage");
        }
    });

    // Set up Quicklinks and notes
    const kaboomCanvas = document.querySelector("canvas");

    if (kaboomCanvas) 
    {
        // Create a container div for your UI overlays
        const uiLayer = document.createElement("div");
        uiLayer.style.position = "fixed";
        uiLayer.style.top = "0";
        uiLayer.style.left = "0";
        uiLayer.style.width = "100%";
        uiLayer.style.height = "100%";
        uiLayer.style.pointerEvents = "none";// Stops UI Canvas from interfering with other divs

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
            <a href="#" id="toHouse" style="color: #00d0ff; cursor: pointer;">Resume</a><br><br>

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

        // Append the container AFTER the Kaboom canvas in the DOM to ensure it's on top
        kaboomCanvas.parentNode.insertBefore(uiLayer, kaboomCanvas.nextSibling);

        // Add your event listeners
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
    } 
    
    else 
    {
        console.error("Kaboom canvas not found!");
    }

}