export function setBackgroundColor(k, hexColorCode)
{
    k.add([
        k.rect(k.width(), k.height()),
        k.color(k.Color.fromHex(hexColorCode)),
        k.fixed()
    ]);
}

export function setMapColliders(k, map, colliders)
{
    for (const collider of colliders)
    {
        if (collider.polygon)
        {
            const coordinates = [];
            for (const point of collider.polygon)
            {
                coordinates.push(k.vec2(point.x, point.y));
            }

            map.add([
                k.pos(collider.x, collider.y),
                k.area({
                    shape: new k.Polygon(coordinates),
                    collisionIgnore: ["collider"],
                }),
                "collider",
                collider.type,
            ]);
            continue;
        }

        map.add([
            k.pos(collider.x, collider.y),
            k.area({
                shape: new k.Rect(k.vec2(0), collider.width, collider.height),
                collisionIgnore:["collider"],
            }),
            k.body({isStatic: true}),
            "collider",
            collider.type,
        ]);
    }
}

export function setDoors(k, map, doors)
{
    for (const door of doors)
    {
        map.add([
            k.pos(door.x, door.y),
            k.area({
                shape: new k.Rect(k.vec2(0), door.width, door.height),
                collisionIgnore: ["collider"],
            }),
            k.body({ isStatic: true }),
            "door",
            { name: door.name }, // 👈 store door name
        ]);
    }
}

const TILESET_MAP = {
  "Portfolio Tile Map": "PortfolioTileMap",
  "Buildings": "Buildings"
};

export function setMapLayers(k, map, mapData) {
    map._layerEntities = map._layerEntities || {};

    // optionally compute z ordering by layer index (so later layers draw over earlier ones)
    const layersOrdered = mapData.layers.filter(l => l.type === "tilelayer" && l.visible !== false);

    for (let li = 0; li < layersOrdered.length; li++) {
        const layer = layersOrdered[li];
        map._layerEntities[layer.name] = map._layerEntities[layer.name] || [];

        const layerZ = 10 + li; // simple z offset by layer index (adjust as needed)

        for (let y = 0; y < layer.height; y++) {
            for (let x = 0; x < layer.width; x++) {
                const gid = layer.data[y * layer.width + x];
                if (!gid) continue; // empty tile

                // find which tileset this gid belongs to
                const tileset = mapData.tilesets.find(ts => 
                    gid >= ts.firstgid && gid < ts.firstgid + (ts.tilecount || (ts.columns * ts.tilecount || Infinity))
                );

                if (!tileset) {
                    console.warn("No tileset found for gid", gid);
                    continue;
                }

                const kaboomSpriteName = TILESET_MAP[tileset.name];
                if (!kaboomSpriteName) {
                    console.warn(`No Kaboom mapping for tileset "${tileset.name}". Add it to TILESET_MAP.`);
                    continue;
                }

                const tileId = gid - tileset.firstgid;
                const tileSize = tileset.tilewidth;

                const tile = map.add([
                    k.sprite(kaboomSpriteName, { frame: tileId }),
                    k.pos(x * tileSize, y * tileSize),
                    k.z(layerZ),
                    { layerName: layer.name }
                ]);

                map._layerEntities[layer.name].push(tile);
            }
        }
    }

    // debug log
    console.log("setMapLayers: created layers:", Object.keys(map._layerEntities));
}