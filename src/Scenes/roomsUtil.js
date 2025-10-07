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

export function setMapLayers(k, mapData) {
    for (const layer of mapData.layers) {
        if (layer.type !== "tilelayer") continue;

        for (let y = 0; y < layer.height; y++) {
            for (let x = 0; x < layer.width; x++) {
                const tileIndex = layer.data[y * layer.width + x];
                if (tileIndex === 0) continue;

                const tileset = mapData.tilesets.find(ts =>
                    tileIndex >= ts.firstgid &&
                    tileIndex < ts.firstgid + ts.tilecount
                );
                if (!tileset) continue;

                const kaboomSpriteName = TILESET_MAP[tileset.name];
                if (!kaboomSpriteName) {
                    console.warn(`No Kaboom mapping for tileset ${tileset.name}`);
                    continue;
                }

                const tileId = tileIndex - tileset.firstgid;
                const tileSize = tileset.tilewidth;

                k.add([
                    k.sprite(kaboomSpriteName, { frame: tileId }),
                    k.pos(x * tileSize, y * tileSize),
                    k.z(layer.name === "Roofs" ? 200 : 0),
                ]);
            }
        }
    }
}
