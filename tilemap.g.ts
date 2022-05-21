// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000200000000000000000002000000000000000000020000000000000000000200000000000000000002000000000000000000020000000000000000000200000000000000000001000000000000000000`, img`
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
2 . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.builtin.forestTiles24], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
