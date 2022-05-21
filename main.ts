controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 9 9 b . . . . . . 
        . . . b b b 9 9 1 1 b b b . . . 
        . . . b 9 9 9 9 1 1 9 9 b . . . 
        . . . . b 9 9 9 9 9 9 b . . . . 
        . . . . c b 9 9 9 9 b c . . . . 
        . . . . c 9 9 9 9 9 9 c . . . . 
        . . . . c 9 9 c c 9 9 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nice_ship_, 100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Star_ = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b a a b . . . . . . 
        . . . b b b a a 1 1 b b b . . . 
        . . . b a a a a 1 1 a a b . . . 
        . . . . b a a a a a a b . . . . 
        . . . . c b a a a a b c . . . . 
        . . . . c a a a a a a c . . . . 
        . . . . c a a c c a a c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nice_ship_, 100, 0)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let Enemy: Sprite = null
let Star_: Sprite = null
let Water: Sprite = null
let Nice_ship_: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
effects.blizzard.startScreenEffect()
Nice_ship_ = sprites.create(img`
    ..ccc.........ffffff....
    ..f1cc.......fcc11ff....
    ..f11cc...fffccccff.....
    ..f111cccc18821111cc....
    ..f111cc1118821111b9c...
    ..cf1111111822111b999c..
    .c11c111111822b11199b1c.
    f11ccccccc182299111b111c
    fffffcc111c822111111111f
    .....f1111182211111111f.
    ....f111111f22111111ff..
    ...c111111ffffffffff....
    ...c1111cfffc1f.........
    ...ffffffff1ccf.........
    .......ffff1cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(Nice_ship_)
Nice_ship_.setStayInScreen(true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    Enemy = sprites.create(img`
        ....ffffff.........ccc..
        ....ff55ccf.......cc5f..
        .....ffccccfff...cc55f..
        ....cc55544455cccc555f..
        ...c9b5555444555cc555f..
        ..c999b5554445555555fc..
        .c5b99111b544455555c55c.
        c555b111995444ccccccc55f
        f555555555554c555ccfffff
        .f5555555555455555f.....
        ..ff5555555cf555555f....
        ....ffffffffff555555c...
        .........f5cfffc5555c...
        .........fcc5ffffffff...
        ..........fc5ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    Enemy.x = scene.screenWidth()
    Enemy.y = randint(scene.screenHeight() - 10, 10)
    Enemy.vx = -70
})
